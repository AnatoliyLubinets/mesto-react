import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState(" ");
  const [link, setLink] = React.useState(" ");

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({ name, link });
  }

  React.useEffect(() => {
		setName("");
		setLink("");
	}, [isOpen]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="add-popup"
      title="Новое место"
      text="Сохранить"
    >
      <input
        className="popup__input add-popup__input add-popup__input_description_name"
        type="text"
        placeholder="Название"
        id="card"
        name="name"
        minLength="2"
        maxLength="30"
        onChange={(e) => setName(e.target.value)}
        value={name}
        required
      />
      <span id="card-error" className="error"></span>
      <input
        className="popup__input add-popup__input add-popup__input_description_link"
        type="url"
        placeholder="Ссылка на картинку"
        name="link"
        id="link"
        onChange={(e) => setLink(e.target.value)}
        value={link}
        required
      />
      <span id="link-error" className="error"></span>
    </PopupWithForm>
  );
}

export default AddPopup;
