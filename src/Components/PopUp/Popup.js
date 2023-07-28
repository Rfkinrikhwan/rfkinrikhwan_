import React, { useState, useEffect } from "react";
import tele from "../../Assets/tele.png";
import "./Popup.css";

function Popup({ value, onClose }) {
  const [isPopupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    if (value) {
      setPopupVisible(true);
    }
  }, [value]);

  const handlePopupClick = () => {
    setPopupVisible(false);
    onClose();
  };

  return (
    <>
      <div className={`popup ${isPopupVisible ? "show" : ""}`} onClick={handlePopupClick}>
        <img src={tele} alt="Telegram Qr Code" className="img" />
        <p className="text">click here to close</p>
      </div>
    </>
  );
}

export default Popup;
