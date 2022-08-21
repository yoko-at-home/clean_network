import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import AnimatedText from "react-animated-text-content";
import { SwiperCards } from "src/component/modal/swiper";

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
        size="calc(100vw - 87px)"
        title="Welcome to グラフ管理アプリ"
        className=""
      >
        <div className="w-5/6 p-20">
          <SwiperCards />
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
            className="animated-paragraph font-mono text-7xl font-black"
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="20%"
          >
            Tap to Start
          </AnimatedText>
        </button>
      </div>
    </>
  );
};
