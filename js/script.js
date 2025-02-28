document.addEventListener('DOMContentLoaded', function() {
    const hoverElements = document.querySelectorAll('.hover-effect');

    hoverElements.forEach(element => {
        element.addEventListener('mouseover', function() {
            this.style.color = '#ff9800';
        });

        element.addEventListener('mouseout', function() {
            this.style.color = '#e0e0e0';
        });
    });
});