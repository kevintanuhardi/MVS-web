import React from 'react';


const TopBar = () => {
  return (
    <div id="topbar">
      <a href="https://www.instagram.com/mitraveterindo_selaras/" target="_blank">
        <div className="topbar-block">
          <img className="topbar-icon" src={`${process.env.PUBLIC_URL}/insta-logo.png`} alt="instagram icon"/>
        </div>
      </a>
      <div className="topbar-block">
        Mitra Veterindo Selaras
      </div>
    </div>
  );
};

export default TopBar;