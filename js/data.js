"use strict";

var toyprojects = [{
  period: "2020.03-",
  title: "Typerz",
  description: ["Typescript, React\uB97C \uC0AC\uC6A9\uD558\uC5EC \uB9CC\uB4E0 \uD0C0\uC790 \uC5F0\uC2B5 \uC0AC\uC774\uD2B8\uC785\uB2C8\uB2E4.", "Express\uB97C \uC774\uC6A9\uD558\uC5EC api \uC11C\uBC84\uB97C \uB9CC\uB4E4\uC5B4 \uC0AC\uC6A9\uD558\uC600\uC2B5\uB2C8\uB2E4.", "\uAE00\uC744 \uB4F1\uB85D\uD560 \uC218 \uC788\uC73C\uBA70, \uD0C0\uC790 \uC5F0\uC2B5\uC744 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.", "\uC5F0\uC2B5\uC774 \uB05D\uB09C \uD6C4\uC5D0 \uB7AD\uD0B9\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."],
  stack: ["Typescript", "React"],
  siteLink: "https://agitated-pasteur-cee57f.netlify.com/#/",
  gitHubLink: "https://github.com/BNuri/typerz"
}, {
  period: "2020.02-2020.03",
  title: "Portfolio",
  description: ["\uD504\uB85C\uC81D\uD2B8\uB97C \uC18C\uAC1C\uD558\uB294 \uD3EC\uD2B8\uD3F4\uB9AC\uC624 \uC0AC\uC774\uD2B8\uC785\uB2C8\uB2E4."],
  stack: ["React", "Redux"],
  siteLink: "https://www.bnuri.me",
  gitHubLink: "https://github.com/BNuri/portfolio"
}, {
  period: "2019.12-2020.02",
  title: "Nomflex",
  description: ["\uC601\uD654 \uC815\uBCF4 \uC870\uD68C \uC0AC\uC774\uD2B8\uC785\uB2C8\uB2E4.", "MovieAPI\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uAC00\uC838\uC640\uC11C \uC0AC\uC6A9\uD588\uC2B5\uB2C8\uB2E4.", "\uC601\uD654, TV\uC758 \uC778\uAE30 \uB9AC\uC2A4\uD2B8, \uBC29\uC601 \uB9AC\uC2A4\uD2B8 \uBC0F \uC0C1\uC138 \uD398\uC774\uC9C0\uB97C \uC870\uD68C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.", "Netlify\uC5D0 \uBC30\uD3EC\uD558\uC600\uC2B5\uB2C8\uB2E4."],
  stack: ["React"],
  siteLink: "https://goofy-knuth-6c2cbf.netlify.com",
  gitHubLink: "https://github.com/BNuri/nomflex"
}, {
  period: "2019.06-2019.12",
  title: "Wetube",
  description: ["\uB3D9\uC601\uC0C1 \uACF5\uC720 \uC0AC\uC774\uD2B8\uC785\uB2C8\uB2E4.", "Github, Facebook \uD639\uC740 \uC774\uBA54\uC77C\uC744 \uD1B5\uD574 \uD68C\uC6D0\uAC00\uC785\uC744 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.", "\uB3D9\uC601\uC0C1\uC744 \uB179\uD654\uD558\uAC70\uB098 \uC5C5\uB85C\uB4DC\uD560 \uC218 \uC788\uC73C\uBA70, \uC870\uD68C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.", "\uD30C\uC77C\uC740 AWS S3\uB85C \uAD00\uB9AC\uD558\uACE0 \uC788\uC73C\uBA70, heroku\uC5D0 \uBC30\uD3EC\uD558\uC600\uC2B5\uB2C8\uB2E4."],
  stack: ["NodeJS", "ES6", "Express", "MongoDB"],
  siteLink: "https://whispering-ocean-42081.herokuapp.com",
  gitHubLink: "https://github.com/BNuri/wetube"
}];

var careers = [{
  company: "아이라자스",
  period: "2019.02-2019.10 (9개월)",
  projects: [{
    period: "2019.10",
    title: "트레일러닝 대회 등록 확인 페이지 개발",
    description: ["\uAD6C\uAE00 \uC2DC\uD2B8\uC5D0\uC11C \uB370\uC774\uD130\uB97C DB\uC5D0 \uC5C5\uB85C\uB4DC\uD558\uB294 api \uAC1C\uBC1C", "\uC0AC\uC6A9\uC790\uAC00 \uB4F1\uB85D \uC5EC\uBD80 \uD655\uC778\uD560 \uC218 \uC788\uB294 \uD398\uC774\uC9C0 \uAC1C\uBC1C", "cafe24\uC5D0 \uBC30\uD3EC", "\uAE30\uC5EC\uB3C4 100"],
    stack: ["JavaScript", "NodeJS", "ExpressJS", "MariaDB"]
  }, {
    period: "2019.06-2019.10",
    title: "러닝 관리 웹, 앱 서비스 프로젝트 참여",
    description: ["\uC0AC\uC5C5\uACC4\uD68D\uC11C\uB97C \uD1A0\uB300\uB85C \uC694\uAD6C\uC0AC\uD56D \uC815\uC758", "\uC804\uCCB4 \uC77C\uC815 \uACC4\uD68D \uBC0F \uC5C5\uBB34 \uBD84\uB2F4", "\uAE30\uB2A5 \uC815\uC758, DB \uD14C\uC774\uBE14 \uC124\uACC4, api \uC124\uACC4, \uC571 \uD654\uBA74 \uC124\uACC4 \uBC0F \uAD00\uB828 \uBB38\uC11C\uD654 \uC791\uC5C5", "\uAE30\uC5EC\uB3C4: 20"],
    stack: []
  }, {
    period: "2019.02-2019.10",
    title: "소방업무 관리 웹 서비스 프로젝트 참여",
    description: ["\uD504\uB860\uD2B8\uB2E8 \uC791\uC5C5, \uBC18\uC751\uD615 \uC6F9\uC73C\uB85C \uC218\uC815", "\uD14C\uC2A4\uD2B8 \uC2DC\uB098\uB9AC\uC624 \uC791\uC131 \uBC0F \uD14C\uC2A4\uD2B8 \uC9C4\uD589", "\uB514\uBC84\uAE45, \uC720\uC9C0\uBCF4\uC218", "\uBB38\uC11C\uD654 \uC791\uC5C5", "\uAE30\uC5EC\uB3C4: 20"],
    stack: ["Java", "Spring", "HTML5", "CSS3", "Bootstrap", "MariaDB", "CVS"]
  }]
}];

var educations = [{
  period: "2020.03",
  title: "ReactJS Online Bootcamp 수료",
  description: ["React, ES6 이론 학습", "Nomflex 프로젝트 실습"],
  stack: ["React", "ES6", "Styled Components"]
}, {
  period: "2020.01",
  title: "HTML/CSS Online Bootcamp 수료",
  description: ["HTML, CSS 이론 학습", "Kokoa Talk 프로젝트 실습"],
  stack: ["HTML5", "CSS3"]
}, {
  period: "2019.12",
  title: "VanillaJS Online Bootcamp 수료",
  description: ["VanillaJS 이론 학습", "wetube 프로젝트 실습"],
  stack: ["JavaScript", "ES6"]
}, {
  period: "2018.05",
  title: "블록체인 기반 핀테크 서비스 개발 과정 수료",
  description: ["블록체인의 기본 이론에 대한 학습", "api를 활용하여 전자지갑 개발, 이틀간 서비스 기획과 간단한 구현"],
  stack: []
}, {
  period: "2017.09-2018.03",
  title: "웹 표준 웹 프로그래밍 고급 인력 양성 과정 수료",
  description: ["웹 프로그래밍의 기본 이론 학습", "3개월간 팀 프로젝트 진행 [위치 기반 자동 경로 추천 플랫폼 by 여행 SNS]"],
  stack: ["Java", "DBMS", "네트워크", "Servlet", "JSP", "HTML5", "CSS3", "JavaScript"]
}, {
  period: "2017.08",
  title: "JAVA Programming 수강",
  description: ["Java 기본 문법 학습"],
  stack: ["Java"]
}, {
  period: "2011.03-2015.02",
  title: "건양대학교 심리상담치료학과 졸업",
  description: ["3.8 / 4.5 학점"],
  stack: []
}];

var certificates = [{
  period: "2018.08",
  title: "정보처리기사",
  publisher: "발행처: 한국산업인력공단"
}, {
  period: "2017.09",
  title: "TOEIC 820",
  publisher: "발행처: ETS"
}, {
  period: "2017.08",
  title: "JLPT N1",
  publisher: "발행처: 일본국제교류기금"
}];