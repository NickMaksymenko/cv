import { makeStyles } from '@material-ui/core';
import React from 'react';
import logo from './assets/img/logo.svg';
import { Spin } from './components';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#282828',
    height: '100vh',
    width: '100%',
  },
});

export const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Spin>{cn => <img src={logo} className={cn} alt='logo' />}</Spin>
    </div>
  );
};
