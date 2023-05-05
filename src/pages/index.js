import { motion } from "framer-motion";
import { forwardRef, useCallback, useEffect, useState } from "react";
import { useRef } from "react";
import styled from "styled-components";
import SectionBio from "../feature/home/SectionBio";
import History from "../feature/home/SectionBio/History";
import SectionCover from "../feature/home/SectionCover";
import HomeHeader from "../feature/home/HomeHeader";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export default function Home() {
  const [offset, setOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const firstOffset = useRef(null);
  const secondOffset = useRef(null);
  const parallaY = useRef(null);

  const firstEntry = useIntersectionObserver(firstOffset, {
    threshold: 1,
  });

  const secondEntry = useIntersectionObserver(secondOffset, {
    threshold: [0, 1, 0],
  });

  const refs = useCallback(() => {
    return { firstRef: firstOffset, secondRef: secondOffset };
  }, [firstOffset, secondOffset]);

  useEffect(() => {
    if (isAnimating && parallaY.current) {
      const checkAnimationComplete = setInterval(() => {
        if (
          Math.abs(
            parallaY.current?.container.current.scrollTop -
              offset * window.innerHeight
          ) < 1
        ) {
          setIsAnimating(false);
          clearInterval(checkAnimationComplete);
        }
      }, 10);
    }
  }, [offset, isAnimating]);

  useEffect(() => {
    function checkScrollDirection(event) {
      const scrollTop = parallaY.current.container.current.scrollTop;

      const isScrollableUp =
        checkScrollDirectionIsUp(event) &&
        window.innerHeight === scrollTop &&
        secondEntry?.isIntersecting &&
        !firstEntry?.isIntersecting;

      const isScrollableDown =
        (!checkScrollDirectionIsUp(event) &&
          offset === 0 &&
          firstEntry?.isIntersecting &&
          !secondEntry?.isIntersecting) ||
        (!firstEntry?.isIntersecting && !secondEntry?.isIntersecting);

      const isScrollable =
        offset === 1 &&
        secondEntry.isIntersecting &&
        !firstEntry.isIntersecting;

      if (isScrollableUp && !isAnimating && scrollY === 0) {
        return setOffset(0);
      } else if (isScrollableDown && !isAnimating) {
        return setOffset(1);
      } else if (isScrollable && !isAnimating) {
        return true;
      } else {
        event.stopPropagation();
        event.preventDefault();
        return false;
      }
    }

    function checkScrollDirectionIsUp(event) {
      return event.deltaY < 0;
    }

    const container = parallaY.current.container.current;
    container.addEventListener("wheel", checkScrollDirection, {
      passive: false,
    });

    return () => {
      container.removeEventListener("wheel", checkScrollDirection, {
        passive: false,
      });
    };
  }, [firstEntry, secondEntry, offset, isAnimating, scrollY]);

  const scroll = () => {
    if (parallaY.current) {
      setIsAnimating(true);
      parallaY.current.scrollTo(offset);
    }
  };

  const handleOffsetChange = () => {
    if (offset === 0) {
      setOffset(1);
    } else {
      setOffset(0);
    }
  };

  const handleScroll = (e) => {
    setScrollY(e.target.scrollTop);
  };

  useEffect(() => {
    scroll();
  }, [offset]);

  return (
    <main>
      <Wrapper ref={parallaY} pages={2}>
        <Page offset={0} setOffset={handleOffsetChange} ref={refs} />
        <Page offset={1} ref={refs} handleScroll={handleScroll} />
      </Wrapper>
    </main>
  );
}

const Page = forwardRef(({ offset, setOffset, handleScroll }, ref) => {
  const { firstRef, secondRef } = ref();

  if (offset === 0) {
    return (
      <ParallaxLayer
        offset={offset}
        speed={0.05}
        style={{ transform: `translateY(0px)` }}
      >
        <HomeHeader isSticky={false} />
        <SectionCover ref={firstRef} />
      </ParallaxLayer>
    );
  }

  return (
    <ParallaxLayer
      offset={offset}
      speed={0.05}
      style={{
        overflow: "auto",
        zIndex: 1,
      }}
      onScroll={handleScroll}
    >
      <div ref={secondRef}>
        <HomeHeader isSticky={true} />
        <SectionBio />
        <History />
      </div>
    </ParallaxLayer>
  );
});

Page.displayName = "Page";

const Wrapper = styled(Parallax)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const SectionWrapper = styled(motion.div)`
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;
