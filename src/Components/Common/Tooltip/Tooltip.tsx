import React from 'react';
import styled from 'styled-components';

interface ITooltipContainer {
    type: string;
    children: string;
    position: string;
}

function Tooltip(props: ITooltipContainer) {
    return (
        <TooltipContainer type={props.type} position={props.position}>
            {props.children}
        </TooltipContainer>
    );
}

// eslint-disable-next-line no-mixed-operators
const TooltipContainer = styled.div<ITooltipContainer>`
    background: black;
    color: white;
    font-size: 12px;
    font-weight: bold;
    padding: 5px;
    right: 0;
    position: absolute;
    margin-top: ${(props: ITooltipContainer) => (props.position === 'top' ? '0.3rem' : '3.1rem')};
`;

export default Tooltip;
