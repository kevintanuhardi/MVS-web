import React from 'react';
import {
  Grid,
} from '@material-ui/core'
import {
  CalendarToday as CalendarIcon,
  FlightTakeoff as CountryWideIcon,
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
      <Grid item className={classes.iconBlock} xs={12} sm={3}>
      <CalendarIcon className={classes.icon}>
        filled
      </CalendarIcon>
      <h2>
        READY STOCK
      </h2>
      <p>
        All year long availability of trusted products
      </p>

      </Grid>
      <Grid item className={classes.iconBlock} xs={12} sm={3}>
      <CountryWideIcon className={classes.icon}>
        filled
      </CountryWideIcon>
      <h2>
        COUNTRY WIDE SHIPMENT
      </h2>
      <p>
        Safe and insuranced shipment countrywide
      </p>

      </Grid>
      <Grid item className={classes.iconBlock} xs={12} sm={3}>
        <CheckIcon className={classes.icon}>
          filled
        </CheckIcon>
        <h2>
          QUALITY
        </h2>
        <p>
          The most advanced enginereed products
        </p>
      </Grid>
      <Grid item className={classes.iconBlock} xs={12} sm={3}>
        <ShieldIcon className={classes.icon}>
          filled
        </ShieldIcon>
        <h2>
          KNOWLEDGEABLE SUPPORT
        </h2>
        <p>
          The supports team are specially trained to tend to customer needs, and understand the medical process.
        </p>
      </Grid>
    </Grid>
  );
};

export default IconSection;