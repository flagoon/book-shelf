import styled from 'styled-components';
import {Form} from 'formik'

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
`;

export const StyledFormElementContainer = styled.div`
    display: flex;
    margin: 0.5rem;

    & label {
        display: flex;
        width: 500px;

        & *:not(span) {
            width: 400px;
            border: 0;
            border-bottom: 1px solid black;
            background-color: white;
            padding-left: 5px;
            box-sizing: border-box;
        }

        & textarea {
            height: 100px;
        }

        & input {
            margin-left: 5px;
        }

        & select {
            padding: 0;
        }
        
        & span {
            margin: 5px auto 5px 5px;
        }
    }
`;
