import React, { Component } from 'react';
import ClassName from 'classnames'
import { Link } from 'react-router-dom';
import Helpers from '../helpers/common'

import './Header.css'

import {withRouter} from 'react-router-dom';

class Header extends Component {
  state = {
    navbarTitle: [
      {
        title: "Tentang Kami",
        link: "about-us"
      },
      {
        title: "Products",
        link: "products"
      },
      {
        title: "News",
        link: "news"
      },
      {
        title: "Contact Us",
        link: "contact-us"
      },
      {
        title: "Company Profile",
        link: "company-profile"
      },
    ],
    location: this.props.location.pathname,
  }

  componentDidUpdate(prevProps){
    if(prevProps.location.pathname !== this.props.location.pathname) this.setState({location: this.props.location.pathname})
  }

  // RENDER

  renderLink = () => {
    const { navbarTitle, location } = this.state;
    const { redirect } = Helpers;

    const isIndex = location === '/'

    return navbarTitle.map((el, index) => (
      <div
      className={ClassName("navbar-title", {index: isIndex})}
      key={index}
      onClick={() => redirect(this, el.link)}
      >
        <h3>
          {el.title}
        </h3>
        <div className={ClassName("title-block", {index: isIndex})}/>
      </div>
    ))
  }

  render() {
    const isIndex = this.state.location === '/'
    return (
      <div id="navbar" className={ClassName({index: isIndex})}>
        <Link to="/">
          <img id="navbar-logo" className={ClassName({index: isIndex})} src={process.env.PUBLIC_URL + '/mvs-logo.png'} alt="MVS Logo"/>
          <img id="navbar-logo-white" className={ClassName({index: isIndex})} src={process.env.PUBLIC_URL + '/mvs-logo-white.png'} alt="MVS Logo"/>
        </Link>
        {this.renderLink()}
      </div>
    );
  }
}

export default withRouter(Header);