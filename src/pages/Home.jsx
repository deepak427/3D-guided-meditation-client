import React, { useState, useEffect } from "react";
import SceneContainer from "../components/SceneContainer/SceneContainer";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    axios
      .get("https://threed-meditation.onrender.com/api/getmodels")
      .then((response) => {
        setCardsData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      {cardsData.map((card, index) => (
        <SceneContainer
          key={index}
          imageUrl="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title={card.title}
          description={card.description}
          url={card.url}
        />
      ))}
    </div>
  );
};

export default Home;
