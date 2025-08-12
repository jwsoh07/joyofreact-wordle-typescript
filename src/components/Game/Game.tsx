import { AnswerContext } from "../../context/Contexts";
import { type Word } from "../../data";
import Banner from "./Banner";
import GuessInput from "./GuessInput";
import GuessResults from "./GuessResults";
import { useContext, useState } from "react";


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

    const answer = useContext(AnswerContext);

    const hasWon = guesses.length <= 6 && guesses.includes(answer);
    const hasLost = guesses.length >= 6 && !hasWon;

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput newGuess={newGuess} onGuessChange={handleGuessChange} handleNewGuess={handleNewGuess} />

      {hasWon && (
        <Banner type="happy">
          <strong>Congratulations!</strong> 
            {" "} Got it in {" "}
          <strong>
            {guesses.length} guess{guesses.length === 1 ? '' : 'es'}
          </strong>.
          <button className="restart-btn">Play Again</button>
        </Banner>
      )}

      {hasLost && (
        <Banner type="sad">
          <strong>Sorry, the correct answer was <strong>{answer}</strong>.</strong>
          <button className="restart-btn">Play Again</button>
        </Banner>
      )}
    </>
  );
}