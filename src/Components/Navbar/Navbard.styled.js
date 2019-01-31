import styled from 'styled-components';

export const StyledHeader = styled.ul`
    display: flex;
    width: 100vw;
    border-bottom: 2px solid darkolivegreen;
    background-color: #0f0;
    margin: 0;
    padding: 0;
`;

export const HeaderLink = styled.li`
    list-style-position: outside;
    list-style-type: none;
    padding: 1rem;
    font-size: 2rem;
    font-weight: bold;
    color: black;
    user-select: none;

    &:hover {
        text-decoration: underline;
    }
`;
