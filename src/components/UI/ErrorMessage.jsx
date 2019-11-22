import React from 'react';
import styled from 'styled-components';

export const ErrorMessage = (props) => {
    return <H1>{props.errorMessage}</H1>
}

const H1 = styled.h1`
    margin: 100px auto;
    color: red
`;