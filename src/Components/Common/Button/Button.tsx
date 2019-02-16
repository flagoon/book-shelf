import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface IButton {
    color: string;
    children: ReactNode;
    className?: string;
    onClick?: () => MouseEvent;
    [key: string]: ReactNode | string;
}

export const Button = (props: IButton) => {
    const { children, className, onClick } = props;
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};

export const StyledButton = styled(Button)`
    background-color: ${({ color }: IButton) => (color ? color : 'gray')};
    color: white;
    font-weight: bold;
    padding: 0.5rem;
    border: 0;
    border-radius: 5px;
    margin-right: 0.5rem;

    &:last-child {
        margin-right: 0;
    }

    &:hover {
        cursor: pointer;
        background-color: ${({ color }: IButton) => (color ? '#FFCD64' : 'darkgrey')};
        color: black;
    }
`;
