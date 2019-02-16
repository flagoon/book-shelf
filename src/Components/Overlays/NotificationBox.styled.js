import styled from 'styled-components';

export const OverlayBox = styled.div`
    position: fixed;
    background: rgba(0, 0, 0, 0.6);
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NotificationWrapper = styled.div`
    background-color: white;
    min-height: 10rem;
    min-width: 20rem;
    z-index: 100;
    border-radius: 5px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
`;
