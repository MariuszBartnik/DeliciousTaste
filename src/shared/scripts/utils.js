export const convertStringToArray = (string) => {
    return string.split(',').map(item => item.trim());
} 