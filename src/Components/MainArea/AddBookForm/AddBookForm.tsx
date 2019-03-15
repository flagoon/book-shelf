import { Field, FieldProps, Form, Formik } from 'formik';
import React from 'react';
import { StyledFormElementContainer } from './AddBookForm.styled';

interface IAddBookFormProps {
    hideNotification: () => void;
}

const AddBookForm = ({ hideNotification }: IAddBookFormProps) => {
    return (
        <Formik
            initialValues={{ firstName: '' }}
            onSubmit={(values: any, actions: any) => {
                alert(JSON.stringify(values, undefined, 2));
                actions.setSubmitting(false);
            }}
            render={() => (
                <Form>
                    <StyledFormElementContainer>
                        <Field
                            name="firstName"
                            render={({ field, form }: FieldProps<any>) => (
                                <div>
                                    <input type="text" {...field} placeholder="First Name" />
                                    {form.touched.firstName && form.errors.firstName && form.errors.firstName}
                                </div>
                            )}
                        />
                    </StyledFormElementContainer>
                </Form>
            )}
        />
    );
};

export default AddBookForm;
