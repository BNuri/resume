const toyprojects = [
  {
    period: "2020.03-",
    title: "Typerz",
    description: [
      `Typescript, React를 사용하여 만든 타자 연습 사이트입니다.`,
      `Express를 이용하여 api 서버를 만들어 사용하였습니다.`,
      `글을 등록할 수 있으며, 타자 연습을 할 수 있습니다.`,
      `연습이 끝난 후에 랭킹을 확인할 수 있습니다.`,
    ],
    stack: ["Typescript", "React"],
    siteLink: "https://agitated-pasteur-cee57f.netlify.com/#/",
    gitHubLink: "https://github.com/BNuri/typerz",
  },
  {
    period: "2020.02-2020.03",
    title: "Portfolio",
    description: [`프로젝트를 소개하는 포트폴리오 사이트입니다.`],
    stack: ["React", "Redux"],
    siteLink: "https://www.bnuri.me",
    gitHubLink: "https://github.com/BNuri/portfolio",
  },
  {
    period: "2019.12-2020.02",
    title: "Nomflex",
    description: [
      `영화 정보 조회 사이트입니다.`,
      `MovieAPI에서 데이터를 가져와서 사용했습니다.`,
      `영화, TV의 인기 리스트, 방영 리스트 및 상세 페이지를 조회할 수 있습니다.`,
      `Netlify에 배포하였습니다.`,
    ],
    stack: ["React"],
    siteLink: "https://goofy-knuth-6c2cbf.netlify.com",
    gitHubLink: "https://github.com/BNuri/nomflex",
  },
  {
    period: "2019.06-2019.12",
    title: "Wetube",
    description: [
      `동영상 공유 사이트입니다.`,
      `Github, Facebook 혹은 이메일을 통해 회원가입을 할 수 있습니다.`,
      `동영상을 녹화하거나 업로드할 수 있으며, 조회할 수 있습니다.`,
      `파일은 AWS S3로 관리하고 있으며, heroku에 배포하였습니다.`,
    ],
    stack: ["NodeJS", "ES6", "Express", "MongoDB"],
    siteLink: "https://whispering-ocean-42081.herokuapp.com",
    gitHubLink: "https://github.com/BNuri/wetube",
  },
];

const careers = [
  {
    company: "아이라자스",
    period: "2019.02-2019.10 (9개월)",
    projects: [
      {
        period: "2019.10",
        title: "트레일러닝 대회 등록 확인 페이지 개발",
        description: [
          `구글 시트에서 데이터를 DB에 업로드하는 api 개발`,
          `사용자가 등록 여부 확인할 수 있는 페이지 개발`,
          `cafe24에 배포`,
          `기여도 100`,
        ],
        stack: ["JavaScript", "NodeJS", "ExpressJS", "MariaDB"],
      },
      {
        period: "2019.06-2019.10",
        title: "러닝 관리 웹, 앱 서비스 프로젝트 참여",
        description: [
          `사업계획서를 토대로 요구사항 정의`,
          `전체 일정 계획 및 업무 분담`,
          `기능 정의, DB 테이블 설계, api 설계, 앱 화면 설계 및 관련 문서화 작업`,
          `기여도: 20`,
        ],
        stack: [],
      },
      {
        period: "2019.02-2019.10",
        title: "소방업무 관리 웹 서비스 프로젝트 참여",
        description: [
          `프론트단 작업, 반응형 웹으로 수정`,
          `테스트 시나리오 작성 및 테스트 진행`,
          `디버깅, 유지보수`,
          `문서화 작업`,
          `기여도: 20`,
        ],
        stack: [
          "Java",
          "Spring",
          "HTML5",
          "CSS3",
          "Bootstrap",
          "MariaDB",
          "CVS",
        ],
      },
    ],
  },
];

const educations = [
  {
    period: "2020.03",
    title: "ReactJS Online Bootcamp 수료",
    description: ["React, ES6 이론 학습", "Nomflex 프로젝트 실습"],
    stack: ["React", "ES6", "Styled Components"],
  },
  {
    period: "2020.01",
    title: "HTML/CSS Online Bootcamp 수료",
    description: ["HTML, CSS 이론 학습", "Kokoa Talk 프로젝트 실습"],
    stack: ["HTML5", "CSS3"],
  },
  {
    period: "2019.12",
    title: "VanillaJS Online Bootcamp 수료",
    description: ["VanillaJS 이론 학습", "wetube 프로젝트 실습"],
    stack: ["JavaScript", "ES6"],
  },
  {
    period: "2018.05",
    title: "블록체인 기반 핀테크 서비스 개발 과정 수료",
    description: [
      "블록체인의 기본 이론에 대한 학습",
      "api를 활용하여 전자지갑 개발, 이틀간 서비스 기획과 간단한 구현",
    ],
    stack: [],
  },
  {
    period: "2017.09-2018.03",
    title: "웹 표준 웹 프로그래밍 고급 인력 양성 과정 수료",
    description: [
      "웹 프로그래밍의 기본 이론 학습",
      "3개월간 팀 프로젝트 진행 [위치 기반 자동 경로 추천 플랫폼 by 여행 SNS]",
    ],
    stack: [
      "Java",
      "DBMS",
      "네트워크",
      "Servlet",
      "JSP",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
  },
  {
    period: "2017.08",
    title: "JAVA Programming 수강",
    description: ["Java 기본 문법 학습"],
    stack: ["Java"],
  },
  {
    period: "2011.03-2015.02",
    title: "건양대학교 심리상담치료학과 졸업",
    description: ["3.8 / 4.5 학점"],
    stack: [],
  },
];

const certificates = [
  {
    period: "2018.08",
    title: "정보처리기사",
    publisher: "발행처: 한국산업인력공단",
  },
  {
    period: "2017.09",
    title: "TOEIC 820",
    publisher: "발행처: ETS",
  },
  {
    period: "2017.08",
    title: "JLPT N1",
    publisher: "발행처: 일본국제교류기금",
  },
];
