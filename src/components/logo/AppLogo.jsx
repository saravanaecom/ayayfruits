import React from 'react';
import Logo from './logo.png';
const AppLogo = ({ children }) => {
  return (
    <img src={Logo} alt="logo" style={{width: '150px', height: '60px'}}/>
  );
};

export default AppLogo;
