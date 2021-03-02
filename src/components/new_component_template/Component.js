/* eslint-disable no-nested-ternary */

import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';

export const StyledButton = styled.button``;

const Button = React.forwardRef(function Button(props, ref) {
  const { onClick, disabled, children, ...otherProps } = props;

  return (
    <StyledButton
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      isDisabled={disabled}
      ref={ref}
      {...otherProps}
    >
      {children}
    </StyledButton>
  );
});

Button.defaultProps = {
  type: 'button',
  onClick: null,
  disabled: false,
  fullWidth: false,
  size: 'md',
  square: false,
  active: false,
  // onTouchStart below to enable button :active style on iOS
  primary: false,
  variant: 'default'
};

Button.propTypes = {
  type: propTypes.string,
  onClick: propTypes.func,
  disabled: propTypes.bool,
  fullWidth: propTypes.bool,
  size: propTypes.oneOf(['sm', 'md', 'lg']),
  square: propTypes.bool,
  active: propTypes.bool,
  primary: propTypes.bool,
  variant: propTypes.oneOf(['default', 'menu', 'flat']),
  // eslint-disable-next-line react/require-default-props
  children: propTypes.node
};

export default Button;
