export const createCard = (cardInfo, deleted, like, open) => {
    const card = document
        .querySelector('#card-template')
        .content.cloneNode(true);

    //name, link
    card.querySelector('.card__title').textContent = cardInfo.name;
    card.querySelector('.card__image').src = cardInfo.link;
    card.querySelector('.card__image').alt = cardInfo.name;

    card.querySelector('.card__delete-button').addEventListener(
        'click',
        deleted
    );
    card.querySelector('.card__like-button').addEventListener('click', like);
    card.querySelector('.card__image').addEventListener('click', open);
    return card;
};

export const addInitCard = (gallery, card) => gallery.append(card);

export const deleteCard = (e) => {
    e.target.closest('.card').remove();
};

export const likeCard = (e) => {
    e.target.classList.toggle('card__like-button_is-active');
};
