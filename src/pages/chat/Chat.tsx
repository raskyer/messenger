import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Rooms from './rooms/Rooms';
import Messages from './messages/Messages';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100%'
  },
  container: {
    height: '100%'
  },
  item: {
    paddingRight: '10px',
    height: '100%'
  },
  channels: {
    borderRight: '1px solid black',
    height: '100%'
  },
}));

const Chat: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0} className={classes.container}>
        <Grid item sm={2} className={classes.item}>
          <div className={classes.channels}>
            <Rooms />
          </div>
        </Grid>
        <Grid item sm={10}>
          <Messages />
        </Grid>
      </Grid>
    </div>
  );
}

export default Chat;
