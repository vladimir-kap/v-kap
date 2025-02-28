document.addEventListener('DOMContentLoaded', () => {
    const columns = document.querySelectorAll('.column');

    columns.forEach(column => {
        column.addEventListener('mouseover', () => {
            column.style.borderColor = '#ff6600';
        });

        column.addEventListener('mouseout', () => {
            column.style.borderColor = 'transparent';
        });
    });
});