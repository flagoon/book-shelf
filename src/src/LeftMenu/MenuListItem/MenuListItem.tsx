import * as React from 'react'
import styled from 'styled-components'

interface IProps {
    children: React.ReactNode;
    className: string;
}

const MenuListItem = ({children, className}: IProps) => <li className={className}>{children}</li>;

const StyledMenuListItem = styled(MenuListItem)`
    background-color: #888;
    list-style: none inside;
    font-size: 3rem;
    margin: 0 0 0.3rem 0;
    padding: 0.3rem;

    &:hover {
        background-color: #BBB;
        cursor: pointer;
    }
`;

export default StyledMenuListItem;