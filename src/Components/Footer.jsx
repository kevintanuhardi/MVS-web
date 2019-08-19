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
      <Grid item xs={12} sm={4}>
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas provident id quidem, rem animi ducimus praesentium. Dolorum aperiam quibusdam, consectetur voluptatibus quaerat neque corporis ipsa fuga, numquam cumque laboriosam eligendi.</p>  
        </Grid>
        <Grid item xs={12} sm={4}>
          <h2>Contact Us</h2>
          <div style={{display: "flex", alignItems: "center"}}>
            <div>
              <PhoneIcon className={classes.icon}>
                filled
              </PhoneIcon>
            </div>
            <div>
              (+62) 812 8249 8252
            </div>
          </div>
          <div style={{display: "flex", alignItems: "center"}}>
            <div>
              <MailIcon className={classes.icon}>
                filled
              </MailIcon>
            </div>
            <div>
              fernanda@mvsIndo.com
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <h2>About Us</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas provident id quidem, rem animi ducimus praesentium. Dolorum aperiam quibusdam, consectetur voluptatibus quaerat neque corporis ipsa fuga, numquam cumque laboriosam eligendi.</h3>  
        </Grid>
      </Grid>
      </div>
  )
}

export default Footer;