import { useRouter } from "next/router";
import { forwardRef, useEffect, useState } from "react";
import { S } from "../../layout/Header/style";
const HomeHeader = forwardRef(({ isIntersecting, isSticky }, ref) => {
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);

  const isMain = router.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function getMenuIcon() {
    if (isMain && !isSticky) {
      return {
        profile: "/images/icon/icon_profile_on_white.svg",
        portfolio: "/images/icon/icon_portfolio_off_white.svg",
        project: "/images/icon/icon_project_off_white.svg",
      };
    } else {
      return {
        profile: `/images/icon/icon_profile_${isMain ? "on" : "off"}.svg`,
        portfolio: `/images/icon/icon_portfolio_${
          router.pathname?.includes("portfolio") ? "on" : "off"
        }.svg`,
        project: `/images/icon/icon_project_${
          router.pathname?.includes("project") ? "on" : "off"
        }.svg`,
      };
    }
  }
  return (
    <S.Wrapper
      ref={ref}
      path={router.pathname}
      isIntersecting={isIntersecting}
      innerHeight={typeof window !== "undefined" && window.innerHeight}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      isSticky={isSticky}
      isMain={isMain}
    >
      <S.Menu>
        <S.MenuItem
          isSelected={router.pathname === "/"}
          onClick={() => router.push("/")}
        >
          <img src={getMenuIcon().profile} alt="logo" />
          {!isSticky && <span>Profile</span>}
        </S.MenuItem>
        <S.MenuItem
          isSelected={router.pathname?.includes("portfolio")}
          onClick={() => router.push("/portfolio")}
        >
          <img src={getMenuIcon().portfolio} alt="logo" />
          {!isSticky && <span>Portfolio</span>}
        </S.MenuItem>
        <S.MenuItem
          isSelected={router.pathname?.includes("project")}
          onClick={() => router.push("/project")}
        >
          <img src={getMenuIcon().project} alt="logo" />
          {!isSticky && <span>Project</span>}
        </S.MenuItem>
      </S.Menu>
    </S.Wrapper>
  );
});

HomeHeader.displayName = "HomeHeader";
export default HomeHeader;
