import React from "react";
import PopupWithForm from "./PopupWithForm"

function AddPopup({ isOpen, onClose }) {
  return (
    <PopupWithForm isOpen={isOpen} onClose={onClose} name='add-popup' title='Новое местор' text='Сохранить'>

    <input className="popup__input add-popup__input add-popup__input_description_name" type="text"
      placeholder="Название" id="card" name="name" minLength="2" maxLength="30" required/>
    <span id="card-error" className="error"></span>
    <input className="popup__input add-popup__input add-popup__input_description_link" type="url"
      placeholder="Ссылка на картинку" name="link" id="link" required/>
    <span id="link-error" className="error"></span>

  </PopupWithForm>
  )
}

export default AddPopup
