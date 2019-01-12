import * as React from 'react';
import styled from 'styled-components';
import { IChangePageAction } from '../../../redux/reducers/pageReducer'

interface IMapDispatchToProps {
    changePage: (page: IChangePageAction) => void
}

interface IProps {
    readonly children: string;
    readonly linkAddress: string;
}

const ListItem = ({children, linkAddress, changePage}: IProps & IMapDispatchToProps) => {
    return (
        <StyledListItem 
            onClick={() => changePage({activePage: linkAddress})} 
            linkAddress={linkAddress}
        >
            {children}
        </StyledListItem>
        )
    }

const StyledListItem: any = styled.li`
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

export default ListItem;