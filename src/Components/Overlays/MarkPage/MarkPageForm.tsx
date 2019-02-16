import React, { ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import { BooksConsumer } from '../../../ContextProvider/BooksProvider';
import { StyledButton } from '../../Common/Button/Button';
import { IMarkPageProps } from './MarkPage';

function MarkPageForm({ bookId, onMarkPageChange, onMarkPageSubmit, hideNotification }: IMarkPageProps) {
    const changeMarkedPageById = (e: ChangeEvent<HTMLInputElement>) => {
        onMarkPageChange!(e, bookId);
    };

    const submitFormAndCloseNotification = (e: FormEvent<HTMLFormElement>) => {
        onMarkPageSubmit!(e);
        hideNotification();
    };

    return (
        <BooksConsumer>
            {(BooksContext) => {
                const { books } = BooksContext;
                const book = books.get(bookId);
                return (
                    <StyledMarkPageForm onSubmit={submitFormAndCloseNotification}>
                        <StyledMarkPageInput
                            min={0}
                            max={book!.pages}
                            type={'number'}
                            name={'markedPage'}
                            placeholder={'Mark the page'}
                            onChange={changeMarkedPageById}
                        />
                        <StyledButton type={'submit'} color={'blue'}>
                            Submit
                        </StyledButton>
                    </StyledMarkPageForm>
                );
            }}
        </BooksConsumer>
    );
}

const StyledMarkPageInput = styled.input`
    display: block;
    border: 0 solid gray;
    border-bottom: 1px solid red;
    padding: 1rem;
    font-size: 2rem;
    width: 100%;
    margin-bottom: 1rem;
`;

const StyledMarkPageForm = styled.form`
    display: flex;
    width: 80%;
    flex-direction: column;
    align-items: center;
`;

export default MarkPageForm;
