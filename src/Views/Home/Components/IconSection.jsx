import React from 'react';
import {
  Grid,
} from '@material-ui/core'
import {
  CalendarToday as CalendarIcon,
  Check as CheckIcon,
  VerifiedUser as ShieldIcon,
} from '@material-ui/icons';
import {
  makeStyles,
} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  // root: {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'flex-end',
  // },
  icon: {
    margin: theme.spacing(1),
    fontSize: 100,
    // color: "red"
  },
  // iconHover: {
  //   margin: theme.spacing(2),
  //   '&:hover': {
  //     color: red[800],
  //   },
  // },
  // iconBlock: {
  //   marginRight: '2%',
  //   marginLeft: '2%',
  // },
  section: {
    minHeight: "500px",
    backgroundColor: "#f1fcff",
    paddingRight: "2%",
    paddingLeft: "2%",
  }
}));

const IconSection = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={5} alignContent="center"  className={classes.section}>
      <Grid item className={classes.iconBlock} xs={12} sm={4}>
      <CalendarIcon className={classes.icon}>
        filled
      </CalendarIcon>
      <h2>
        Ready Stock
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis reprehenderit delectus aspernatur exercitationem ut veritatis obcae
      </p>

      </Grid>
      <Grid item className={classes.iconBlock} xs={12} sm={4}>
        <CheckIcon className={classes.icon}>
          filled
        </CheckIcon>
        <h2>
          Quality
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis reprehenderit delectus aspernatur exercitationem ut veritatis obcae
        </p>
      </Grid>
      <Grid item className={classes.iconBlock} xs={12} sm={4}>
        <ShieldIcon className={classes.icon}>
          filled
        </ShieldIcon>
        <h2>
          Helpful Support
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis reprehenderit delectus aspernatur exercitationem ut veritatis obcae
        </p>
      </Grid>
    </Grid>
  );
};

export default IconSection;