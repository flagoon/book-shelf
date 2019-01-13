import * as React from 'react';
import styled from 'styled-components';
import LeftMenu from './components/LeftMenu/LeftMenu';
import MainArea from './containers/MainArea';

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
  display: flex;
`;
