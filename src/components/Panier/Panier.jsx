import "./Panier.css";

const Panier = ({ items }) => {
  return (
    <>
      <div className="panier">
        <div className="contentpanier">
          {items.length > 0 ? (
            <button className="cart">Valider mon panier</button>
          ) : (
            <button>Valider mon panier</button>
          )}

          {items != undefined &&
            items != null &&
            items.length > 0 &&
            items.map((meal, index) => (
              <div className="item" key={`${meal.id}-${index}`}>
                <button className="bouttonpanier" onClick={() => {}}>
                  -
                </button>
                <span>{meal.quantity}</span>
                <button className="bouttonpanier">+</button>
                <div>{meal.title}</div>
                <div>{meal.price}€</div>
              </div>
            ))}

          {(items === undefined || items === null || items.length === 0) && (
            <span style={{ margin: "40px", color: "#868a8a" }}>
              Votre panier est vide
            </span>
          )}

          <div></div>
        </div>
      </div>
    </>
  );
};

export default Panier;
