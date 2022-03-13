import Star from "components/Star";
import React from "react";

import './style.css'

// EX:
// getFills(3.5) => [1, 1, 1, 0.5, 0]
// getFills(4.1) => [1, 1, 1, 1, 0.5]
function getFills(score: number) {

  const fills = [0, 0, 0, 0, 0];

  const integerPart = Math.floor(score);

  for (let i = 0; i < integerPart; i++) {
    fills[i] = 1;
  }

  const diff = score - integerPart;
  if (diff > 0) {
    fills[integerPart] = 0.5;
  }

  return fills;
}

type Props = {
  score: number
}

const MovieStars = ({ score }: Props) => {

  const fills = getFills(score)
  return (
    <div className="dsmovie-stars-container">
      {fills.map((item, index) => (<Star fill={item} key={index}/>))}
    </div>
  );
};

export default MovieStars;
