import React, { useState, useEffect } from "react";
import "./Popup.css";

function Popup({ value, onClose, img, style }) {
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
        <img src={img} alt="Telegram Qr Code" className="img" style={style}/>
        <p className="text">click here to close</p>
      </div>
    </>
  );
}

export default Popup;
