import React, { useEffect, useState } from "react";
import styles from "./card.module.css";
import { useThrottle } from "util/useTrhottle";
export default function Card({ bgColor, setSelect, foundColors }) {
  const isFound = foundColors.includes(bgColor);

  const onClickCard = useThrottle((e) => {
    const dom = e.currentTarget;
    dom.style.transform = "rotateY(360deg)";
    dom.style.cursor = "default";
    setSelect((prev) => {
      if (prev.prevTarget.dom === dom) {
        return prev;
      }
      if (prev.prevTarget.dom === null) {
        return { prevTarget: { bgColor, dom }, currentTarget: { ...prev.currentTarget } };
      }

      return { prevTarget: { ...prev.prevTarget }, currentTarget: { bgColor, dom } };
    });
  }, 1000);

  return (
    <div
      style={{ transform: `${isFound ? "rotateY(360deg)" : "rotateY(180deg)"}` }}
      onClick={isFound ? null : onClickCard}
      id={bgColor}
      className={`${styles.card}  `}
    >
      <div
        className={`${styles.card__inner} ${styles.card__back}`}
        style={{
          backgroundColor: "black",
          transform: "rotateY(180deg)"
        }}
      ></div>
      <div
        className={`${styles.card__inner} `}
        style={{
          backgroundColor: bgColor
        }}
      ></div>
    </div>
  );
}
