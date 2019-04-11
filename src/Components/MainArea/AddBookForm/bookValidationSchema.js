import * as Yup from 'yup';

const bookValidationSchema = Yup.object().shape(
    {

        author: Yup.string()
            .min(2, 'TooShort')
            .max(20, 'Toolong')
            .isRequired,
        date: Yup.date().isRequired,
        isbn: Yup.string()
            .min(10)
            .max(13)
            .isRequired,
        pages: Yup.number()
            .moreThan(0, 'Number should be higher then 0')
            .integer('Number should be an integer')
            .isRequired,
        title: Yup.string()
            .max(10, 'TestYup')
            .isRequired,
    }
);

export default bookValidationSchema;