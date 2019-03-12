import React from 'react';
import styled from 'styled-components';
import { BooksConsumer } from '../../../ContextProvider/BooksProvider';

const AddBookForm = () => {
    return (
        <BooksConsumer>
            {(context) => {
                return (
                    <StyledForm>
                        <StyledFormElementContainer>
                            <label htmlFor={'title'}>
                                <span>Title:</span>
                                <input
                                    type={'text'}
                                    id={'title'}
                                    name={'title'}
                                    value={context.newBook.title}
                                    onChange={context.onFormValueChange}
                                />
                            </label>
                        </StyledFormElementContainer>
                        <StyledFormElementContainer>
                            <label htmlFor={'author'}>
                                <span>Author:</span>
                                <input
                                    type={'text'}
                                    id={'author'}
                                    name={'author'}
                                    value={context.newBook.author}
                                    onChange={context.onFormValueChange}
                                />
                            </label>
                        </StyledFormElementContainer>
                        <StyledFormElementContainer>
                            <label htmlFor="cover">
                                <span>Cover:</span>
                                <select name="cover" id="cover" onChange={context.onFormValueChange}>
                                    <option value={'hard'}>hard</option>
                                    <option value={'soft'}>soft</option>
                                </select>
                            </label>
                        </StyledFormElementContainer>
                        <StyledFormElementContainer>
                            <label htmlFor={'picture'}>
                                <span>Picture:</span>
                                <input
                                    type={'url'}
                                    id={'picture'}
                                    name={'picture'}
                                    value={context.newBook.picture}
                                    onChange={context.onFormValueChange}
                                />
                            </label>
                        </StyledFormElementContainer>
                        <StyledFormElementContainer>
                            <label htmlFor={'pages'}>
                                <span>Pages:</span>
                                <input
                                    type={'number'}
                                    id={'pages'}
                                    name={'pages'}
                                    value={context.newBook.pages}
                                    onChange={context.onFormValueChange}
                                />
                            </label>
                        </StyledFormElementContainer>
                    </StyledForm>
                );
            }}
        </BooksConsumer>
    );
};

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const StyledFormElementContainer = styled.div`
    display: flex;
    margin: 0.5rem;
    & label {
        display: flex;
        width: 20rem;

        & span {
            margin: 5px auto 5px 5px;
        }

        & *:not(span) {
            width: 200px;
            border: 0;
            border-bottom: 1px solid black;
            background-color: white;
            padding-left: 15px;
        }

        & input {
            margin-left: 5px;
        }
    }
`;

export default AddBookForm;
