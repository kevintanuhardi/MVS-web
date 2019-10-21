import React, { Component } from 'react';
import './AboutUs.css'
class AboutUs extends Component {
  render() {
    return (
      <div>
        <div className="mission-block">
          <div className="half-block first-text text-block">
            <h1>
              Mission
            </h1>
            <br />
            <h3>
            -	Meet the needs of the community for animal health equipment that has competitive advantage
            </h3>
            <h3>
            -	Provide and distribute animal health equipment which is the best product in terms of safety and quality standards.
            </h3>
            <h3>
            -	Providing the best service to all customers.
            </h3>
          </div>
          <div className="half-block first-image">
          </div>
        </div>
        <div className="mission-block">
          <div className="half-block second-image">
          </div>
          <div className="half-block second-text text-block">
            <h1>
              Vision
            </h1>
            <br />
            <h3>
            -	Being a trusted provider of animal health equipment in Indonesia
            </h3>
            <h3>
            -	Become an animal health equipment distributor company that has the competitiveness and become a leading player in the region and outside the region
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;