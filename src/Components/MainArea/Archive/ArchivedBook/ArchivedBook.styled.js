import styled from 'styled-components';

export const BookRow = styled.div`
    display: flex;
    padding: 0.3rem;
    background-color: #eed;

    &:not(:first-child):not(:last-child) {
        margin-bottom: 3px;
    }

    & div {
        margin-right: 1rem;
    }

    &:hover:not(:first-child) {
        background-color: #edd;
    }
`;

export const FirstRow = styled(BookRow)`
    background-color: #bba;
    border-bottom: 5px solid black;
`;

export const Title = styled.div`
    width: 400px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const Author = styled.div`
    width: 250px;
`;

export const ISBN = styled.div`
    width: 150px;
`;
