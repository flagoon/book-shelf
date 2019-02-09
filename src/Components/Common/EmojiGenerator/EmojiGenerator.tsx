import React from 'react';
import styled from 'styled-components';

interface IEmojiGeneratorProps {
    value: string;
    label?: string;
}

const EmojiGenerator = ({ value, label }: IEmojiGeneratorProps) => (
    <EmojiContainer aria-label={label ? label : ''} aria-hidden={label ? false : true} role='image'>
        {value}
    </EmojiContainer>
);

const EmojiContainer = styled.span`
    padding: 0.5rem;
`;
export default EmojiGenerator;
