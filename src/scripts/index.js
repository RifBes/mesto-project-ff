import '../pages/index.css';

import {
    createCard,
    addInitCard,
    likeCard,
    renderNewCard,
} from '../components/card';
import {
    openModal,
    closeModal,
    closePopupOverlayAndButton,
} from '../components/modal';
import { clearValidation, enableValidation } from '../components/validation.js';
import {
    сhangeUserInfo,
    changeAvatarRequest,
    getAllInfo,
    addNewCard,
    deleteCardApi,
} from '../components/api.js';

let myID = 0;

//для валидации
const validationsComponents = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
};

//форма удаления картинки
const deleteForm = document.querySelector('.popup_delete');
const deleteFormButton = deleteForm.querySelector('.popup__button');

const deleteCard = (cardId) => {
    openModal(deleteForm);
    deleteFormButton.dataset.cardId = cardId;
    console.log(
        document.querySelector(
            `[data-card-id="${deleteFormButton.dataset.cardId}"]`
        )
    );
};

const handlerDeleteCard = (e) => {
    e.preventDefault();
    deleteCardApi(deleteFormButton.dataset.cardId)
        .then((res) => {
            const card = document.querySelector(
                `[data-card-id="${deleteFormButton.dataset.cardId}"]`
            );
            card.remove();
            closeModal(deleteForm);
        })
        .catch((err) => {
            console.log(err);
        });
};

deleteForm.addEventListener('submit', handlerDeleteCard);

const cardsList = document.querySelector('.places__list');

const initCard = (initialCards) => {
    initialCards.forEach((card) => {
        const newCard = createCard(card, myID, deleteCard, openCard, likeCard);
        addInitCard(cardsList, newCard);
    });
};

//профиль
const profileTitle = document.querySelector('.profile__title');
const profileDesc = document.querySelector('.profile__description');

//редактирование профиля
const buttonProfile = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');

const editProfile = (e) => {
    e.preventDefault();

    сhangeUserInfo(
        document.forms['edit-profile'].elements.name.value,
        document.forms['edit-profile'].elements.description.value
    );
    profileTitle.textContent =
        document.forms['edit-profile'].elements.name.value;
    profileDesc.textContent =
        document.forms['edit-profile'].elements.description.value;

    closeModal(popupEdit);
};

buttonProfile.addEventListener('click', () => {
    const editProfileForm = document.forms['edit-profile'];
    editProfileForm.elements.name.value =
        document.querySelector('.profile__title').textContent;
    editProfileForm.elements.description.value = document.querySelector(
        '.profile__description'
    ).textContent;

    clearValidation(editProfileForm, validationsComponents);
    openModal(popupEdit);
});

document.forms['edit-profile'].addEventListener('submit', editProfile);

//добавление новой карточки
const buttonAdd = document.querySelector('.profile__add-button');
const popupNewCard = document.querySelector('.popup_type_new-card');
const cardName = popupNewCard.querySelector('.popup__input_type_card-name');
const cardImage = popupNewCard.querySelector('.popup__input_type_url');

buttonAdd.addEventListener('click', () => {
    const newCardForm = document.forms['new-place'];
    clearValidation(newCardForm, validationsComponents);
    openModal(popupNewCard);
});

const addPlace = async (e) => {
    e.preventDefault();
    const newCard = {
        name: cardName.value,
        link: cardImage.value,
    };
    addNewCard(newCard.name, newCard.link)
        .then((newCard) => {
            renderNewCard(
                newCard,
                myID,
                deleteCard,
                likeCard,
                openCard,
                cardsList
            );
            closeModal(popupNewCard);
        })
        .catch((err) => {
            console.log(err);
        });
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

//смена аватарки
const changeAvatarClick = document.querySelector('.profile__image');
const changeAvatarModal = document.querySelector('.popup_type_changeAvatar');
const formProfileImg = document.forms['new-avatar'];
const formProfileImgButton = formProfileImg.querySelector('.popup__button');
const profileImg = document.querySelector('.profile__image');

changeAvatarClick.addEventListener('click', () => {
    clearValidation(formProfileImg, validationsComponents);
    openModal(changeAvatarModal);
});

const changeAvatar = (e) => {
    e.preventDefault();

    const buttonText = formProfileImgButton.textContent;
    formProfileImgButton.textContent = 'Сохранение...';

    changeAvatarRequest(formProfileImg.link.value)
        .then((profile) => {
            profileImg.style.backgroundImage = `url(${profile.avatar})`;
            closeModal(changeAvatarModal);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => (formProfileImgButton.textContent = buttonText));
};

formProfileImg.addEventListener('submit', changeAvatar);

//закрытие форм
const allPopup = document.querySelectorAll('.popup');
allPopup.forEach((popup) => {
    popup.addEventListener('mousedown', closePopupOverlayAndButton);
});

enableValidation(validationsComponents);

getAllInfo()
    .then(([profile, cards]) => {
        //сначала профиль, потом карточки
        profileTitle.textContent = profile.name;
        profileDesc.textContent = profile.about;
        profileImg.style.backgroundImage = `url(${profile.avatar})`;
        myID = profile._id;
        initCard(cards);
    })
    .catch((err) => {
        console.log(err);
    });
