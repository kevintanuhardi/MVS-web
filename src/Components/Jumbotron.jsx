import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="jumbotron-block">
          <h2 className="jumbotron-text">
            One Stop Solution
            <br /> for <b>Animal Ortophedic Supplies</b>
          </h2>
        </div>
        {/* <img src={process.env.PUBLIC_URL + '/jumbotron.jpg'} alt="background" className="primary-image"/> */}
      </div>
    );
  }
}

export default Content;