import React, { Component } from 'react';
import styled from 'styled-components';

import Category from '../categories/Category';
import withSpinner from '../hoc/withSpinner';

class GridLayout extends Component {

    render() {
        const { categories } = this.props;
        let categoriesComp = null;
        if (categories && categories.length > 0) {
            categoriesComp = [];
            for (let i = 0; i < 8; i++) {
                categoriesComp.push(<Category key={i + 1} index={i + 1} title={categories[i].title} messageBody={categories[i].body}></Category>)
            }
        }

        return (
            <Grid>
                {categoriesComp}
            </Grid >
        )
    }
}

export default withSpinner(GridLayout);

const Grid = styled.div`
    background-color: #ffffff;
    justify-items: center;
    min-height: 100%;
    width: 100%;
    margin: 60px auto 41px;
    padding: 4rem;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 1em;
    grid-row-gap: 4em;

    @media (max-width: 669px){
        padding: auto;
        grid-template-columns: repeat(1, 1fr);
    }

    @media (min-width: 670px) and (max-width: 969px) {
        padding: 2rem;
        grid-template-columns: repeat(2, 1fr);
    }

    @media  (min-width: 970px) and (max-width: 1039px) {
        padding: 2rem;
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1040px) and (max-width: 1300px){
        grid-template-columns: repeat(3, 1fr);
    } 
`;