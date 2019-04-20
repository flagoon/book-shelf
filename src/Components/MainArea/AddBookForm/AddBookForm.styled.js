import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    user-select: none;
    margin: 5px 0;
    box-sizing: border-box;

    & input,
    select {
        padding-left: 10px;
    }

    & textarea {
        padding-left: 10px;
        height: 150px;
    }
`;

export const StyledLabel = styled.label`
    margin-top: 10px;
    line-height: 1;
    width: 300px;

    &.labelIsRead {
        width: 75px;

        &:hover,
        & > input {
            cursor: pointer;
        }
    }

    & > input {
        margin-left: 10px;
    }
`;

export const StyledFieldContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`;

export const ButtonContainer = styled.div`
    margin-top: 10px;
`;
