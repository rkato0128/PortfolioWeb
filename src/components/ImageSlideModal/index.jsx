import { useEffect, useRef, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import PortalContainer from "../PortalContainer";
import ArrowLine from "../../components/icon/ArrowLine";
import { motion, useMotionValue, animate } from "framer-motion";

function ImageSlideModal({ images, selectedImageIndex, isOpen, handleClose }) {
  const [index, setIndex] = useState(0);
  const [beforeIndex, setBeforeIndex] = useState(null);
  const containerRef = useRef(null);
  const x = useMotionValue(0);

  const pageStyle = {
    width: "100%",
    height: "100%",
    display: "inline-block",
    flex: "none",
    textAlign: "center",
  };

  const transition = {
    type: "spring",
    bounce: 0,
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isOpen && event.key === "Escape") {
        event.preventDefault();
        handleClose();
      }
    };

    if (isOpen) {
      setBeforeIndex(selectedImageIndex);
      setIndex(selectedImageIndex);
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    const indexCheck = index - beforeIndex;

    if (indexCheck === 1 || indexCheck === -1) {
      const controls = animate(x, calculateNewX(), transition);
      return controls.stop;
    } else {
      x.set(calculateNewX());
    }
  }, [index]);

  const handleClickBackground = () => {
    handleClose();
    setIndex(0);
    setBeforeIndex(null);
  };

  const calculateNewX = () => -index * (containerRef.current?.clientWidth || 0);

  // drag
  const handleEndDrag = (e, dragProps) => {
    const clientWidth = containerRef.current?.clientWidth || 0;

    const { offset } = dragProps;

    if (offset.x > clientWidth / 4) {
      handlePrev();
    } else if (offset.x < -clientWidth / 4) {
      handleNext();
    } else {
      animate(x, calculateNewX(), transition);
    }
  };

  const handlePrev = () => {
    if (index === 0) return;

    setBeforeIndex(index);
    setIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (index === images.length - 1) return;

    setBeforeIndex(index);
    setIndex((prev) => prev + 1);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <PortalContainer className="modalContainer">
      <S.ModalGlobalStyle />
      <S.Wrapper>
        <S.Background onClick={handleClickBackground} />
        <S.Content>
          <S.CarouselWrapper>
            <S.Carousel ref={containerRef}>
              {images.map((image, i) => {
                if (image.type === "video") return null;
                return (
                  <motion.div
                    key={i}
                    style={{
                      ...pageStyle,
                      x,
                      left: `${i * 100}%`,
                      right: `${i * 100}%`,
                    }}
                  >
                    <S.GameImg src={image.url} />
                  </motion.div>
                );
              })}
              <S.Prev onClick={() => handlePrev()}>
                <ArrowLine width={16} height={32} />
              </S.Prev>
              <S.Next onClick={() => handleNext()}>
                <ArrowLine width={16} height={32} />
              </S.Next>
            </S.Carousel>
          </S.CarouselWrapper>
        </S.Content>
        <S.Close onClick={handleClickBackground}>
          <img src={"/images/close.png"} alt="close" />
        </S.Close>
      </S.Wrapper>
    </PortalContainer>
  );
}

export default ImageSlideModal;

const S = {
  ModalGlobalStyle: createGlobalStyle`
     body {
       overflow: hidden;
     }
   `,
  Wrapper: styled.div`
    width: 100vw;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1171;
  `,
  Background: styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.9);
  `,
  Content: styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
  `,
  CarouselWrapper: styled.div`
    width: 100vw;
    height: 100%;
  `,
  Carousel: styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    display: flex;
    align-items: center;
  `,
  Close: styled.button`
    position: absolute;
    top: 24px;
    right: 24px;
    width: 64px;
    height: 64px;

    img {
      width: 64px;
      height: 64px;
    }
  `,
  Prev: styled.button`
    position: absolute;
    top: 50%;
    left: 48px;

    svg {
      transform: rotate(180deg);
    }

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 350%;
      height: 250%;
    }
  `,
  Next: styled.button`
    position: absolute;
    top: 50%;
    right: 48px;

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 350%;
      height: 250%;
    }
  `,
  GameImg: styled.img`
    max-width: 1050px;
    max-height: 1050px;
    margin: 0 auto;
  `,
};
