import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { connect } from 'react-redux';
import makeAction from '../../redux/actions/makeAction';
import actionTypes from '../../redux/actionTypes';

interface IMapDispatchToProps {
    changePage: (page: string) => void
}

interface IProps {
    readonly children: string;
    readonly linkAddress: string;
    changePage: (page: any) => any;
}

const MenuListItem = ({children, linkAddress, changePage}: IProps) => {
    return (
        <StyledMenuListItem onClick={() => changePage({activePage: linkAddress})} linkAddress={linkAddress}>{children}</StyledMenuListItem>
        )
    }

const StyledMenuListItem: any = styled.li`
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

const mapDispatchToProps = {
    changePage: makeAction(actionTypes.CHANGE_ACTIVE_PAGE)
}

export default connect(undefined, mapDispatchToProps)(MenuListItem)