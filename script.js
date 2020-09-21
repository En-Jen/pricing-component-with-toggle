const switchButton = document.querySelector('.header__switch input');
const monthlyPrice = document.querySelectorAll('.card__price--month');
const cards = document.querySelectorAll('.card');
const yearlyPrice = document.querySelectorAll('.card__price--year');

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