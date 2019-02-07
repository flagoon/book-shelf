import React from 'react';
import { BooksProvider } from '../ContextProvider/BooksProvider';
import { StyledMain } from './App.styled';
import MainArea from './MainArea/MainArea';
import Navbar from './Navbar/Navbar';

const App = () => {
    return (
        <StyledMain>
            <BooksProvider>
                <Navbar />
                <MainArea />
            </BooksProvider>
        </StyledMain>
    );
};

export default App;
