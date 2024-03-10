const templateCard = document.querySelector('#card-template').content;
const cardsGallery = document.querySelector('.places__list');

const createCard = (cardInfo, deleted) => {
    let card = templateCard.cloneNode(true);

    //name, link
    card.querySelector('.card__title').textContent = cardInfo.name;
    card.querySelector('.card__image').src = cardInfo.link;
    card.querySelector('.card__image').alt = cardInfo.name;

    card.querySelector('.card__delete-button').addEventListener(
        'click',
        deleted
    );
    return card;
};

const addCard = (gallery, card) => gallery.append(card);

const deleteCard = (e) => {
    e.target.closest('.card').remove();
};

initialCards.forEach((card) => {
    let newCard = createCard(card, deleteCard);
    addCard(cardsGallery, newCard);
});
