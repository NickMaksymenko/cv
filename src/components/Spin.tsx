import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  '@keyframes spin': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
  spin: {
    '@media (prefers-reduced-motion: no-preference)': {
      animation: '$spin infinite 20s linear',
    },
    height: '40vmin',
    pointerEvents: 'none',
  },
});

interface ISpinProps {
  children(className: string): React.ReactNode;
}

export const Spin: React.FC<ISpinProps> = ({ children }) => {
  const classes = useStyles();
  return <>{children(classes.spin)}</>;
};
