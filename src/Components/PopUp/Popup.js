import React from "react";
import tele from "../../Assets/tele.png";
import "./Popup.css";

function Popup({ value, onClose }) {
  return (
    <>
      {value === true ? (
        <div className="popup" onClick={onClose}>
          <img src={tele} alt="Telegram Qr Code" className="img" />
          <p className="text">click here to close</p>
        </div>
      ) : null}
    </>
  );
}

export default Popup;
