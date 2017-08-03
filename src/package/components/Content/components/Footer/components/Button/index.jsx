import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cls from 'classnames';

const Wrapper = styled.span`
  color: #83878d;
  border-radius: 5px;
  cursor: pointer;
  padding: 8px 12px;
  text-transform: uppercase;
  &:hover {
    background: #f2fbff;
    color: #6d7379;
  }
  &.primary {
    color: #00a1f2;
  }
  &.isDisabled {
    color: #00a1f2;
    pointer-events: none;
    opacity: 0.6;
    margin-left: 15px;
  }
`;

const Button = ({ children, isDisabled, onClick, primary }) =>
  <Wrapper className={cls({ isDisabled, primary })} onClick={onClick}>
    {children}
  </Wrapper>;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
