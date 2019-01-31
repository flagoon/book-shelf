import React from 'react';
import { StyledMain } from './App.styled';
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
