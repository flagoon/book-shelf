import * as React from 'react';
import styled from 'styled-components';
import { IChangePagePayload } from '../../redux/actions/pageActions';

interface IMapDispatchToProps {
  changePage: (page: IChangePagePayload) => void;
}

interface IProps {
  readonly children: string;
  readonly linkAddress: string;
}

const ListItem = ({
  children,
  linkAddress,
  changePage,
}: IProps & IMapDispatchToProps) => {
  return (
    <StyledListItem
      onClick={() => changePage({ activePage: linkAddress })}
      linkAddress={linkAddress}
    >
      {children}
    </StyledListItem>
  );
};

const StyledListItem: any = styled.li`
  background-color: #888;
  list-style: none inside;
  font-size: 3rem;
  margin: 0 0 0.3rem 0;
  padding: 0.3rem;

  &:hover {
    background-color: #bbb;
    cursor: pointer;
  }
`;

export default ListItem;
