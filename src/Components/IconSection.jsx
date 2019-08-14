import React from 'react';
import {
  CalendarToday as CalendarIcon,
  Check as CheckIcon,
  VerifiedUser as ShieldIcon,
} from '@material-ui/icons';
import {
  makeStyles
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
}));

const IconSection = () => {
  const classes = useStyles();
  return (
    <div className="icon-section">
      <div>
      <CalendarIcon className={classes.icon}>
        filled
      </CalendarIcon>
      <h2>
        Ready Stock
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis reprehenderit delectus aspernatur exercitationem ut veritatis obcaecati consequatur vero aut officiis excepturi, corrupti eius itaque quam illo fugiat commodi incidunt natus.
      </p>

      </div>
      <div>
        <CheckIcon className={classes.icon}>
          filled
        </CheckIcon>
        <h2>
          Quality
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis reprehenderit delectus aspernatur exercitationem ut veritatis obcaecati consequatur vero aut officiis excepturi, corrupti eius itaque quam illo fugiat commodi incidunt natus.
        </p>
      </div>
      <div>
        <ShieldIcon className={classes.icon}>
          filled
        </ShieldIcon>
        <h2>
          Helpful Support
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis reprehenderit delectus aspernatur exercitationem ut veritatis obcaecati consequatur vero aut officiis excepturi, corrupti eius itaque quam illo fugiat commodi incidunt natus.
        </p>
      </div>
      <div>

      </div>
    </div>
  );
};

export default IconSection;