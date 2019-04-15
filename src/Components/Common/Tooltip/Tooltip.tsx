import React from 'react';
import styled from 'styled-components';

function Tooltip(props: any) {
    return <TooltipContainer type={props.type}>{props.children}</TooltipContainer>;
}

const TooltipContainer: any = styled.div`
    background: black;
    color: white;
    font-size: 12px;
    font-weight: bold;
    padding: 3px;
    width: 10rem;
    position: relative;
    margin-top: 3px;
`;

export default Tooltip;
