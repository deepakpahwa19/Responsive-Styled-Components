import React from 'react';
import { Spinner } from '../UI/Spinner';
import { ErrorMessage } from '../UI/ErrorMessage';
import PropTypes from 'prop-types';

// HOC to display Spinner/Error Message
export const withSpinner = (WrapperComp) => {
    const Wrapper = ({ errorMessage, loading, ...props }) => {
        if (errorMessage) {
            return <ErrorMessage errorMessage={errorMessage} />
        } else if (loading) {
            return <Spinner show={loading} />
        } else {
            return <WrapperComp {...props} />
        }
    }
    Wrapper.propTypes = {
        errorMessage: PropTypes.string,
        loading: PropTypes.bool
    }
    return Wrapper;
}