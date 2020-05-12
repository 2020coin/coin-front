import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';

import '../styles/aos.css';
import Navigation from '../components/Navigation';
import Profile from '../components/Profile';

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Blue1 = styled.img`
  position: absolute;
  transform: scale(0.5);
  left: -440px;
  top: -440px;
  user-select: none;
`;

const Blue2 = styled.img`
  position: absolute;
  transform: scale(0.5);
  left: -550px;
  bottom: -610px;
  user-select: none;
`;

const Orange = styled.img`
  position: absolute;
  transform: scale(0.7);
  left: -840px;
  top: -220px;
  user-select: none;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Yellow = styled.img`
  position: absolute;
  transform: scale(0.5);
  right: -800px;
  user-select: none;
`;

const Produce = styled.section`
  position: relative;
  width: 100%;
  height: 100%;

  .title {
    top: 300px;
    right: 230px;
  }

  .line {
    top: 280px;
    right: 230px;
  }

  .text {
    text-align: right;
    top: 570px;
    right: 230px;
  }

  @media (max-width: 1024px) {
    .title {
      top: 180px;
      right: 20px;
    }

    .line {
      top: 160px;
      right: 20px;
    }

    .text {
      top: 420px;
      right: 20px;
    }
  }
`;

const Project = styled.section`
  position: relative;
  width: 100%;
  height: 100%;

  .title {
    top: 180px;
    left: 230px;
  }

  .line {
    top: 160px;
    left: 230px;
  }

  .text {
    top: 520px;
    left: 230px;
  }

  @media (max-width: 1024px) {
    .title {
      top: 180px;
      left: 20px;
    }

    .line {
      top: 160px;
      left: 20px;
    }

    .text {
      top: 320px;
      left: 20px;
      margin-right: 20px;
    }
  }
`;

const Member = styled.section`
  position: relative;
  width: 100%;
  height: 420%;
  overflow: hidden;

  .title {
    top: 250px;
    right: 230px;
  }

  .line {
    top: 230px;
    right: 230px;
  }

  .text {
    text-align: right;
    top: 430px;
    right: 230px;

    #mobile {
      display: none;
    }

    #pc {
      display: inline;
    }
  }

  @media (max-width: 1024px) {
    height: 100%;

    .title {
      top: 180px;
      right: 20px;
    }

    .line {
      top: 160px;
      right: 20px;
    }

    .text {
      top: 320px;
      right: 20px;

      #mobile {
        display: inline;
      }

      #pc {
        display: none;
      }
    }
  }
`;

const Title = styled.span`
  position: absolute;
  font-family: 'Fredoka One';
  color: #89adf9;
  font-size: 58px;
  z-index: 2;
  user-select: none;
`;

const Line = styled.div`
  position: absolute;
  background-color: #ebf1ff;
  border-radius: 5px;
  width: 120px;
  height: 10px;
  z-index: 2;
`;

const Logo = styled.img`
  position: absolute;
  width: 18%;
  height: auto;
  padding: 35px 65px 35px 65px;
  border-radius: 43px;
  box-shadow: 0 3px 10px #29257e28;
  left: 30%;
  top: 70px;
  user-select: none;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const ProduceIllust = styled.img`
  position: absolute;
  width: 30%;
  height: quto;
  padding: 0 55px 0 55px;
  border-radius: 43px;
  box-shadow: 0 3px 10px #29257e28;
  background-color: #fcfdff;
  z-index: 1;
  left: 120px;
  top: 230px;
  user-select: none;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const ProjectIllust = styled.img`
  position: absolute;
  width: 35%;
  height: auto;
  right: 10px;
  top: 30%;
  transform: translate(0, -50%);
  user-select: none;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const MemberIllust = styled.img`
  position: absolute;
  width: 45%;
  height: auto;
  left: 10px;
  top: 10%;
  transform: translate(0, -50%);
  user-select: none;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const ToolList = styled.ul`
  position: absolute;
  left: 225px;
  top: 300px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const ToolItem = styled.li`
  display: inline-block;
  margin-left: 5px;
  margin-right: 25px;
  border-radius: 50px;
  width: 100px;
  height: 100px;
  box-shadow: 0 3px 10px #29257e28;
`;

const ToolIcon = styled.img`
  width: 50px;
  height: 50px;
  padding: 25px;
  user-select: none;
`;

const Slogan = styled.span`
  position: absolute;
  color: #3769e5;
  right: 230px;
  top: 450px;
  font-size: 38px;
  z-index: 2;
  user-select: none;

  &:after {
    display: block;
    text-align: right;
    content: 'COIN';
    color: #324cba;
    margin-top: 10px;
  }

  @media (max-width: 1024px) {
    top: 250px;
    right: 20px;
  }
`;

const Text = styled.span`
  position: absolute;
  font-size: 20px;
  line-height: 1.2em;
  z-index: 2;
  user-select: none;
`;

const ProfileList = styled.ul`
  position: absolute;
  top: 45%;

  @media (max-width: 1024px) {
    display: none;
  }

  @media (max-width: 1350px) {
    transform: scale(0.9);

    li {
      margin-left: 60px;
    }
  }

  @media (max-width: 1280px) {
    transform: scale(0.8);

    li {
      margin-left: 40px;
    }
  }

  @media (max-width: 1160px) {
    li {
      margin-left: 30px;
    }
  }

  @media (max-width: 1120px) {
    li {
      margin-left: 5px;
    }
  }
`;

const ProfileItem = styled.li`
  background-color: #fcfdff;
  width: 250px;
  height: 400px;
  display: inline-block;
  border-radius: 30px;
  box-shadow: 0 3px 10px #29257e28;
  text-align: center;
  margin-left: 80px;
  margin-top: 30px;
  margin-bottom: 20px;
`;

const OpenChat = styled.a`
  color: orange;
`;

const page = () => {
  const select = (p) => {
    const start = document.documentElement.scrollTop;
    const change = document.getElementById(p).offsetTop - start;
    const increment = 6;
    let currentTime = 0;

    const easeInOutQuad = (t, b, c, d) => {
      let T = t;
      T /= d / 2;
      if (T < 1) return (c / 2) * T * T + b;
      T -= 1;
      return (-c / 2) * (T * (T - 2) - 1) + b;
    };

    const animate = () => {
      currentTime += increment;
      const val = easeInOutQuad(currentTime, start, change, 300);
      document.documentElement.scrollTop = val;
      if (currentTime < 300) {
        setTimeout(animate, increment);
      }
    };

    animate();
  };

  useEffect(AOS.init);

  return (
    <Container>
      <Navigation select={select} />
      <Produce id="Produce">
        <Logo src="illustrations/Logo.svg" data-aos="fade-left" />
        <ProduceIllust src="illustrations/Produce.svg" data-aos="fade-right" />
        <Blue1 src="illustrations/Blue_1.svg" />
        <Line className="line" data-aos="fade-right" />
        <Title className="title" data-aos="fade-left">
          PRODUCE
        </Title>
        <Slogan data-aos="fade-down">같이의 가치를 믿다</Slogan>
        <Text className="text" data-aos="fade-up-left">
          코인은
          <br />
          한국디지털미디어고등학교의 IT 프로젝트 동아리입니다
          <br />
          개발자, 디자이너, 기획자가 모여
          <br />
          원하는 프로젝트를 기획 및 진행합니다
          <br />
          <OpenChat href="https://open.kakao.com/o/ssqdbA3b">카카오톡 오픈채팅</OpenChat>
        </Text>
      </Produce>
      <Project id="Project">
        <ProjectIllust src="illustrations/Project.svg" data-aos="zoom-in" />
        <Orange src="illustrations/Orange.svg" />
        <Line className="line" data-aos="slide-left" />
        <Title className="title" data-aos="slide-right">
          PROJECT
        </Title>
        <ToolList>
          <ToolItem>
            <ToolIcon src="tools/vscode.png" />
          </ToolItem>
          <ToolItem>
            <ToolIcon src="tools/photoshop.png" />
          </ToolItem>
          <ToolItem>
            <ToolIcon src="tools/illustrator.png" />
          </ToolItem>
          <ToolItem>
            <ToolIcon src="tools/atom.png" />
          </ToolItem>
          <ToolItem>
            <ToolIcon src="tools/xd.png" />
          </ToolItem>
        </ToolList>
        <Text className="text" data-aos="fade-up-right">
          디자인팀은 Adobe의 Photoshop, Illustrator, XD 프로그램을 이용해서
          <br />
          프로젝트를 진행하게 됩니다
          <br />
          이론 수업 후 간단하게 실습을 진행하는 방식으로 디자인 수업이 진행되며,
          <br />
          로고, 포스터, UI&UX를 교육할 예정입니다
          <br />
          <br />
          개발팀은 프로그램에 제약없이 자유롭게
          <br />
          프로젝트를 진행하게 됩니다
          <br />
          간단한 프로그래밍 문제를 풀거나 과제를 수행하며 실력을 키울 수 있도록 하며,
          <br />
          백엔드, 프론트엔드 개발군을 나누어 교육할 예정입니다
        </Text>
      </Project>
      <Member id="Member">
        <MemberIllust src="illustrations/Member.svg" data-aos="slide-right" />
        <Yellow src="illustrations/Yellow.svg" />
        <Blue2 src="illustrations/Blue_2.svg" />
        <Line className="line" data-aos="slide-left" />
        <Title className="title" data-aos="slide-right">
          MEMBER
        </Title>
        <Text className="text" data-aos="fade-up">
          코인은 개발자, 디자이너 그리고 기획자로 이루어져 있습니다
          <br />
          <span id="pc">아래의 카드를 클릭하면 동아리원의 평소 모습을 볼 수 있습니다</span>
          <span id="mobile">컴퓨터로 접속하면 동아리원의 프로필을 확인할 수 있습니다</span>
        </Text>
        <ProfileList>
          <ProfileItem data-aos="zoom-in">
            <Profile name="김한경" />
          </ProfileItem>
          <ProfileItem data-aos="zoom-in">
            <Profile name="심재성" />
          </ProfileItem>
          <ProfileItem data-aos="zoom-in">
            <Profile name="김상민" />
          </ProfileItem>
          <ProfileItem data-aos="zoom-in">
            <Profile name="김민상" />
          </ProfileItem>
          <ProfileItem data-aos="zoom-in">
            <Profile name="김관우" />
          </ProfileItem>
          <ProfileItem data-aos="zoom-in">
            <Profile name="박승아" />
          </ProfileItem>
          <ProfileItem data-aos="zoom-in">
            <Profile name="한진향" />
          </ProfileItem>
          <ProfileItem data-aos="zoom-in">
            <Profile name="남승일" />
          </ProfileItem>
          <ProfileItem data-aos="zoom-in">
            <Profile name="김재연" />
          </ProfileItem>
          <ProfileItem data-aos="zoom-in">
            <Profile name="이채은" />
          </ProfileItem>
          <ProfileItem data-aos="zoom-in">
            <Profile name="김민준" />
          </ProfileItem>
          <ProfileItem data-aos="zoom-in">
            <Profile name="박진성" />
          </ProfileItem>
          <ProfileItem data-aos="zoom-in">
            <Profile name="손승욱" />
          </ProfileItem>
        </ProfileList>
      </Member>
    </Container>
  );
};

export default page;
