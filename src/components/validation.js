const showInputError = (
    formElement,
    inputElement,
    errorMessage,
    validationsComponents
) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(validationsComponents.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationsComponents.errorClass);
};

const hideInputError = (formElement, inputElement, validationsComponents) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(validationsComponents.inputErrorClass);
    errorElement.classList.remove(validationsComponents.errorClass);
    errorElement.textContent = '';
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

const toggleButton = (inputList, button, validationsComponents) => {
    if (hasInvalidInput(inputList)) {
        button.classList.add(validationsComponents.inactiveButtonClass);
        button.disabled = true;
    } else {
        button.classList.remove(validationsComponents.inactiveButtonClass);
        button.disabled = false;
    }
};

const checkInputValidity = (form, inputElement, validationsComponents) => {
    if (inputElement.validity.patternMismatch) {
        inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
        inputElement.setCustomValidity('');
    }

    if (!inputElement.validity.valid) {
        showInputError(
            form,
            inputElement,
            inputElement.validationMessage,
            validationsComponents
        );
    } else {
        hideInputError(form, inputElement, validationsComponents);
    }
};

const setEventListeners = (form, validationsComponents) => {
    const inputList = Array.from(
        form.querySelectorAll(validationsComponents.inputSelector)
    );
    const buttonElement = form.querySelector(
        validationsComponents.submitButtonSelector
    );

    toggleButton(inputList, buttonElement, validationsComponents);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(form, inputElement, validationsComponents);
            toggleButton(inputList, buttonElement, validationsComponents);
        });
    });
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const enableValidation = (validationsComponents) => {
    const forms = Array.from(
        document.querySelectorAll(validationsComponents.formSelector)
    );
    forms.forEach((form) => {
        setEventListeners(form, validationsComponents);
    });
};

export const clearValidation = (profileForm, validationsComponents) => {
    const buttonElement = profileForm.querySelector(
        validationsComponents.submitButtonSelector
    );
    const inputList = Array.from(
        profileForm.querySelectorAll(validationsComponents.inputSelector)
    );

    inputList.forEach((inputElement) => {
        hideInputError(profileForm, inputElement, validationsComponents);
    });

    toggleButton(inputList, buttonElement, validationsComponents);
};
