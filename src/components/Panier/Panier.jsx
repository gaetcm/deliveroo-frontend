import "./Panier.css";

const Panier = (props) => {
  return (
    <>
      <div className="contentpanier">
        <button>Valider mon panier</button>
        <span style={{ margin: "40px", color: "#868a8a" }}>
          Votre panier est vide
        </span>
      </div>
    </>
  );
};

export default Panier;
