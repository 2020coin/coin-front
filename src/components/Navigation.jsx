import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  position: fixed;
  background-color: #FCFDFF;
  float: right;
  right: 100px;
  top: 50px;
  z-index: 9999;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const List = styled.ul`
  position: relative;
  width: 95px;
  height: 34px;
  border: 2px solid #324CBA;
  cursor: default;
  border-radius: 3px;
  overflow: hidden;
  transition: width 0.2s ease-in-out;

  &:hover {
    width: 553.317px;

    li:nth-child(2),
    li:nth-child(3),
    li:nth-child(4) {
      opacity: 0;
      animation: openAnimation 1s both;
    }

    @keyframes openAnimation {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }

  li:nth-child(1),
  li:nth-child(2),
  li:nth-child(3) {
    margin-left: 50px;
  }
`;

const Item = styled.li`
  position: relative;
  margin: 8px 20px 8px 20px;
  float: right;
`;

const Text = styled.span`
  user-select: none;
  font-size: 18px;
  font-weight: bold;
`;

const Navigation = ({ select }) => (
  <Container>
    <List>
      <Item>
        <Text>
          MENU
        </Text>
      </Item>
      <Item onClick={() => select('Member')}>
        <Text>
          MEMBER
        </Text>
      </Item>
      <Item onClick={() => select('Project')}>
        <Text>
          PROJECT
        </Text>
      </Item>
      <Item onClick={() => select('Produce')}>
        <Text>
          PRODUCE
        </Text>
      </Item>
    </List>
  </Container>
);

Navigation.propTypes = {
  select: PropTypes.func.isRequired,
};

export default Navigation;
