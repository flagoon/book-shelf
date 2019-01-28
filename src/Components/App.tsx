import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import MainArea from './MainArea/MainArea';
import Navbar from './Navbar/Navbar';

const App = () => {
    return (
        <StyledMain>
            <Navbar />
            <MainArea />
        </StyledMain>
    );
};

export default App;

const StyledMain = styled.div`
    width: 100wv;
    height: 100hv;
    padding: 0;
    display: flex;
    flex-direction: column;
`;
