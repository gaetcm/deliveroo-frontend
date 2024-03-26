import React, { useState, useEffect } from "react";
import "./Content.css";
import Panier from "../Panier/Panier";

const Content = ({ data }) => {
  const [basketItems, setBasketItems] = useState([]);

  const addOrRemoveMealToBasket = (mealToAddOrRemove, forceAdd) => {
    const existingMealIndex = basketItems.findIndex(
      (mealInBasket) => mealInBasket.id === mealToAddOrRemove.id
    );

    if (existingMealIndex !== -1 && !forceAdd) {
      const updatedBasketItems = [...basketItems];
      updatedBasketItems.splice(existingMealIndex, 1);
      setBasketItems(updatedBasketItems);
    } else {
      if (existingMealIndex !== -1) {
        // Si le repas existe déjà dans le panier, augmenter sa quantité
        const updatedBasketItems = [...basketItems];
        updatedBasketItems[existingMealIndex].quantity += 1;
        setBasketItems(updatedBasketItems);
      } else {
        // Si le repas n'existe pas dans le panier, l'ajouter avec une quantité de 1
        setBasketItems([...basketItems, { ...mealToAddOrRemove, quantity: 1 }]);
      }
    }
  };

  return (
    <main>
      <div className="container">
        <div className="content">
          {data.categories.splice(6, 6)}
          {data.categories.map((category, index) => {
            return (
              <>
                <h2 key={index}>{category.name}</h2>

                <div className="recette1">
                  {category.meals.map((meal) => {
                    return (
                      <>
                        <div
                          className="recette2"
                          onClick={() => addOrRemoveMealToBasket(meal, false)}
                          key={meal.id}
                        >
                          <div className="recettetext">
                            <h3>{meal.title}</h3>
                            <p>{meal.description}</p>
                            <span style={{ color: "#868a8a" }}>
                              {meal.price} €
                              {meal.popular ? (
                                <span className="popular">
                                  <i className="icon-STAR_FILL"></i> Populaire
                                </span>
                              ) : null}
                            </span>
                          </div>
                          {meal.picture ? <img src={meal.picture} /> : null}
                        </div>
                      </>
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
        <Panier items={basketItems} />
      </div>
    </main>
  );
};

export default Content;
