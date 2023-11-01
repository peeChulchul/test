import React from "react";

export default function Card({ bgColor }) {
  return (
    <div
      onClick={(e) => console.log((e.currentTarget.style.transform = ""))}
      style={{
        width: "100%",
        height: "100px",
        position: "relative",
        transformStyle: "preserve-3d",
        transform: "rotateY(180deg)",
        transition: "all 0.5s linear"
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "black",
          height: "100%",
          width: "100%",
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)"
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          backgroundColor: bgColor,
          height: "100%",
          width: "100%",
          backfaceVisibility: "hidden"
        }}
      ></div>
    </div>
  );
}
