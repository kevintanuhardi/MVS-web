/* eslint-disable no-useless-computed-key */
import React, { Component } from 'react';
import ClassName from 'classnames'
import { Link } from 'react-router-dom';
import Helpers from '../helpers/common'
import {
  ViewWeek as DrawerIcon, ToggleOff,
} from '@material-ui/icons';
import './Header.css'
import {
  withStyles
} from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';
import Media from 'react-media';

const styles = {
  iconBlock: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  icon: {
    fontSize: 80,
    marginRight: "5%",
    transform: "rotate(90deg)",
    ['@media (min-width:780px)'] : {
      display: "none",
    },
  },
  section: {
    minHeight: "500px",
    backgroundColor: "#f1fcff",
  },
}

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
    displayNavText: true,
  }

  componentDidUpdate(prevProps){
    if(prevProps.location.pathname !== this.props.location.pathname) this.setState({location: this.props.location.pathname})
  }

  // RENDER

  renderLink = () => {
    const { navbarTitle, location } = this.state;
    const { redirect, toggleBoolean } = Helpers;

    const isIndex = location === '/'

    return navbarTitle.map((el, index) => (
      <div
      className={ClassName("navbar-title", {index: isIndex})}
      key={index}
      onClick={() => {
        redirect(this, el.link)
        toggleBoolean(this, "displayNavText")
      }}
      >
        <h3>
          {el.title}
        </h3>
        <div className={ClassName("title-block", {index: isIndex})}/>
      </div>
    ))
  }

  render() {
    const { displayNavText } = this.state;
    const { classes } = this.props;
    const { toggleBoolean } = Helpers;

    const isIndex = this.state.location === '/'
    return (
      <div id="navbar" className={ClassName({index: isIndex})}>
        <div className={classes.iconBlock}>
          <Link to="/">
            <img id="navbar-logo" className={ClassName({index: isIndex})} src={process.env.PUBLIC_URL + '/mvs-logo.png'} alt="MVS Logo"/>
            <img id="navbar-logo-white" className={ClassName({index: isIndex})} src={process.env.PUBLIC_URL + '/mvs-logo-white.png'} alt="MVS Logo"/>
          </Link>
          <DrawerIcon
            className={classes.icon}
            onClick={()=> toggleBoolean(this, "displayNavText")}
          >
            filled
          </DrawerIcon>
        </div>
        {/* {
         displayNavText &&
        <div id="navbar-text">
          {this.renderLink()}
        </div>
        } */}
        <Media query="(max-width: 768px)">
          {matches =>
            matches ? (           
                displayNavText &&
                <div id="navbar-text">
                  {this.renderLink()}
                </div>  
            ) : (
              <div id="navbar-text">
                {this.renderLink()}
              </div>  
            )
          }
        </Media>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(Header));