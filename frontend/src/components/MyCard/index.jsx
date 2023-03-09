import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import ReactCardFlip from "react-card-flip";
import backFace from "../../assets/images/pregunta.jpg";

import { Card, Box, CardContent, Typography } from "@mui/material/";

const Caja = styled(Card)`
  background-color: gris;
  height: 120px;
  min-width: 120px;
  cursor: pointer;
  &:hover {
    transform: scale(0.95);
  }
`;

const Img = styled("img")`
  height: 120px;
  width: 100%;
  min-width: 120px;
`;

export const MyCard = ({
  name,
  number,
  frontFace,
  flipCard,
  unflippedCards,
  disabledCards,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasEvent, setHasEvent] = useState(true);

  useEffect(() => {
    if (unflippedCards.includes(number)) {
      setTimeout(() => setIsFlipped(false), 1200);
      console.log("voltear");
    }
  }, [unflippedCards]);

  useEffect(() => {
    if (disabledCards.includes(number)) {
      setHasEvent(false);
    }
  }, [disabledCards]);

  const handleClick = (e) => {
    console.log(name, number);
    const value = flipCard(name, number);
    if (value !== 0) {
      setIsFlipped(!isFlipped);
      console.log("clickeando la otra");
    } else {
      console.log("clickeando la misma");
    }
  };

  return (
    <Caja>
      <ReactCardFlip isFlipped={isFlipped}>
        <Img
          src={backFace}
          alt="back-face"
          onClick={hasEvent ? handleClick : null}
        />
        <Img
          src={frontFace}
          alt="front-face"
          onClick={hasEvent ? handleClick : null}
        />
      </ReactCardFlip>
    </Caja>
  );
};
