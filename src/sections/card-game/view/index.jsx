import React, { useState } from "react";
import Card from "../card";

export default function CardGame() {
  const [select, setSelect] = useState({ prevTarget: null, target: null });

  //
  const colors = ["#00A19D", "#FF6F61", "#87CEEB", "#FFDB58", "#E6E6FA", "#000080"];
  const cardColors = colors.concat(colors);

  const shuffledCards = suffle(cardColors);

  console.log(shuffledCards);
  function suffle(array) {
    let shuffledArray = [];

    for (let i = 0; 0 < array.length; i++) {
      const randomIndex = Math.floor(Math.random() * array.length);

      shuffledArray = shuffledArray.concat(array.splice(randomIndex, 1));
    }

    return shuffledArray;
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px" }}>
      {shuffledCards.map((color, index) => {
        return <Card key={index} bgColor={color} />;
      })}
    </div>
  );
}
