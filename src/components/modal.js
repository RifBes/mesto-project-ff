export const openModal = (modal) => {
    modal.classList.add('popup_is-opened');
    document.addEventListener('keydown', closeEsc);
};

export const closeModal = (modal) => {
    modal.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closeEsc);
};

export const closeEsc = (e) => {
    if (e.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_is-opened');
        if (openedPopup) {
            closeModal(openedPopup);
        }
    }
};
