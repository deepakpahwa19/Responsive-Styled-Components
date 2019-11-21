import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { GET_POSTS } from '../../utils/constants/sagaActionTypes';
import GridLayout from './GridLayout';

class Main extends Component {

    componentDidMount() {
        this.props.getPosts();
    }

    render() {

        return (
            <MainStyled>
                <GridLayout {...this.props}></GridLayout>
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
`;