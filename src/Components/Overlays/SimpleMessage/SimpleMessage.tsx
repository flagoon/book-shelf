import React from 'react';
import styled from 'styled-components';

interface ISimpleMessageProps {
    type: string;
    message: string;
    bookId: string;
}

function SimpleMessage({ type, message, bookId }: ISimpleMessageProps) {
    return (
        <>
            <SimpleMessageHeader>{type}</SimpleMessageHeader>
            <SimpleMessageBody>{message}</SimpleMessageBody>
            <div>{bookId}</div>
        </>
    );
}

const SimpleMessageHeader = styled.h1`
    color: red;
`;

const SimpleMessageBody = styled.div`
    color: blue;
`;

export default SimpleMessage;
