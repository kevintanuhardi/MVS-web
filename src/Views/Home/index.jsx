import React from 'react';


// Components
import Jumbotron from './Components/Jumbotron'
import IconSection from './Components/IconSection'
import NewsSection from './Components/NewsSection'

const index = () => {
  return (
    <div>
      <Jumbotron />
      <IconSection /> 
      <NewsSection />
    </div>
  );
};

export default index;