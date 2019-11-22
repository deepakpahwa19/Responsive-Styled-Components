import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MessageBody = (props) => {
    return <MessageComp>{props.children}</MessageComp>
}

MessageBody.propTypes = {
    children: PropTypes.string
}

export default MessageBody;

const MessageComp = styled.div`
    width: 100%;
    height: 150px;
    padding: 2rem 0;
    color: #464646;
    text-align: center;
    letter-spacing: 1.5px;
    font-family: OpenSans;
`;