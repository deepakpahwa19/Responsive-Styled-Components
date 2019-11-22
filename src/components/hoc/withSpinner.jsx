import React, { Component } from 'react';
import { Spinner } from '../UI/Spinner';
import { ErrorMessage } from '../UI/ErrorMessage';

// HOC to display Spinner if data is loading from API calls
const withSpinner = (WrapperComp) => {

    return class extends Component {
        render() {
            const { errorMessage, loading } = this.props;
            if (errorMessage) {
                return <ErrorMessage errorMessage={errorMessage} />
            }
            if (loading) {
                return <Spinner show={loading} />
            }
            return (
                <WrapperComp {...this.props} />
            )
        }
    }
}

export default withSpinner;