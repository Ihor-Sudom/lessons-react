import React from 'react';

const Login = (props) => {
  return (
    <button className='login btn' onClick={props.onLogin}>
      login
    </button>
  );
};

export default Login;