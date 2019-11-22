import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = (props) => {
    const { type, children } = props;
    return <ButtonComp type={type}>{children}</ButtonComp>
}

Button.propTypes = {
    type: PropTypes.string,
    children: PropTypes.string
}

export default Button;

const ButtonComp = styled.button`
    width: 100px;
    height: 30px;
    font-weight: bold;
    position: absolute;
    bottom: 30px;
    border: none;
    font-family: 'Source Sans Pro';
    left: 99px;
    color: #212121;
    letter-spacing: 2px;
    line-height:1.71;
`;