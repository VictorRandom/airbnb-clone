import React from "react";
import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./components/data";

function App() {
  const cardInfo = data.map((card) => {
    // console.log(card);
    return (
      <Card
        img={card.coverImg}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        location={card.location}
        title={card.title}
        price={card.price}
      />
    );
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      {cardInfo}
    </div>
  );
}

export default App;
