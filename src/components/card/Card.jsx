import React from "react";
import Counter from "../counter/Counter";

import "./Card.css";

const Card = props => {
  const { name, quantity, alcohol, image } = props.content;

  return (
    <div className="card">
      <header className="card__header">
        <h1 className="card__title">{name}</h1>
      </header>
      <ul className="card__list">
        <li className="card__item">{quantity}</li>
        <li className="card__item">{alcohol}</li>
      </ul>
      <div class="card__image">
        <img src={image} />
      </div>
      <Counter />
    </div>
  );
};

export default Card;
