import React from 'react';

const Login = (props) => {
  return (
    <button className='login btn' onClick={props.onClick}>
      login
    </button>
  );
};

export default Login;