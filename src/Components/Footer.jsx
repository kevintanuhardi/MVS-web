import React from 'react';
import {
  Phone as PhoneIcon,
  Mail as MailIcon,
} from '@material-ui/icons';
import {
  makeStyles
} from '@material-ui/core/styles';
import {
  Grid
} from '@material-ui/core';

import GoogleMaps from './GoogleMaps';

const useStyles = makeStyles(theme => ({
  icon: {
    margin: theme.spacing(1),
    fontSize: 30,
  },
}));

const Footer = () => {
  const classes = useStyles();
  return(
    <div id="footer">
      <Grid container spacing={4} justify="space-between">
        <Grid item xs={12} sm={6}>
          <h2>Contact Us</h2>
          <div style={{display: "flex", alignItems: "center", justifyContent: 'left'}}>
            <div>
              <PhoneIcon className={classes.icon}>
                filled
              </PhoneIcon>
            </div>
            <div>
              <a href="https://wa.me/6282210437008" target="_blank">
                (+62) 822 1043 7008
              </a>
            </div>
          </div>
          <div style={{display: "flex", alignItems: "center"}}>
            <div>
              <MailIcon className={classes.icon}>
                filled
              </MailIcon>
            </div>
            <div>
              <a href="mailto:mitraveterindoselaras@gmail.com" >
                mitraveterindoselaras@gmail.com
              </a>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <h2>About Us</h2>
          <p>Mitra Veterindo Selaras is one of the leading Animal Orthopaedics distributor companies in Indonesia. We are focused in marketing of implants(plates, screw, wire), Power Instruments, basic Instruments for all specialties, and other Advanced Surgical products and Technologies.</p>  
        </Grid>
      </Grid>
      </div>
  )
}

export default Footer;