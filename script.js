document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');

    function checkVisibility() {
        boxes.forEach((box, index) => {
            const boxTop = box.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (boxTop < windowHeight - 100) {
                setTimeout(() => {
                    box.classList.add('animate');
                }, index * 100); // Добавляем задержку для эффекта последовательности
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('load', checkVisibility); // Проверяем видимость при загрузке страницы
});