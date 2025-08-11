import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import type { Word } from "../../data";
import { range } from "../../utils";

interface LetterProps {
  letter: string;
}

interface GuessProps {
  word: Word;
} 

interface GuessResultsProps {
  guesses: Word[];
}

function Letter ({ letter }: LetterProps) {
  return (
    <span className="cell">{letter}</span>
  );
} 

function Guess( { word }: GuessProps) {
  const renderedWord = word || "     ";
  return (
    <p className="guess">
      {renderedWord.split("").map((letter, index) => <Letter key={index} letter={letter} />)}
    </p>
  );
}

export default function GuessResults({ guesses }: GuessResultsProps) {
  return (
      <div className="guess-results">
        {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => (
          <Guess key={index} word={guesses[index]} />
        ))}
      </div>
  );
}