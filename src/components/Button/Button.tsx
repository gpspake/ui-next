import React from 'react';
import classNames from 'classnames';
import styles from './Button.scss';
import Icon from '../Icon';
import Spinner from '../Spinner';
import icons from '../Icon/icon-config';

type ButtonProps = {
  /**
   * title attribute
   */
  title: string,
  /**
   * Display the button as a block element
   */
  block?: boolean,
  /**
   * String or element to be displayed inside button
   */
  children?: React.ReactNode,
  /**
   * ClassName will insert styles to override defaults
   */
  className?: string,
  /**
   * Pass custom icon classname into the button to icon
   */
  iconClassName?: string,
  /**
   * Specify a thematic color
   */
  color?: 'primary' |
    'primary-hc' |
    'secondary' |
    'grayscale' |
    'grayscale-hc' |
    'light' |
    'status--positive' |
    'status--warning' |
    'status--negative' |
    'status--positive-hc' |
    'status--warning-hc' |
    'status--negative-hc',
  /**
   * HTML disabled state, non-interactive
   */
  disabled?: boolean,
  /**
   * Show spinner instead of children
   */
  spinner?: boolean,
  /**
   * Add an icon next to the text
   */
  icon?: keyof typeof icons,
  /**
   * A function that is called on button click
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  /**
   * an accessibility label for the button
   */
  ariaLabel?: string,
  /**
   * Choose a size for the button
   */
  size?: 'small' | 'medium' | 'large',

  theme?: 'normal' |
  'outline' |
  'contentOnly' |
  'boxyNormal' |
  'boxyLight' |
  'boxyOutline' |
  'boxyTight'
  /**
   * HTML button type
   */
  type?: 'button' | 'submit'
}

/**
 * Used to attach click events, create links, trigger actions
 */
const Button = (props: ButtonProps) => {

  const {
    title,
    iconClassName = '',
    className = '',
    block = false,
    children = null,
    color = 'primary',
    disabled = false,
    spinner = false,
    icon = null,
    onClick = () => {},
    ariaLabel,
    size = 'medium',
    theme = 'normal',
    type = 'button'
  } = props



  const childComponent =
    typeof children === 'string' || typeof children === 'number' ? (
      <span className={styles.text}>{children}</span>
    ) : (
      children
    );

  return (
    <button
      title={title}
      className={classNames(
        styles.base,
        styles[theme],
        styles[size],
        styles[color],
        block && styles.block,
        className,
        children ? null : styles.iconOnly
      )}
      onClick={onClick}
      disabled={disabled || spinner}
      type={type}
      aria-label={ariaLabel}
    >
      {spinner && (
        <div className={classNames([styles.spinner, styles.inner])}>
          <Spinner
            className={styles.spinnerBase}
            size="small"
            color="currentColor"
          />
        </div>
      )}
      <div
        className={classNames([styles.inner, spinner && styles.hidden])}
      >
        {icon && (
          <Icon
            icon={icon}
            className={classNames(styles.icon, iconClassName)}
          />
        )}
        {childComponent}
      </div>
    </button>
  );
};

Button.displayName = 'UIButton';

export default Button;
