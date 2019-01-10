import * as React from "react";
import styled from 'styled-components'
import LeftMenu from './LeftMenu/LeftMenu';
import MainArea from './MainArea/MainArea'



const App = () => {

  return (
    <StyledMain>
      <LeftMenu />
      <MainArea activePage='archive' />
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