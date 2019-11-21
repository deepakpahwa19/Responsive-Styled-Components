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
    font-family: Sourcesanspro;
    position: absolute;
    bottom: 30px;
    /* border: 1px transparent; */
    left: 99px;
    color: #212121;
    letter-spacing: 2px;
    line-height:1.71;
`;