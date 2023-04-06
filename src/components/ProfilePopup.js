import React from "react";
import PopupWithForm from "./PopupWithForm"
import { userContext } from "../contexts/CurrentUserContext";

function ProfilePopup({props, isOpen, onClose }) {
  const currentUser = React.useContext(userContext);

  const [name, setName] = React.useState(" ");
	const [description, setDescription] = React.useState(" ");

  React.useEffect(() => {
		setName(currentUser.name || "");
		setDescription(currentUser.about || "");
	}, [currentUser, isOpen]);

  function handleSubmit(e) {
		e.preventDefault();
		props.onUpdateUser({
			name,
			about: description,
		});
	}

  return (
    <PopupWithForm isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} name='profile-popup' title='Редактировать профиль' text='Сохранить'>

      <input className="popup__input popup__input_description_name" type="text"
        placeholder="Моё имя"  name="name" id="name" minLength="2" maxLength="40" required/>
      <span id="name-error" className="error"></span>
      <input className="popup__input popup__input_description_about-me" type="text"
        placeholder="Обо мне"  name="info" id="about-me" minLength="2" maxLength="200" required/>
      <span id="about-me-error" className="error"></span>

    </PopupWithForm>
  )
}

export default ProfilePopup;
