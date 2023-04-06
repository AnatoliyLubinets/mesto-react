import React from "react";
import api from "../utils/api";
import Card from "./Card";
import { userContext } from "../contexts/CurrentUserContext";

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick, handleCardLike, handleCardDelete, cards}) {
  const currentUser = React.useContext(userContext);

  return (
    <main className="content">
      <section className="profile">
        <button className="profile__avatar-button" onClick={onEditAvatar}>
          <div className="profile__avatar" style={{ backgroundImage: `url(${currentUser.avatar})` }}>
          </div>
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={onEditProfile}></button>
          <p className="profile__about-me">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" type="button" aria-label="Добавить" onClick={onAddPlace}></button>
      </section>

      <section className="elements" id="elements-list">
        {cards.map((card) => {
          return (
            <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
					  onCardLike={handleCardLike}
					  onCardDelete={handleCardDelete}
            />
          );
        })}
      </section>

    </main>
  )
};

export default Main;
