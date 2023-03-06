import React from "react";

function Card(props) {
  const [selectedCard, setSelectedCard ] = React.useState({});

  function handleCardClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="elements__item">
      <button className="elements__delete" type="button" aria-label="Удалить" id="delete"></button>
      <img className="elements__photo" src={props.card.link} alt={props.card.name} onClick={handleCardClick}/>
      <div className="elements__group">
        <h2 className="elements__name">{props.card.name}</h2>
        <div className="elements__like-group">
          <button className="elements__heart" type="button" aria-label="Нравится"></button>
          <span id="number" className="elements__number-of-like">{props.card.likes.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
