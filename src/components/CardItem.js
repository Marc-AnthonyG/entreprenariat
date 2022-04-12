import React from "react";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <div className="cards__item__link">
          <div>
            <h1 className="cards__item__info__label">{props.label}</h1>
          </div>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
