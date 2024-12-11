import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

const Button = ({ children, ...props }) => {
    return <StyledButton {...props}>{children}</StyledButton>;
};

Button.propTypes = {
    children: PropTypes.node,
    type: PropTypes.oneOf(['primary', 'default', 'link', 'text']),
    size: PropTypes.oneOf(['large', 'middle', 'small']),
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    danger: PropTypes.bool,
};

Button.defaultProps = {
    type: 'default',
    size: 'middle',
    disabled: false,
    loading: false,
    danger: false,
};

export default Button; 