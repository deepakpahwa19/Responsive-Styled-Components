import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Image from '../UI/Image';
import Label from '../UI/Label';
import H2 from '../UI/H2';
import MessageBody from '../UI/MessageBody';
import DateUI from '../UI/DateUI';
import Button from '../UI/Button';
import { randomDate } from '../../utils/randomDate';

const Category = (props) => {

    let { title, messageBody, index } = props;

    const isIndexEven = index % 2 === 0;
    messageBody = messageBody.length > 100 ? messageBody.substring(0, 100).trim() + '...' : messageBody;
    title = title.length > 25 ? title.substring(0, 25).trim() + '...' : title;
    return (
        <Section>
            {isIndexEven ? <Image /> : null}
            <Content isIndexEven={isIndexEven}>
                <Label isIndexEven={isIndexEven} />
                <H2>{title}</H2>
                <DateUI>{randomDate()}</DateUI>
                {!isIndexEven ? <MessageBody>{messageBody}</MessageBody> : null}
                <Button type="button">READ MORE</Button>
            </Content>
        </Section>
    )
}

Category.propTypes = {
    title: PropTypes.string,
    messageBody: PropTypes.string,
    index: PropTypes.number.isRequired,
}

export default Category;

const Section = styled.section`
    width: 300px;
    height: 390px;
    box-shadow: 0 0 1px black;
    border: 1px rgba(221, 221, 221, 0.15);
    position: relative;
`;

const Content = styled.div`
    background-color: #ffffff;
    /* padding: 2rem 1.5rem 0; */
    padding: ${props => props.isIndexEven ? '1rem 1.5rem 2rem' : '2rem 1.5rem 0'};
    height: ${props => props.isIndexEven ? '190px' : '390px'};
`;  