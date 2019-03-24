export const convertDateForInputField = (date: Date) => {
    return date
        .toLocaleDateString()
        .split('.')
        .reverse()
        .join('-');
};
