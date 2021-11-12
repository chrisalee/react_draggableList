import React from "react";
import './card.css';

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={props.item.img} alt={props.item.title} />
      </div>
      <div className="card__title"><p>{props.item.title}</p></div>
    </div>
  );
};

export default Card;
