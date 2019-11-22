import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
    return <ButtonComp type={props.type}>{props.children}</ButtonComp>
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