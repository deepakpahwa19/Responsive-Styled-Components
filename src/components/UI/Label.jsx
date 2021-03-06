import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Label = (props) => {

    const { isIndexEven } = props;
    return <LabelComp>{isIndexEven ? 'TRAVELLING' : 'LIFESTYLE'}</LabelComp>

}

Label.propTypes = {
    isIndexEven: PropTypes.bool
}


export default Label;

const LabelComp = styled.label`
    margin: ${props=> props.isIndexEven ? '0.5rem' : '2rem'};
    height: 1.71px;
    letter-spacing: 1.4px;

`;