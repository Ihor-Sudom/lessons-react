import React from 'react';
import './avatar.scss';

const Avatar = (props) => {
  console.log(props);
  return (
        <img
          className="avatar"
          src={props.avatarUrl}
          alt={props.name}
        />
  );
};

export default Avatar;