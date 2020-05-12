import React from 'react';
import PropTypes from 'prop-types';

const memberData = {
  김한경: {
    role: '동장, 버섯',
    grade: '2학년',
    department: 'DC',
    position: '디자인',
    profileChange: () => {
      document.getElementById('I김한경').src = '/profiles/말랑꿀떡.png';
      document.getElementById('N김한경').textContent = '말랑꿀떡';
    },
  },
  심재성: {
    role: '부동장',
    grade: '2학년',
    department: 'WP',
    position: '풀스택',
    profileChange: () => {
      document.getElementById('I심재성').src = '/profiles/오옹.png';
      document.getElementById('N심재성').textContent = '오옹???';
    },
  },
  김상민: {
    role: '개꼰대',
    grade: '2학년',
    department: 'WP',
    position: '기획',
    profileChange: () => {
      document.getElementById('I김상민').src = '/profiles/깡.png';
      document.getElementById('N김상민').textContent = '깡!';
    },
  },
  김민상: {
    role: '유사 개발자',
    grade: '2학년',
    department: 'HD',
    position: '백엔드',
    profileChange: () => {
      document.getElementById('I김민상').src = '/profiles/우욱.png';
      document.getElementById('N김민상').textContent = '우욱..';
    },
  },
  김관우: {
    role: '브레인 담당',
    grade: '2학년',
    department: 'WP',
    position: '백엔드',
    profileChange: () => {
      document.getElementById('I김관우').src = '/profiles/까꿍.png';
      document.getElementById('N김관우').textContent = '까꿍!';
    },
  },
  박승아: {
    role: '새싹 디자이너',
    grade: '2학년',
    department: 'WP',
    position: '디자인',
    profileChange: () => {
      document.getElementById('I박승아').src = '/profiles/흐헤헤.png';
      document.getElementById('N박승아').textContent = '흐헤헤';
    },
  },
  한진향: {
    role: '고양이',
    grade: '2학년',
    department: 'DC',
    position: '디자인',
    profileChange: () => {
      document.getElementById('I한진향').src = '/profiles/쿨쿨.png';
      document.getElementById('N한진향').textContent = '쿨쿨..';
    },
  },
  남승일: {
    role: '개쩌는 개발자',
    grade: '1학년',
    department: 'HD',
    position: '프론트엔드',
    profileChange: () => {},
  },
  김재연: {
    role: '쟁연',
    grade: '1학년',
    department: 'DC',
    position: '디자인',
    profileChange: () => {},
  },
  이채은: {
    role: '새싹 개발자',
    grade: '1학년',
    department: 'WP',
    position: '프론트엔드, 디자인',
    profileChange: () => {},
  },
  김민준: {
    role: '로열로더',
    grade: '1학년',
    department: 'EB',
    position: '기획, 디자인',
    profileChange: () => {},
  },
  박진성: {
    role: '아빠 안잔다',
    grade: '1학년',
    department: 'WP',
    position: '백엔드',
    profileChange: () => {},
  },
  손승욱: {
    role: '슬욱',
    grade: '1학년',
    department: 'EB',
    position: '디자인',
    profileChange: () => {},
  },
};

const profile = (props) => {
  const { name } = props;
  const imgSrc = `/profiles/${name}.png`;
  const data = memberData[name];
  const method = memberData[name].profileChange;

  return (
    <div
      aria-hidden
      className="profileContainer"
      onClick={method}
      onKeyPress={method}
      role="button"
    >
      <img className="image" id={`I${name}`} src={imgSrc} alt="profileImage" />
      <p className="name" id={`N${name}`}>
        {name}
      </p>
      <p className="id">
        {data.grade}
        {' '}
        {data.department}
      </p>
      <p className="role">{data.role}</p>
      <p className="position">{data.position}</p>

      <style jsx>
        {`
          .image,
          p {
            user-select: none;
          }

          .profileContainer {
            height: 100%;
            cursor: pointer;
          }

          .image {
            margin-top: 25px;
            border-radius: 25px;
          }

          .name {
            font-size: 35px;
            color: #3769e5;
          }

          .role {
            font-size: 18px;
          }

          .id {
            margin-top: 8px;
            font-size: 25px;
          }

          .position {
            font-size: 22px;
          }

          p {
            margin-top: 10px;
            margin-bottom: 0;
            font-family: 'Jua';
          }
        `}
      </style>
    </div>
  );
};

profile.propTypes = {
  name: PropTypes.string.isRequired,
};

export default profile;
