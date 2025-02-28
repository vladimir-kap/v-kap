document.addEventListener('DOMContentLoaded', function() {
    const hoverElements = document.querySelectorAll('.hover-effect');

    hoverElements.forEach(element => {
        element.addEventListener('mouseover', function() {
            this.style.color = '#ffeb3b';
        });

        element.addEventListener('mouseout', function() {
            this.style.color = '#ffffff';
        });
    });
});