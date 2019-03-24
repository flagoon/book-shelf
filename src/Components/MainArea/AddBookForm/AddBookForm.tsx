import { Field, Formik, FormikProps } from 'formik';
import React from 'react';
import { BooksConsumer } from '../../../ContextProvider/BooksProvider';
import { convertDateForInputField } from '../../../Utils/DateHelpers';
import { StyledButton } from '../../Common/Button/Button';
import { ButtonContainer, StyledForm, StyledLabel } from './AddBookForm.styled';

interface IAddBookFormProps {
    hideNotification: () => void;
}

type ICover = 'hard' | 'soft';

export interface IFormikValues {
    title: string;
    author: string;
    isbn: string;
    description: string;
    isRead: boolean;
    picture: string;
    pages: number;
    cover: ICover;
    date: string;
}

const AddBookForm = ({ hideNotification }: IAddBookFormProps) => {
    return (
        <BooksConsumer>
            {({ onNewBookFormSubmit }) => (
                <Formik
                    initialValues={{
                        title: '',
                        author: '',
                        isbn: '',
                        description: '',
                        isRead: false,
                        picture: '',
                        pages: 0,
                        cover: 'soft',
                        date: convertDateForInputField(new Date()),
                    }}
                    onSubmit={(values: IFormikValues, actions: any) => {
                        hideNotification();
                        onNewBookFormSubmit(values);
                    }}
                    render={(props: FormikProps<IFormikValues>) => (
                        <StyledForm>
                            <StyledLabel htmlFor={'title'}>Title</StyledLabel>
                            <Field name="title" value={props.values.title} />
                            <StyledLabel htmlFor={'author'}>Author</StyledLabel>
                            <Field name="author" value={props.values.author} />
                            <StyledLabel htmlFor={'isbn'}>ISBN</StyledLabel>
                            <Field name="isbn" value={props.values.isbn} />
                            <StyledLabel htmlFor={'description'}>Description</StyledLabel>
                            <Field name="description" component={'textarea'}>
                                {props.values.description}
                            </Field>
                            <StyledLabel htmlFor={'isRead'} className={'labelIsRead'}>
                                Is read?
                                <Field name="isRead" id={'isRead'} checked={props.values.isRead} type={'checkbox'} />
                            </StyledLabel>
                            <StyledLabel htmlFor={'picture'}>Picture (URL)</StyledLabel>
                            <Field name="picture" value={props.values.picture} type={'url'} />
                            <StyledLabel htmlFor={'pages'}>Pages</StyledLabel>
                            <Field name="pages" value={props.values.pages} type={'number'} />
                            <StyledLabel htmlFor={'cover'}>Cover</StyledLabel>
                            <Field name="cover" default={props.values.cover} component={'select'}>
                                <option value={'hard'} label={'Hard'} />
                                <option value={'soft'} label={'Soft'} />
                            </Field>
                            <StyledLabel htmlFor={'date'}>Acquired</StyledLabel>
                            <Field name="date" value={props.values.date} type={'date'} />
                            <ButtonContainer>
                                <StyledButton type={'submit'} color={'blue'}>
                                    Submit
                                </StyledButton>
                            </ButtonContainer>
                        </StyledForm>
                    )}
                />
            )}
        </BooksConsumer>
    );
};

export default AddBookForm;
