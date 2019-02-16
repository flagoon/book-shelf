import * as Yup from 'yup';

const bookValidationSchema = Yup.object().shape(
    {

        author: Yup.string()
            .min(2, 'Author value should be longer.')
            .max(50, "Author value is too long.")
            .required(),
        date: Yup.date().required(),
        isbn: Yup.string()
            .min(10, 'ISBN number should have more signs.')
            .max(13, 'ISBN number should be shorter.')
            .required(),
        pages: Yup.number()
            .moreThan(0, 'Number should be higher then 0.')
            .integer('Number should be an integer.')
            .required(),
        title: Yup.string()
            .max(80, 'Title value is too long.')
            .required(),
    }
);

export default bookValidationSchema;
