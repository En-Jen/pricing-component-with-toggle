const switchButton = document.querySelector('.header__switch input');
const cards = document.querySelectorAll('.card');

switchButton.addEventListener('change', e => {
    if (e.target.checked) {
        cards.forEach((card) => {
            card.classList.add('toggle');
        });
    } else {
        cards.forEach((card) => {
            card.classList.remove('toggle');
        });
    }
});