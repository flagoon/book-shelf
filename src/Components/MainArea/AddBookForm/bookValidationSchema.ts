import * as Yup from 'yup';

const bookValidationSchema = Yup.object().shape({
    author: Yup.string()
        .min(2, 'Author value should be longer.')
        .max(50, 'Author value is too long.')
        .required('Author value is required'),
    date: Yup.date().required('Date value is required.'),
    isbn: Yup.string()
        .min(10, 'ISBN number should have more signs.')
        .max(13, 'ISBN number should be shorter.')
        .required('ISBN value is required.'),
    pages: Yup.number()
        .moreThan(0, 'Pages value should be higher then 0.')
        .integer('Number should be an integer.')
        .required('Number of pages value is required.'),
    title: Yup.string()
        .max(80, 'Title value is too long.')
        .required('Title value is required.'),
    picture: Yup.string().url('Picture value should be an image URL.'),
});

export default bookValidationSchema;
