import '../pages/index.css';

import { createCard, addCard, deleteCard, likeCard } from '../components/card';
import { initialCards } from '../components/cards';
import { openModal, closeModal } from '../components/modal';

const cardsList = document.querySelector('.places__list');

initialCards.forEach((card) => {
    const newCard = createCard(card, deleteCard, likeCard, openCard);
    addCard(cardsList, newCard);
});

//редактирование профиля
const buttonProfile = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');

const editProfile = (e) => {
    e.preventDefault();
    document.querySelector('.profile__title').textContent =
        document.forms['edit-profile'].elements.name.value;
    document.querySelector('.profile__description').textContent =
        document.forms['edit-profile'].elements.description.value;
    e.target.closest('form').reset();
    closeModal(popupEdit);
};

buttonProfile.addEventListener('click', () => {
    openModal(popupEdit);
});

document.forms['edit-profile'].addEventListener('submit', editProfile);

//добавление новой карточки
const buttonAdd = document.querySelector('.profile__add-button');
const popupNewCard = document.querySelector('.popup_type_new-card');
const cardName = popupNewCard.querySelector('.popup__input_type_card-name');
const cardImage = popupNewCard.querySelector('.popup__input_type_url');

buttonAdd.addEventListener('click', () => {
    openModal(popupNewCard);
});

const addPlace = (e) => {
    e.preventDefault();
    const new_card = {
        name: cardName.value,
        link: cardImage.value,
    };
    cardsList['prepend'](createCard(new_card, deleteCard));
    e.target.closest('form').reset();
    closeModal(popupNewCard);
};

document.forms['new-place'].addEventListener('submit', addPlace);

//форма картинки
const popupImages = document.querySelector('.popup_type_image');

const popupImage = popupImages.querySelector('.popup__image');
const popupImageDesc = popupImages.querySelector('.popup__caption');

function openCard(e) {
    const card = e.currentTarget.closest('.card');
    const imageSrc = card.querySelector('.card__image').src;
    const cardTitle = card.querySelector('.card__title').textContent;

    popupImage.src = imageSrc;
    popupImage.alt = cardTitle;
    popupImageDesc.textContent = cardTitle;

    openModal(popupImages);
}

//закрытие форм
const allPopup = document.querySelectorAll('.popup');

allPopup.forEach((popup) => {
    popup.addEventListener('mousedown', (e) => {
        //крестик
        if (e.target.classList.contains('popup__close')) {
            closeModal(popup);
        }
        //вне окна
        if (e.target.classList.contains('popup_is-opened')) {
            closeModal(popup);
        }
    });
});
