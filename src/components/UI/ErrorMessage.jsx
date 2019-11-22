import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const ErrorMessage = (props) => {
    return <H1>{props.errorMessage}</H1>
}

ErrorMessage.propTypes = {
    errorMessage: PropTypes.string
}


const H1 = styled.h1`
    margin: 100px auto;
    color: red
`;