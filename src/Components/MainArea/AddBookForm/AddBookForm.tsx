import React, {FormEvent} from 'react';
import { BooksConsumer } from '../../../ContextProvider/BooksProvider';
import { StyledButton } from '../../Common/Button/Button';
import { StyledForm, StyledFormElementContainer } from './AddBookForm.styled';

interface IAddBookFormProps {
    hideNotification: () => void;
}

const AddBookForm = ({hideNotification}: IAddBookFormProps) => {
    return (
        <BooksConsumer>
            {(context) => {
                const { title, author, picture, pages, date, isbn, description } = context.newBook;
                const { onNewBookFormSubmit } = context;
                const submitWithHideNotification = (e: FormEvent<HTMLFormElement>): void | undefined => {
                    e.preventDefault();
                    onNewBookFormSubmit(e);
                    hideNotification();
                };
                return (
                    <StyledForm onSubmit={submitWithHideNotification}>
                        <StyledFormElementContainer>
                            <label htmlFor={'title'}>
                                <span>Title:</span>
                                <input
                                    type={'text'}
                                    id={'title'}
                                    name={'title'}
                                    value={title}
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
                                    value={author}
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
                                <span>Picture (url):</span>
                                <input
                                    type={'url'}
                                    id={'picture'}
                                    name={'picture'}
                                    value={picture}
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
                                    value={pages}
                                    onChange={context.onFormValueChange}
                                />
                            </label>
                        </StyledFormElementContainer>
                        <StyledFormElementContainer>
                            <label htmlFor={'date'}>
                                <span>Date:</span>
                                <input
                                    type={'date'}
                                    id={'date'}
                                    name={'date'}
                                    value={date}
                                    onChange={context.onFormValueChange}
                                />
                            </label>
                        </StyledFormElementContainer>
                        <StyledFormElementContainer>
                            <label htmlFor={'isbn'}>
                                <span>ISBN:</span>
                                <input
                                    type={'text'}
                                    id={'isbn'}
                                    name={'isbn'}
                                    value={isbn}
                                    onChange={context.onFormValueChange}
                                />
                            </label>
                        </StyledFormElementContainer>
                        <StyledFormElementContainer>
                            <label htmlFor={'description'}>
                                <span>Description:</span>
                                <textarea id={'description'} name={'description'} onChange={context.onFormValueChange}>
                                    {description}
                                </textarea>
                            </label>
                        </StyledFormElementContainer>
                        <StyledButton color={'blue'} type={'submit'}>
                            Submit
                        </StyledButton>
                    </StyledForm>
                );
            }}
        </BooksConsumer>
    );
};

export default AddBookForm;
