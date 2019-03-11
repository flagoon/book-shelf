import React from 'react';
import { BooksConsumer } from '../../../ContextProvider/BooksProvider';

const AddBookForm = () => {
    return (
        <BooksConsumer>
            {(context) => {
                return (
                    <form>
                        <label htmlFor={'author'}>
                            <input
                                type={'text'}
                                id={'author'}
                                name={'author'}
                                value={context.newBook.author}
                                onChange={context.onFormValueChange}
                            />
                        </label>
                        <label htmlFor="cover">
                            <select name="cover" id="cover" onChange={context.onFormValueChange}>
                                <option value={'hard'}>hard</option>
                                <option value={'soft'}>soft</option>
                            </select>
                        </label>
                    </form>
                );
            }}
        </BooksConsumer>
    );
};

export default AddBookForm;
