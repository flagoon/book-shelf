import styled from 'styled-components';

export const BookcaseHolder = styled.ul`
    box-sizing: border-box;
    list-style-type: none;
    list-style-position: inside;
    width: 820px;
`;

export const DataWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const TextDataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`;

export const Title = styled.li`
    font-size: 2rem;
    margin-bottom: 1rem;
`;

export const Author = styled.li`
    font-size: 1.5rem;
    color: gray;
    margin-bottom: 1rem;
`;

export const TechnicalBookData = styled.div`
    display: flex;
    flex-direction: 'row';
    border: '1px solid red';
    color: #044;
    margin-bottom: 1rem;

    & span {
        font-weight: bold;
    }

    & li {
        margin-right: 1rem;

        &:last-child {
            margin-right: 0;
        }
    }
`;

export const BookDescription = styled.li`
    padding-right: 1rem;
`;

export const ControlButtons = styled.div`
    margin-top: 1rem;
`;
