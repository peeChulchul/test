import React, { useCallback, useEffect, useState } from "react";
import Card from "../card";

export default function CardGame() {
  const [select, setSelect] = useState({
    prevTarget: { bgColor: null, dom: null },
    currentTarget: { bgColor: null, dom: null }
  });
  const [foundColors, setFoundColors] = useState([]);
  const [shuffledCards, setShuffledCards] = useState([]);
  //
  const colors = ["#00A19D", "#FF6F61", "#87CEEB", "#FFDB58", "#E6E6FA", "#000080"];
  const cardColors = colors.concat(colors);

  const resetSelect = useCallback(() => {
    const { prevTarget, currentTarget } = select;
    if (currentTarget.dom === null) return;

    if (prevTarget.bgColor === currentTarget.bgColor) {
      console.log(select);
      console.log("성공");
      // prevTarget.dom.style.transform = "rotateY(360deg)";
      // currentTarget.dom.style.transform = "rotateY(360deg)";

      setFoundColors((prev) => [...prev, currentTarget.bgColor]);

      setSelect({ prevTarget: { bgColor: null, dom: null }, currentTarget: { bgColor: null, dom: null } });
      return;
    } else {
      setSelect({ prevTarget: { bgColor: null, dom: null }, currentTarget: { bgColor: null, dom: null } });
      setTimeout(() => {
        currentTarget.dom.style.transform = "rotateY(180deg)";
        prevTarget.dom.style.transform = "rotateY(180deg)";
        prevTarget.dom.style.cursor = "pointer";
        currentTarget.dom.style.cursor = "pointer";
      }, 600);
    }
  }, [select]);

  useEffect(() => {
    resetSelect();
    if (foundColors.length === colors.length) {
      setTimeout(() => {
        startGame();
      }, 1000);
    }
  }, [select, resetSelect]);

  useEffect(() => {
    startGame();
  }, []);

  async function startGame() {
    setFoundColors([]);
    setShuffledCards(suffle(cardColors));
    setTimeout(() => {
      setFoundColors([...colors]);
      setTimeout(() => {
        setFoundColors([]);
      }, 1000);
    }, 1000);
  }

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
        return <Card key={index} bgColor={color} setSelect={setSelect} foundColors={foundColors} />;
      })}
    </div>
  );
}
