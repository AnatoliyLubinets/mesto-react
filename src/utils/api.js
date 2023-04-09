class Api {
  constructor(options) {
    this._options = options;
    this._baseUrl = this._options.baseUrl;
    this._headers = this._options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse)
  }

  getInitialCards = () => {
    return this._request(`${this._baseUrl}/cards`, {
      headers: this._headers,
    })
  }

  getProfileInfo = () => {
    return this._request(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    });
    }

  profileEdit = (values) => {
    return this._request(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        name: values.name,
        about: values.about
      })
    })
  }

  createNewCard = (values) => {
    return this._request(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: values.name,
        link: values.link
      })
    })
  }


  handleDeleteCard = (_id) => {
    return this._request(`${this._baseUrl}/cards/${_id}`, {
      method: 'DELETE',
      headers: this._headers,
    })
  }

  handleLikeClick = (_id) => {
    return this._request(`${this._baseUrl}/cards/${_id}/likes`, {
      method: 'PUT',
      headers: this._headers,
      body: JSON.stringify()
    })
  }

  handleDeleteLikeClick = (_id) => {
    return this._request(`${this._baseUrl}/cards/${_id}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    })
  }

  toggleLike = (cardId, isLiked) => {
		return this._request(`${this._baseUrl}/cards/${cardId}/likes`, {
			method: `${isLiked ? "DELETE" : "PUT"}`,
			headers: this._headers,
			body: JSON.stringify(),
		});
	}

  handleChangeAvatar = (user) => {
    return this._request(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: user.avatar
      })
    })
  }
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-59",
  headers: {
    authorization: "af4e66a2-1aaf-46fc-b7c6-0a00a307bcb9",
    "Content-Type": "application/json",
  },
});

export default api
