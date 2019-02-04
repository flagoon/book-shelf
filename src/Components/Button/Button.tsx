import React from 'react';
import styled from 'styled-components';

interface IButton {
    primary: boolean;
    alert: boolean;
    success: boolean;
    value: string;
    className: string;
    [key: string]: boolean | string;
}

export const Button = (props: IButton) => {
    const { value, className } = props;
    return <button className={className}>{value}</button>;
};

export const StyledButton = styled(Button)`
    background-color: ${({ alert, primary, success }: IButton) =>
        (primary && 'blue') || (alert && 'red') || (success && 'green') || 'grey'};
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
        background-color: ${({ alert, primary, success }: IButton) =>
            (primary && 'darkblue') || (alert && 'darkred') || (success && 'darkgreen') || 'grey'};
    }
`;
