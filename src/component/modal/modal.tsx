import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import AnimatedText from "react-animated-text-content";
import { Contents } from "src/component/modal/contents";
import { useViewportSize } from "src/lib/mantine";

export const ModalComponent = () => {
  const [opened, setOpened] = useState(false);
  const handleOnClick = () => setOpened(true);
  const theme = useMantineTheme();
  const { width } = useViewportSize();
  if (width === undefined) {
    return <div />;
  }
  const isMobile = width < 576;

  return (
    <>
      <Modal
        withCloseButton={false}
        onClose={() => setOpened(false)}
        centered
        opened={opened}
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
        size="100vw"
        title=""
        className=""
      >
        <Contents />
      </Modal>
      <div className="flex items-center justify-center">
        {isMobile ? (
          <Contents />
        ) : (
          <div className="mt-20">
            <button type="button" onClick={handleOnClick}>
              <AnimatedText
                type="words" // animate words or chars
                animation={{
                  x: "200px",
                  y: "-20px",
                  scale: 1.1,
                  ease: "ease-in-out",
                }}
                animationType="float"
                interval={0.06}
                duration={0.8}
                tag="p"
                className="animated-paragraph font-mono text-2xl font-black"
                includeWhiteSpaces
                threshold={0.1}
                rootMargin="20%"
              >
                Tap to Show Reslut
              </AnimatedText>
            </button>
          </div>
        )}
      </div>
    </>
  );
};
