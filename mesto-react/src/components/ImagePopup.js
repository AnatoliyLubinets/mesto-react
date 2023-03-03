import React from "react";

function ImagePopup({ card, onClose }) {
  return (
    <section className={`popup image-popup ${card.link ? "popup_opened" : ''}`}>
      <div className="image-popup__container">
        <button className="popup__close-button" onClick={onClose}></button>
        <img className="image-popup__img" src={card.link} alt={card.name} />
        <h2 className="image-popup__title">{card.name}</h2>
      </div>
    </section>
  );
};

export default ImagePopup;
