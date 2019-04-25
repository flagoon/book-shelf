export const convertDateForInputField = (date: Date) =>
    date
        .toLocaleDateString('en-GB')
        .split('/')
        .reverse()
        .join('-');
