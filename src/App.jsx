import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Pic from "./assets/imgs/images/logo-teal.svg";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3200/");
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <>
      <Header
        logo={Pic}
        text={data.restaurant.name}
        src={data.restaurant.picture}
        p={data.restaurant.description}
      />

      <div>
        {/* {data.map((elem, index) => {
          return <h2 key={index}>{elem.categories}</h2>;
        })} */}
        {console.log(data)}
      </div>
    </>
  );
}

export default App;
