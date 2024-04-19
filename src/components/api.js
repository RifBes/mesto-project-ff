const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-11',
    headers: {
        authorization: '9c6f83a2-6230-468c-90a8-2370de3fc468',
        'Content-Type': 'application/json',
    },
};

const getResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export const getUserInfo = async () => {
    return fetch(config.baseUrl + '/users/me', {
        headers: config.headers,
    }).then((res) => getResponse(res));
};

export const сhangeUserInfo = async (nameOutput, jobOutput) => {
    return fetch(config.baseUrl + '/users/me', {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: nameOutput,
            about: jobOutput,
        }),
    }).then((res) => getResponse(res));
};

export const changeAvatarRequest = async (image) => {
    return fetch(config.baseUrl + '/users/me/avatar', {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            avatar: image,
        }),
    }).then((res) => getResponse(res));
};

export const loadImg = async () => {
    return fetch(config.baseUrl + '/cards', {
        headers: config.headers,
    }).then((res) => getResponse(res));
};

export const addNewCard = async (name, link) => {
    return fetch(config.baseUrl + '/cards', {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            link: link,
        }),
    }).then((res) => getResponse(res));
};

export const makeLike = async (cardId) => {
    return fetch(config.baseUrl + `/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: config.headers,
    }).then((res) => getResponse(res));
};

export const deleteCardApi = async (cardId) => {
    return fetch(config.baseUrl + `/cards/${cardId}`, {
        method: 'DELETE',
        headers: config.headers,
    }).then((res) => getResponse(res));
};

export const deleteLike = async (cardId) => {
    return fetch(config.baseUrl + `/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: config.headers,
    }).then((res) => getResponse(res));
};

export const getAllInfo = async () => {
    return Promise.all([getUserInfo(), loadImg()]);
};
