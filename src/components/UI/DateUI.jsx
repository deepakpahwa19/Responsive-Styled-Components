import React from 'react';
import styled from 'styled-components';

const DateUI = (props) => {
    return <DateComp>{props.children}</DateComp>
}

export default DateUI;

const DateComp = styled.label`
    height: 14px;
`;