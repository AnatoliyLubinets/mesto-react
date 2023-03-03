import React from "react";
import PopupWithForm from "./PopupWithForm"

function ProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm isOpen={isOpen} onClose={onClose} name='profile-popup' title='Редактировать профиль' text='Сохранить'>

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
