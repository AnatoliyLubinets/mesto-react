import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import ProfilePopup from "./ProfilePopup"
import AvatarPopup from "./AvatarPopup"
import AddPopup from  "./AddPopup"
import ConfirmationPopup from "./ConfirmationPopup"
import ImagePopup from "./ImagePopup"


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setisConfirmPopupOpen]  = React.useState(false);
  const [selectedCard, setSelectedCard ] = React.useState({});

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen("popup_opened");
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen("popup_opened");
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen("popup_opened");
  };

  const handleConfirmClick = () => {
    setisConfirmPopupOpen("popup_opened");
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setisConfirmPopupOpen(false);
    setSelectedCard({});
  };

  return (
    <div className="page">
      <Header/>
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onConfirm={handleConfirmClick}
        onCardClick={handleCardClick}
      />
      <ProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />

      <AvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />

      <AddPopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

      <ConfirmationPopup
       isOpen={isConfirmPopupOpen}
       onClose={closeAllPopups}
      />

      <Footer/>
      <template id="elements-template">
        <div className="elements__item">
          <button className="elements__delete" type="button" aria-label="Удалить" id="delete"></button>
          <img className="elements__photo"/>
          <div className="elements__group">
            <h2 className="elements__name"></h2>
            <div className="elements__like-group">
              <button className="elements__heart" type="button" aria-label="Нравится"></button>
              <span id="number" className="elements__number-of-like">0</span>
            </div>
          </div>
        </div>
      </template>
    </div>
  );
}

export default App;
