import React from 'react';
import styled from 'styled-components';

const Label = (props) => {

    const { isIndexEven } = props;
    return <LabelComp>{isIndexEven ? 'TRAVELLING' : 'LIFESTYLE'}</LabelComp>

}


export default Label;

const LabelComp = styled.label`
    margin: 2rem;
    height: 14px;
`;