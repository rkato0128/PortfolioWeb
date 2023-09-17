import { motion } from "framer-motion";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import { PORTFOLIO_CONSTANT } from "../../constant/portfolio";
function Portfolio() {
  const router = useRouter();
  return (
    <S.Wrapper>
      {PORTFOLIO_CONSTANT.map((portfolio, index) => (
        <>
          <S.PortfolioContent
            key={index}
            layout
            whileHover={{ y: -3 }}
            onClick={() => router.push(`/portfolio/${portfolio.name}`)}
          >
            <S.Info>
              <p>{portfolio.name}</p>
              <span>{portfolio.genre.join(" / ")}</span>
              <span>{portfolio.date}</span>
              <span>{portfolio.listDescription}</span>
              <S.IconWrapper>
                {portfolio.iconUrl.map((item) => (
                  <img key={item} src={item} alt="logo" />
                ))}
              </S.IconWrapper>
            </S.Info>
            <S.ImageWrapper>
              {portfolio.imageUrl.map((item) => (
                <S.GameImage
                  key={item}
                  src={item}
                  alt="image"
                  viewType={portfolio.imageType ?? portfolio.type}
                />
              ))}
            </S.ImageWrapper>
          </S.PortfolioContent>
          {PORTFOLIO_CONSTANT.length - 1 !== index && <hr />}
        </>
      ))}
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    width: 1200px;
    margin: 0 auto;
    /* margin-top: 180px; */
    padding: 120px 0 320px 0;

    hr {
      margin: 48px 0;
      width: 100%;
      height: 2px;
      background: #d9d9d9;
    }
  `,
  PortfolioContent: styled(motion.div)`
    display: flex;
    gap: 24px;
    position: relative;

    cursor: pointer;

    &:hover {
      &::before {
        position: absolute;
        left: -48px;
        content: " ";

        width: 4px;
        height: 100%;
        background-color: black;
      }
    }
  `,
  Info: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    color: #1e1e1e;

    p {
      font-weight: 400;
      font-size: 32px;
      line-height: 38px;
    }
    span {
      margin-bottom: 8px;
      font-weight: 200;
      font-size: 20px;
      line-height: 24px;
    }
  `,
  ImageWrapper: styled.div`
    display: flex;
    gap: 24px;
    margin-left: auto;
  `,
  GameImage: styled.img`
    width: ${(props) => (props.viewType === "horizontal" ? "384px" : "180px")};
    height: auto;
    /* ${(props) =>
      props.type === "vertical"
        ? css`
            width: 180px;
            height: auto;
          `
        : css`
            width: 384px;
            height: auto;
          `} */
  `,
  IconWrapper: styled.div`
    display: flex;
    gap: 8px;
    margin-top: auto;

    img {
      width: 40px;
      height: 40px;
    }
  `,
};
export default Portfolio;
