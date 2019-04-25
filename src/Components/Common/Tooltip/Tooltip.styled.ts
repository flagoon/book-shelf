import styled from 'styled-components';
import { ITooltipContainer } from './Tooltip';
// eslint-disable-next-line no-mixed-operators
export const TooltipContainer = styled.div<ITooltipContainer>`
    background: black;
    color: white;
    font-size: 12px;
    font-weight: bold;
    padding: 5px;
    right: 0;
    position: absolute;
    margin-top: ${(props: ITooltipContainer) => (props.position === 'top' ? '0.3rem' : '3.1rem')};
`;
