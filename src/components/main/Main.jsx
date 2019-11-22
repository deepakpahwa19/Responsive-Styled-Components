import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import GridLayout from './GridLayout';
import { getPostsAction } from '../../services/actions/sagaActions';

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
        loading: state.loading,
        errorMessage: state.errorMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPosts: () => dispatch(getPostsAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

const MainStyled = styled.main`
    background-color: #ffffff;
    overflow-y: auto;
`;