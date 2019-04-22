import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface IButton {
    color: string;
    children: ReactNode;
    type: string;
    disabled?: boolean;
    className?: string;
    onClick?: () => MouseEvent;
    [key: string]: ReactNode | string;
}

export const Button = (props: IButton) => {
    const { children, className, onClick, type, disabled } = props;
    return (
        <button className={className} onClick={onClick} type={type} disabled={disabled}>
            {children}
        </button>
    );
};

export const StyledButton = styled(Button)`
    background-color: ${({ color, disabled }: IButton) => (disabled ? 'gray' : color || 'gray')};
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
        cursor: ${({disabled}: IButton) => (disabled ? 'default' : 'pointer')};
        background-color: ${({ color, disabled }: IButton) => (disabled ? 'gray' : color || 'darkgray')};
    }
`;
