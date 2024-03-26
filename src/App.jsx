import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Pic from "./assets/imgs/images/logo-teal.svg";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
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
      <Content data={data} />
    </>
  );
}

export default App;
