import React from "react";
import PopupWithForm from "./PopupWithForm"

function AvatarPopup({ onUpdateAvatar, isOpen, onClose }) {

  const inputLink = React.useRef("");

  function handleSubmit(e) {
		e.preventDefault();
		onUpdateAvatar({
			avatar: inputLink.current.value,
		});
		inputLink.current.value = "";
	}

  return (
    <PopupWithForm isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} name='avatar-popup' title='Обновить аватар' text='Сохранить'>

      <input className="popup__input avatar-popup__input avatar-popup__input_description_link" type="url"
        placeholder="Ссылка на картинку"   name="link" id="avatar-link" ref={inputLink} required/>
      <span id="avatar-link-error" className="error"></span>

  </PopupWithForm>
  )
}

export default AvatarPopup;
