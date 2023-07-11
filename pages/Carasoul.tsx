"use client";
import { useEffect, useState } from "react";
import { cards } from '../constants'
import "../styles/carasoul.css"

function Carousel() {
  const [index, setIndex] = useState(0);

  const mod = (n: number, m: number): number => {
    let result = n % m;

    // Return a positive value
    return result >= 0 ? result : result + m;
  };

  

  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % cards.length);
      console.log(index);
    }, 3000);
  }, [index, cards.length]);

  return (
    <div className="App">
      <div className="carousel">
        {cards.map((item, i) => {
          const indexLeft = mod(index - 1, cards.length);
          const indexRight = mod(index + 1, cards.length);

          let className = "card";

          if (i === index) {
            className = "card card--active";
          } else if (i === indexRight) {
            className = "card card--right";
          } else if (i === indexLeft) {
            className = "card card--left";
          } else className = "card";

          return (
            <img
              key={item.id}
              className={className}
              src={item.image}
              alt="Comic"
            ></img>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;