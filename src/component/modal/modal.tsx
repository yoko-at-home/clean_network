import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import AnimatedText from "react-animated-text-content";

export const ModalComponent = () => {
  const [opened, setOpened] = useState(false);
  const handleOnClick = () => setOpened(true);
  const theme = useMantineTheme();
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
        size="calc(100vw - 300px)"
        title="クラスタ"
        className=""
      >
        <div className="h-screen">
          <div>汚染度合</div>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla qui
            est illo sunt quo harum et, sequi molestias nesciunt iste dolorem
            doloremque quam magnam doloribus quod labore modi mollitia ipsa.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla qui
            est illo sunt quo harum et, sequi molestias nesciunt iste dolorem
            doloremque quam magnam doloribus quod labore modi mollitia ipsa.
          </div>
          <div>活動履歴</div>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla qui
            est illo sunt quo harum et, sequi molestias nesciunt iste dolorem
            doloremque quam magnam doloribus quod labore modi mollitia ipsa.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla qui
            est illo sunt quo harum et, sequi molestias nesciunt iste dolorem
            doloremque quam magnam doloribus quod labore modi mollitia ipsa.
          </div>
        </div>
      </Modal>
      <div className="flex h-96 items-center justify-center">
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
    </>
  );
};
