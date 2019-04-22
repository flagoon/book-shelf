import React from 'react';
import { TooltipContainer } from './Tooltip.styled';

export interface ITooltipContainer {
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

export default Tooltip;
