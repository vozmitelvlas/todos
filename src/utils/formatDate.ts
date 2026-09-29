export const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('ru-RU', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
    }).format(date);
};