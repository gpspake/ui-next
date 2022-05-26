import React from 'react';
import classNames from 'classnames';
import styles from './icon.scss';
import icons from './icon-config';

type IconProps = {
  /**
   * Name of icon to render.
   */
  icon: keyof typeof icons,
  /**
   * Pass in custom styling like style={{padding: 10px}}
   */
  customStyling?: {},
  /**
   * Listen for icon click event and pass back event
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  /**
   * Listen for icon focus event and pass back event
   */
  onFocus?: React.FocusEventHandler<HTMLInputElement>,
  /**
   * Listen for icon onMouseDown event and pass back event
   */
  onMouseDown?: React.MouseEventHandler<HTMLButtonElement>,
  /**
   * Additional className
   */
  className?: string,
  /**
   * icon color
   */
  color?: 'currentColor'|
  'dark'|
  'light'|
  'primary'|
  'primary-hc'|
  'secondary'|
  'tertiary',

  /**
   * Rotate the icon by degrees [90, 180, 270]
   */
  rotate?: 0 | 90 | 180 | 270
  /**
   * one of [xsmall: .5em, small: .75em, normal: 1em, medium: 1.5em, large: 2em]
   */
  size?: 'xsmall'| 'small'| 'normal'| 'medium'| 'large'
};

/**
 * A component for rendering UI icons
 */
export const Icon = (props: IconProps) => {

  const {
    icon,
    color = 'currentColor',
    className = null,
    rotate = null,
    size = 'normal',
    onClick = () => {},
    onFocus = () => {},
    onMouseDown = () => {},
    customStyling = {}
  } = props

  return (
    <span
      className={classNames([
        styles.base,
        styles[color],
        styles[size],
        className
      ])}
      dangerouslySetInnerHTML={{ __html: icons[icon] }}
      style={{
        transform: rotate ? `rotateZ(${rotate}deg)` : '',
        ...customStyling
      }}
      onClick={onClick}
      onFocus={onFocus}
      onMouseDown={onMouseDown}
      role="presentation"
    />
  );
}

Icon.displayName = 'UIIcon';

export default Icon;
