import React from 'react';
import styled from 'styled-components';

const H2 = (props) => {
    return <H2Comp>{props.children}</H2Comp>
}

export default H2;

const H2Comp = styled.h2`
    margin: 0.5rem;
    color: #212121;
    letter-spacing: 1.2px;
    /* line-height: 1.4px; */
    font-size: 20px;
    font-family: OpenSans;
`;