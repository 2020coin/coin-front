import React from 'react';
import styled from 'styled-components';

import Navigation from '../components/Navigation';

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
`;

const Blue2 = styled.img`
  position: absolute;
  transform: scale(0.5);
  left: -550px;
  bottom: -610px;
`;

const Orange = styled.img`
  position: absolute;
  transform: scale(0.7);
  left: -840px;
  top: -220px;
`;

const Yellow = styled.img`
  position: absolute;
  transform: scale(0.5);
  right: -800px;
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
`;

const Member = styled.section`
  position: relative;
  width: 100%;
  height: 200%;
  overflow: hidden;
`;

const Title = styled.span`
  position: absolute;
  font-family: 'Impact LT Std';
  color: #89ADF9;
  font-size: 58px;
  z-index: 2;
`;

const Line = styled.div`
  position: absolute;
  background-color: #EBF1FF;
  border-radius: 5px;
  width: 120px;
  height: 10px;
  z-index: 2;
`;

const Logo = styled.img`
  position: absolute;
  transform: scale(0.7);
  padding: 35px 65px 35px 65px;
  border-radius: 43px;
  box-shadow: 0 3px 10px #29257E28;
  left: 580px;
  top: 70px;
`;

const ProduceIllust = styled.img`
  position: absolute;
  transform: scale(0.7);
  padding: 0 55px 0 55px;
  border-radius: 43px;
  box-shadow: 0 3px 10px #29257E28;
  background-color: #FCFDFF;
  z-index: 1;
  left: 50px;
  top: 150px;
`;

const ProjectIllust = styled.img`
  position: absolute;
  transform: scale(0.9);
  right: 10px;
  top: 50%;
  transform: translate(0, -50%);
`;

const ToolList = styled.ul`
  position: absolute;
  left: 225px;
  top: 300px;
`;

const ToolItem = styled.li`
  display: inline-block;
  margin-left: 5px;
  margin-right: 25px;
  border-radius: 50px;
  width: 100px;
  height: 100px;
  box-shadow: 0 3px 10px #29257E28;
`;

const ToolIcon = styled.img`
  width: 50px;
  height: 50px;
  padding: 25px;
`;

const Slogan = styled.span`
  position: absolute;
  color: #3769E5;
  right: 230px;
  top: 450px;
  font-size: 38px;
  z-index: 2;

  &:after {
    display: block;
    text-align: right;
    content: "COIN";
    color: #324CBA;
    margin-top: 10px;
  }
`;

const Text = styled.span`
  position: absolute;
  font-size: 20px;
  line-height: 1.2em;
  z-index: 2;
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

  return (
    <Container>
      <Navigation select={select} />
      <Produce id="Produce">
        <Logo src="illustrations/Logo.svg" />
        <ProduceIllust src="illustrations/Produce.svg" />
        <Blue1 src="illustrations/Blue_1.svg" />
        <Line className="line" />
        <Title className="title">
          PRODUCE
        </Title>
        <Slogan>
          같이의 가치를 믿다
        </Slogan>
        <Text className="text">
          코인은
          <br />
          한국디지털미디어고등학교의 IT 프로젝트 동아리입니다
          <br />
          개발자, 디자이너, 기획자가 모여
          <br />
          원하는 프로젝트를 기획 및 진행합니다
        </Text>
      </Produce>
      <Project id="Project">
        <ProjectIllust src="illustrations/Project.svg" />
        <Orange src="illustrations/Orange.svg" />
        <Line className="line" />
        <Title className="title">PROJECT</Title>
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
        <Text className="text">
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
        <Yellow src="illustrations/Yellow.svg" />
        <Blue2 src="illustrations/Blue_2.svg" />
        <Line className="line" />
        <Title className="title">MEMBER</Title>
      </Member>
    </Container>
  );
};

export default page;
