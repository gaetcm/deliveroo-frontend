import "./Content.css";
import Panier from "../Panier/Panier";

const Content = ({ data }) => {
  return (
    <main>
      <div className="container">
        <div className="content">
          {data.categories.splice(5, 6)}
          {data.categories.map((elem, index) => {
            return (
              <>
                <h2 key={index}>{elem.name}</h2>

                <div className="recette1">
                  {elem.meals.map((e, i) => {
                    return (
                      <>
                        <div className="recette2">
                          <div className="recettetext" key={i}>
                            <h3>{e.title}</h3>
                            <p>{e.description}</p>
                            <span>{e.price}</span>
                            <span>{e.popular}</span>
                          </div>
                          <img src={e.picture} />
                        </div>
                      </>
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
        <div className="panier">
          <Panier />
        </div>
      </div>
    </main>
  );
};

export default Content;
