import { deleteLike, makeLike } from './api';

export const likeCard = (e, id) => {
    const actualLikes = e.target.parentNode.querySelector('.card__like-count');

    if (e.target.classList.contains('card__like-button_is-active')) {
        deleteLike(id)
            .then((updatedCard) => {
                e.target.classList.remove('card__like-button_is-active');
                actualLikes.textContent = updatedCard.likes.length;
            })
            .catch((err) => {
                console.log(err);
            });
    } else {
        makeLike(id)
            .then((updatedCard) => {
                e.target.classList.add('card__like-button_is-active');
                actualLikes.textContent = updatedCard.likes.length;
            })
            .catch((err) => {
                console.log(err);
            });
    }
};

export const createCard = (cardInfo, myID, deleted, open, like) => {
    const card = document
        .querySelector('#card-template')
        .content.cloneNode(true);

    //магия с id
    const cardElement = card.querySelector('.card');
    cardElement.dataset.cardId = cardInfo._id;
    cardElement.dataset.ownerId = cardInfo.owner._id;

    //name, link
    card.querySelector('.card__title').textContent = cardInfo.name;
    card.querySelector('.card__image').src = cardInfo.link;
    card.querySelector('.card__image').alt = cardInfo.name;

    //лайки
    const cardLikeCount = card.querySelector('.card__like-count');
    const cardLikeButton = card.querySelector('.card__like-button');
    cardLikeCount.textContent = cardInfo.likes.length;
    const isLiked = cardInfo.likes.some((like) => like._id === myID);
    if (isLiked) {
        cardLikeButton.classList.add('element__like_active');
    }
    card.querySelector('.card__like-button').addEventListener('click', (e) => {
        like(e, cardInfo._id);
    });

    //удаление
    if (myID !== cardInfo.owner._id) {
        card.querySelector('.card__delete-button').remove();
    } else {
        card.querySelector('.card__delete-button').addEventListener(
            'click',
            () => {
                deleted(cardInfo._id);
            }
        );
    }

    card.querySelector('.card__image').addEventListener('click', open);
    return card;
};

export const addInitCard = (gallery, card) => gallery.append(card);

export const renderNewCard = (
    card,
    myID,
    deleteCard,
    likeCard,
    openCard,
    cardsList
) => {
    const newCard = createCard(card, myID, deleteCard, openCard, likeCard);
    cardsList.prepend(newCard);
};
