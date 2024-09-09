import React from 'react';

const CardPizza = ({ name, ingredients, price, img, onAddToCart }) => {
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <ul className="list-group list-group-flush">
          {ingredients.map((ingredient, index) => (
            <li className="list-group-item" key={index}>
              {ingredient}
            </li>
          ))}
        </ul>
        <p className="card-text">Precio: ${price.toLocaleString()}</p>
        <button className="btn btn-primary" onClick={onAddToCart}>Añadir al carrito</button>
      </div>
    </div>
  );
};

export default CardPizza;

