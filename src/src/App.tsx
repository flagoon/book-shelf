import * as React from 'react';
import styled from 'styled-components';
import LeftMenu from './components/LeftMenu/LeftMenu';
import MainArea from './components/MainArea/MainArea';

const App = () => {

  return (
    <StyledMain>
      <LeftMenu />
      <MainArea />
    </StyledMain>
  );
};

export default App;

const StyledMain = styled.div`
  width: 100wv;
  height: 100hv;
  border: 1px solid green;
  display: flex;
`;
