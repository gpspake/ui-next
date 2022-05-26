import React from 'react';
import classNames from 'classnames';
import styles from './spinner.scss';

type Colors = 'primary' | 'white' | 'midgray' | 'currentColor'

export interface SpinnerProps {
  color: Colors,
  size: 'small' | 'medium' | 'large',
  className: string
}

const renderBars = (color: Colors)  => {
  const bars = [];

  for (let i = 0; i < 12; i++) {
    const animationDelay = `${(i - 12) / 10}s`
    const transform = `rotate(${i * 30}deg) translate(146%)`;

    const barStyle = {
      animationDelay,
      transform,
      WebkitAnimationDelay: animationDelay,
      WebkitTransform: transform
    };

    bars.push(
      <div
        style={barStyle}
        className={classNames(styles.spinnerBar, styles[color])}
        key={i}
      />
    );
  }

  return bars;
};


const Spinner = (props: SpinnerProps) => {

  const {className, color = 'primary', size = 'large' } = props
  const classes = [styles.base, styles[size], className];

  return (
    <div className={classNames(classes, styles.spinner)}>
      {renderBars(color)}
    </div>
  );
};

export default Spinner;
