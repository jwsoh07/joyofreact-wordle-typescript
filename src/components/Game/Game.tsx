import { sample } from "../../utils";
import { WORDS, type Word } from "../../data";
import GuessInput from "./GuessInput";
import GuessResults from "./GuessResults";
import { useState } from "react";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

export default function Game() {
    const [newGuess, setNewGuess] = useState<Word>("");
    const [guesses, setGuesses] = useState<Word[]>([]);

    const handleGuessChange = (newGuess: Word) => {
        setNewGuess(newGuess);
    };

    const handleNewGuess = (guess: Word) => {
        if (guess.length === 5) {
            setGuesses((prevGuesses) => [...prevGuesses, guess]);
            setNewGuess("");
        } 
    };

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput newGuess={newGuess} onGuessChange={handleGuessChange} handleNewGuess={handleNewGuess} />
    </>
  );
}