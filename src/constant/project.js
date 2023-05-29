export const PROJECT_CONSTANT = [
  {
    name: "Spooky Friends",
    genre: ["모바일", "ZEPETO", "수집형", "캐주얼"],
    date: "2023.",
    listDescription: "",
    description:
      "제페토 플랫폼에 사이드 프로젝트로 출시한 포켓몬 고 느낌의 간단한 수집형 캐주얼 게임입니다.<br/>게임 내 카메라로 사진을 찍어 유령을 포획하고, 포획한 유령을 장착해 클리커 전투를 즐기거나<br/>유령을 진화시키며 캐릭터들을 수집할 수 있습니다.",
    iconUrl: [
      "/images/icon/Icon_Tool_Unity.png",
      "/images/icon/Icon_Tool_Ps.png",
      "/images/icon/Icon_Tool_Ai.png",
    ],
    imageUrl: [
      "/images/project/SpookyFriends/Screenshot_Play.png",
      "/images/project/SpookyFriends/Screenshot_Camera.png",
      "/images/project/SpookyFriends/Movie_GhostInfo.gif",
      "/images/project/SpookyFriends/Movie_Battle.gif",
    ],
    type: "vertical",
    source: "",

    // 키워드~컬러 팔레트 없는 경우는 주석 처리
    // keyword: ["키워드1", "키워드2", "키워드3"],
    // keyShape: "/images/icon/unity.png",
    // colorPalette: "/images/portfolio/projectS/colorPalette.png",
    detailImage: [
      {
        // 1st
        url: "/images/project/SpookyFriends/Screenshot_Play.png",
        text: "플레이 화면",
        type: "vertical",
      },
      {
        url: "/images/project/SpookyFriends/Movie_Toast.gif",
        text: "토스트 메세지",
        type: "vertical",
      },
      {
        url: "/images/project/SpookyFriends/Movie_Emoji.gif",
        text: "감정표현",
        type: "vertical",
      },
      {
        // 2nd
        url: "/images/project/SpookyFriends/Screenshot_Camera.png",
        text: "카메라 화면",
        type: "vertical",
      },
      {
        url: "/images/project/SpookyFriends/Movie_Camera_GetGhost.gif",
        text: "유령 포획 성공 화면",
        type: "vertical",
      },
      {
        url: "/images/project/SpookyFriends/Screenshot_Camera_Result.png",
        text: "찍은 사진",
        type: "vertical",
      },
      {
        // 3rd
        url: "/images/project/SpookyFriends/Screenshot_Inventory.png",
        text: "유령 가방",
        type: "vertical",
      },
      {
        url: "/images/project/SpookyFriends/Movie_GhostInfo.gif",
        text: "유령 정보",
        type: "vertical",
      },
      {
        url: "/images/project/SpookyFriends/Screenshot_Inventory_Release.png",
        text: "유령 풀어주기",
        type: "vertical",
      },
      {
        // 4th
        url: "/images/project/SpookyFriends/Movie_Evolve.gif",
        text: "유령 진화",
        type: "vertical",
      },
      {
        url: "/images/project/SpookyFriends/Screenshot_Evolve_Result.png",
        text: "부적 사용 팝업",
        type: "vertical",
      },
      {
        url: "/images/project/SpookyFriends/Screenshot_Evolve_Result_Fail.png",
        text: "진화 실패",
        type: "vertical",
      },
      {
        // 5th
        url: "/images/project/SpookyFriends/Movie_Loading.gif",
        text: "로딩",
        type: "vertical",
      },
      {
        url: "/images/project/SpookyFriends/Movie_Battle.gif",
        text: "전투",
        type: "vertical",
      },
      {
        url: "/images/project/SpookyFriends/Screenshot_HowToPlay.png",
        text: "게임 방법",
        type: "vertical",
      },
      {
        // 6th
        url: "/images/project/SpookyFriends/Screenshot_Ranking.png",
        text: "랭킹",
        type: "vertical",
      },
      {
        url: "/images/project/SpookyFriends/Screenshot_Shop.png",
        text: "상점",
        type: "vertical",
      },
      {
        url: "/images/project/SpookyFriends/Screenshot_Upgrade.png",
        text: "업그레이드",
        type: "vertical",
      },
      {
        // 7th
        url: "/images/project/SpookyFriends/Screenshot_Setting.png",
        text: "설정",
        type: "vertical",
      },
    ],
    history: [
      {
        name: "프로젝트에서 작업한 내용",
        list: [
          {
            title: "UI·UX",
            content: [
              { text: "GUI, 연출 및 엔진 작업", type: "text" },
              { text: "화면 명세 기획", type: "text" },
              { text: "UX 텍스트 및 번역 관리", type: "text" },
            ],
          },
          {
            title: "아트",
            content: [
              { text: "캐릭터 모델링 및 애니메이팅", type: "text" },
              { text: "이펙트 작업", type: "text" },
            ],
          },
          {
            title: "셰이더 작성",
            content: [
              { text: "유령 캐릭터 셰이더 작업", type: "text" },
              { text: "필드 셰이더 작업", type: "text" },
              // 들여쓰기 두번 텍스트 작성 예
              // {
              //   text: "TMP 셰이더 작업",
              //   content: ["text", "text"],
              //   type: "list",
              // },
            ],
          },
        ],
      },
      {
        name: "프로젝트를 통해 얻은 경험",
        list: [
          {
            title: "빠른 개발을 위한 작업 경량화",
            content: [
              { text: "UX부터 UI까지 산정된 작업 기간이 2달 내였는데, 퇴근 후에 진행하는 사이드프로젝트였기 때문에 실제 작업 시간은 더 빠듯했습니다.<br/>따라서 레이아웃은 수정사항이 발생하더라도 쉽게 대응할 수 있는 무난한 방향으로 설정하고, GUI는 패턴과 물결 모양을 여러 화면에서 반복해 사용하는 최대한 단순한 구성으로 작업했습니다. 그렇게 작업하면서 최대한 '빠르게' '가볍게' 작업하는 방법론을 체화할 수 있었던 것 같습니다.", type: "text" },
            ],
          },
          {
            title: "유니티 버텍스 셰이더 입문",
            content: [
              { text: "유령다운 알파 그라데이션과 캐릭터 바리에이션을 위해 유령 캐릭터의 셰이더를 작업하며 버텍스 셰이더에 입문했습니다.<br/>모델의 버텍스 포지션 값을 사용해서 그라데이션의 범위를 자유롭게 조정 가능하도록 작성했습니다. 서페이스 셰이더에서 버텍스 셰이더를 어떻게 사용해야 하는지와 구조체를 어떻게 수정해야 하는지 배울 수 있었습니다.", type: "text" },
              { text: "관련 블로그 포스팅<br/>https://do-workspace.tistory.com/36", type: "text" },
            ],
          },
          {
            title: "프로젝트 회고<br/>https://do-workspace.tistory.com/43",
            content: [
            ],
          },
        ],
      },
    ],
  },
];
