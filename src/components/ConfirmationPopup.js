import React from "react";
import PopupWithForm from "./PopupWithForm"

function ConfirmationPopup({ isOpen, onClose }) {
  return (
    <PopupWithForm isOpen={isOpen} onClose={onClose} name='confirmation-popup' title='Вы уверены?' text='Да'></PopupWithForm>
  )
}

export default ConfirmationPopup;
