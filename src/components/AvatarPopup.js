import React from "react";
import PopupWithForm from "./PopupWithForm"

function AvatarPopup({ isOpen, onClose }) {
  return (
    <PopupWithForm isOpen={isOpen} onClose={onClose} name='avatar-popup' title='Обновить аватар' text='Сохранить'>

      <input className="popup__input avatar-popup__input avatar-popup__input_description_link" type="url"
        placeholder="Ссылка на картинку"   name="link" id="avatar-link" required/>
      <span id="avatar-link-error" className="error"></span>

  </PopupWithForm>
  )
}

export default AvatarPopup;
