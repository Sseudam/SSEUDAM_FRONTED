import React from 'react';
import Logo from '../../assets/Logo.jsx';

const Splash = () => {
  return (
    <div className="w-full h-[100vh] pb-32 flex flex-col items-center justify-center">
      <div className="text-[16px] text-[#9c9c9c]">분리배출의 시작, 쓰담쓰담</div>
        <Logo />
    </div>
  );
};

export default Splash;
