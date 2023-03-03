import React from "react";
import Api from "../utils/Api";
import Card from "./Card";

function Main({onEditProfile, onAddPlace, onEditAvatar, onConfirm, onCardClick}) {
  const [profileAvatar, setProfileAvatar] = React.useState(false);
  const [profileName, setProfileName] = React.useState(false);
  const [profileAbout, setProfileAbout] = React.useState(false);
  const [cards, setCards] = React.useState([]);

  return (
    <main className="content">
      <section className="profile">
        <button className="profile__avatar-button" onClick={onEditAvatar}>
          <img className="profile__avatar" alt="Аватарка" src={`${profileAvatar}`}/>
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{profileName}</h1>
          <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={onEditProfile}></button>
          <p className="profile__about-me">{profileAbout}</p>
        </div>
        <button className="profile__add-button" type="button" aria-label="Добавить" onClick={onAddPlace}></button>
      </section>

      <section className="elements" id="elements-list">
        {cards.map((card) => {
          return (
            <Card
            card={card}
            link={card.link}
            name={card.name}
            key={card._id}
            onCardClick={onCardClick}
            />
          );
        })};
      </section>

    </main>
  )
};

export default Main;
