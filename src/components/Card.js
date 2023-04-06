import React from "react";
import { userContext } from "../contexts/CurrentUserContext.js";

function Card(props) {
  const currentUser = React.useContext(userContext);

  const isOwn = props.card.owner._id === currentUser._id;

	const cardDeleteButtonClassName = `elements__delete ${
		isOwn ? "elements__delete" : document.querySelector("elements__delete")
	}`;

	const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

  const cardLikeButtonClassName = (
    `elements__heart ${isLiked && 'elements__heart_active'}`
  );;

  function handleCardClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
		props.onCardLike(props.card, isLiked);
	}

	function handleDeleteClick() {
		props.onCardDelete(props.card);
	}

  return (
    <div className="elements__item">
      <button className={cardDeleteButtonClassName} onClick={handleDeleteClick} type="button" aria-label="Удалить" id="delete"></button>
      <img className="elements__photo" src={props.card.link} alt={props.card.name} onClick={handleCardClick}/>
      <div className="elements__group">
        <h2 className="elements__name">{props.card.name}</h2>
        <div className="elements__like-group">
          <button className={cardLikeButtonClassName} onClick={handleLikeClick} type="button" aria-label="Нравится"></button>
          <span id="number" className="elements__number-of-like">{props.card.likes.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
