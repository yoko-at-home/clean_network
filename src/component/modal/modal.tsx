import { useMantineTheme } from "@mantine/core";
import { useState } from "react";
import AnimatedText from "react-animated-text-content";
import { useModal } from "react-hooks-use-modal";
import { CardModal } from "src/component/modal/modalCard";

export const ModalComponent = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [Modal, open, close] = useModal("root", {
    preventScroll: true,
  });
  const handleOnClick = () => {
    setIsOpenModal(true);
    open();
  };
  return (
    <>
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
      <Modal>
        <CardModal />
      </Modal>
    </>
  );
};
