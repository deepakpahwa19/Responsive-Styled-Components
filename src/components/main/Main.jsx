import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Category from '../categories/Category';
import { GET_POSTS } from '../../utils/constants/sagaActionTypes';

class Main extends Component {

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        const { categories } = this.props;
        console.log(categories);
        let categoriesComp = null;
        if (categories && categories.length > 0) {
            categoriesComp = [];
            for (let i = 0; i < 8; i++) {
                categoriesComp.push(<Category key={i + 1} index={i + 1} title={categories[i].title} messageBody={categories[i].body}></Category>)
            }
        }

        return (
            <MainStyled>
                {categoriesComp}
            </MainStyled >
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPosts: () => dispatch({ type: GET_POSTS })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

const MainStyled = styled.main`
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

    @media (max-width: 799px){
        padding: auto;
        grid-template-columns: repeat(1, 1fr);

    }

    @media  (min-width: 800px) and (max-width: 1039px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1040px) and (max-width: 1300px){
        grid-template-columns: repeat(3, 1fr);
    } 
`;