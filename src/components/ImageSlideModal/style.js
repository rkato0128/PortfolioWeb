import styled, { createGlobalStyle } from "styled-components";

export const ModalGlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1171;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
`;

export const ModalContent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, 0, 0);
  min-width: 375px;
  min-height: 80px;
  border-radius: 4px;
`;

export const ButtonClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  padding: 0;
  text-align: center;
  background: none;
  border-width: 0;
  z-index: 30;
`;
