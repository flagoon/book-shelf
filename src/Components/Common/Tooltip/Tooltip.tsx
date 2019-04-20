import React from 'react';
import styled from 'styled-components';

interface ITooltipContainer {
    type: string;
    children: string;
    position: string;
}

function Tooltip(props: ITooltipContainer) {
    return <TooltipContainer type={props.type} position={props.position}>{props.children}</TooltipContainer>;
}

const TooltipContainer: any = styled.div`
    background: black;
    color: white;
    font-size: 12px;
    font-weight: bold;
    padding: 3px;
    width: 10rem;
    position: absolute;
    margin-top: ${(props: any) => props.position === 'top' ? '0.3rem' : '3.1rem'}
`;

export default Tooltip;
