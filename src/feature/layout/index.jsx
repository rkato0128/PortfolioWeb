import { useRouter } from "next/router";
import { useRef } from "react";
import styled, { css } from "styled-components";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useIsMounted } from "../../hooks/useIsMounted";
import Footer from "./footer";
import Header from "./Header";

function Layout({ children }) {
  const router = useRouter();
  const isMain = router.pathname === "/";
  const isMounted = useIsMounted();

  if (isMounted) {
    return (
      <div>
        {!isMain && <Header />}
        <S.Container isMain={isMain}>{children}</S.Container>
        {!isMain && <Footer />}
      </div>
    );
  }
}

export default Layout;

const S = {
  Container: styled.main`
    /* margin: 180px auto 0px; */
    box-sizing: border-box;

    ${({ isMain }) =>
      isMain &&
      css`
        margin: 0 auto;
      `}
  `,
};
