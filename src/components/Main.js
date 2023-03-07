import React from "react";
import api from "../utils/api";
import Card from "./Card";

function Main({onEditProfile, onAddPlace, onEditAvatar, onConfirm, onCardClick}) {
  const [userAvatar, setUserAvatar] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInitialCards(), api.getProfileInfo()])
        .then(([cards, user]) => {
          setUserName(user.name);
          setUserDescription(user.about);
          setUserAvatar(user.avatar);
          setCards(cards);
        })
        .catch((error) => {
          console.log(error)
        });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <button className="profile__avatar-button" onClick={onEditAvatar}>
          <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }}>
          </div>
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={onEditProfile}></button>
          <p className="profile__about-me">{userDescription}</p>
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
            />
          );
        })}
      </section>

    </main>
  )
};

export default Main;
