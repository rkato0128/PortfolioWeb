import styled from "styled-components";
import Header from "../../layout/Header";
import Contact from "./Contact";
import History from "./History";
import Profile from "./Profile";

import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import { forwardRef, useRef } from "react";

const SectionBio = forwardRef(({ scrollMargin }, ref) => {
  return (
    <S.SectionBioWrapper ref={ref}>
      <Profile />
    </S.SectionBioWrapper>
  );
});

SectionBio.displayName = "sectionBio";

export default SectionBio;

const S = {
  SectionBioWrapper: styled.section`
    width: 1200px;
    padding: 160px 0 120px 0;
    margin: 0 auto;
  `,
  Hr: styled.hr`
    width: 100%;
    height: 2px;
    margin-top: 120px;
    margin-bottom: 96px;
    background-color: #d9d9d9;
  `,
};
