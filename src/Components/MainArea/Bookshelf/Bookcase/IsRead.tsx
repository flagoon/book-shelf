import React from 'react';
import styled from 'styled-components';

export const IsRead = () => <ReadMark title='This book is read'>✔️</ReadMark>;

const ReadMark = styled.span`
    display: inline-block;
    padding: 0.5rem;
    color: green;
`;
