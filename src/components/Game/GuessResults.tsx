import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import type { Word } from "../../data";
import { range } from "../../utils";

interface CellProps {
  letter: string;
}

interface GuessProps {
  word: Word;
} 

interface GuessResultsProps {
  guesses: Word[];
}

function Cell ({ letter }: CellProps) {
  return (
    <span className="cell">{letter}</span>
  );
} 

function EmptyCells() {
    return (
      <p className="guess">
        {range(0, 5).map((index) => <Cell key={index} letter=" " />)}
      </p>
    );
}

function WordInCells({ word }: { word: Word }) {
  return (
    <p className="guess">
      {word.split("").map((letter, index) => <Cell key={index} letter={letter} />)}
    </p>
  );
}

function Guess( { word }: GuessProps) {
  return word ? <WordInCells word={word} /> : <EmptyCells />;
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