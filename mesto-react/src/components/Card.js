import React from "react";

function Card({ card, onCardClick }) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className="elements__item">
      <button className="elements__delete" type="button" aria-label="Удалить" id="delete"></button>
      <img className="elements__photo" src={card.link} alt={card.name} onClick={handleClick}/>
      <div className="elements__group">
        <h2 className="elements__name">{card.name}</h2>
        <div className="elements__like-group">
          <button className="elements__heart" type="button" aria-label="Нравится"></button>
          <span id="number" className="elements__number-of-like">{card.like.lenght}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
