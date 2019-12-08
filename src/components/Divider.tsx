import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#000',
    height: 2,
    width: '100%',
  },
});

export const Divider: React.FC = () => {
  const classes = useStyles();

  return <div className={classes.root} />;
};
