import React from 'react';


const TopBar = () => {
  return (
    <div id="topbar">
      <div className="topbar-block">
        <img className="topbar-icon" src={`${process.env.PUBLIC_URL}/insta-logo.png`} alt="instagram icon"/>
      </div>
      <div className="topbar-block">
        Mitra Veterindo Selaras
      </div>
    </div>
  );
};

export default TopBar;