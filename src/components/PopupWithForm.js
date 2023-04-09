import React from "react";

function PopupWithForm(props) {
  return (
    <section
      className={`popup popup__${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <button
          className="popup__close-button"
          onClick={props.onClose}
        ></button>
        <form
          className="popup__form popup__submit-form"
          name={`${props.name}`}
          onSubmit={props.onSubmit}
        >
          {props.children}
          <button className="popup__button popup__submit-button" type="submit">
            {props.text}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
