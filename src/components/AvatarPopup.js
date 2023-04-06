import React from "react";
import PopupWithForm from "./PopupWithForm"

function AvatarPopup({ props, isOpen, onClose }) {

  const inputLink = React.useRef("");
	const [link, setLink] = React.useState("");

	React.useEffect(() => {
		setLink("");
	}, [isOpen]);

  function handleSubmit(e) {
		e.preventDefault();
		props.onUpdateAvatar({
			avatar: inputLink.current.value,
		});
		inputLink.current.value = "";
	}

  return (
    <PopupWithForm isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} name='avatar-popup' title='Обновить аватар' text='Сохранить'>

      <input className="popup__input avatar-popup__input avatar-popup__input_description_link" type="url"
        placeholder="Ссылка на картинку"   name="link" id="avatar-link" required/>
      <span id="avatar-link-error" className="error"></span>

  </PopupWithForm>
  )
}

export default AvatarPopup;
