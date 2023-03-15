import { useState, useEffect } from "react";

import { Grid } from "@mui/material/";

import { MyCard } from "../MyCard";

import { deportes } from "../../const/imagenes";
import { faces } from "../../const/emojis";

export const Tablero = () => {
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState({});
  const [secondCard, setSecondCard] = useState({});
  const [unflippedCards, setUnflippedCards] = useState([]); //arreglo de cartas que vuelve a su estado normal
  const [disabledCards, setDisabledCards] = useState([]); //arreglo de cartas macheadas

  //estado glogal
  const [Attempt, setAttempt] = useState(0); //intento
  const [success, setSuccess] = useState(0); //intento

  useEffect(() => {
    // AleatoryCards(deportes);
    console.log(Attempt, "intento");
    console.log(success, "acierto");
  }, [Attempt, success]);

  useEffect(() => {
    const emojisFaces = [...faces, ...faces];
    // AleatoryCards(deportes);
    setCards(emojisFaces);
  }, []);

  useEffect(() => {
    checkForMatch();
  }, [secondCard]);

  const AleatoryCards = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  const flipCard = (name, number) => {
    if (firstCard.name === name && firstCard.number === number) {
      console.log(firstCard, secondCard);
      return 0; //para no voltear la misma carta!
    }

    if (!firstCard.name) {
      setFirstCard({ name, number });
    } else if (!secondCard.name) {
      setSecondCard({ name, number });
    }

    return 1;
  };

  const checkForMatch = () => {
    if (firstCard.name && secondCard.name) {
      const match = firstCard.name === secondCard.name;
      match ? disableCards() : unflipCards();
    }
  };

  const disableCards = () => {
    setDisabledCards([firstCard.number, secondCard.number]);
    setSuccess(success + 1);
    resetCards();
  };

  // cartas que se van a voltear
  const unflipCards = () => {
    setUnflippedCards([firstCard.number, secondCard.number]);
    setAttempt(Attempt + 1);
    resetCards();
  };

  const resetCards = () => {
    setFirstCard({});
    setSecondCard({});
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={{ xs: 2, md: 2 }}
      // columns={{ xs: 2, sm: 12, md: 8 }}
    >
      {cards.map((dato, index) => (
        <Grid item xs={8} sm={6} md={4} lg={3} key={index}>
          <MyCard
            name={dato.name}
            number={index}
            frontFace={dato.symbol}
            flipCard={flipCard}
            unflippedCards={unflippedCards}
            disabledCards={disabledCards}
          />
        </Grid>
      ))}
    </Grid>
  );
};
