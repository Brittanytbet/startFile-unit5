import { reviews } from './reviews.js';

const navElement = document.querySelector('#theNav');
const btnElement = document.querySelector('#theButton');

btnElement.addEventListener('click', () => {
    btnElement.classList.toggle('open');
    navElement.classList.toggle('open');
});

const reviewsContainer = document.querySelector('#reviewsContainer');

reviews.forEach(review => {
    const filledStars = '★'.repeat(review.stars);
    const emptyStars = '☆'.repeat(5 - review.stars);

    const card = document.createElement('div');
    card.classList.add('review');
    card.innerHTML = `
        <h3>${review.name}</h3>
        <p class="stars">${filledStars}${emptyStars}</p>
        <p>${review.text}</p>
    `;
    reviewsContainer.appendChild(card);
});