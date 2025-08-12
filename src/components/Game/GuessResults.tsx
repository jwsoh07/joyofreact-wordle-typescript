import { useContext } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import type { Word } from "../../data";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";
import { AnswerContext } from "../../context/Contexts";

interface CellProps {
  letter: string;
  status?: 'correct' | 'misplaced' | 'incorrect';
}

interface GuessResultProps {
  word: Word;
} 

interface GuessResultsProps {
  guesses: Word[];
}

function Cell ({ letter, status }: CellProps) {
  const className = "cell" + (status ? ` ${status}` : '');

  return (
    <span className={className}>{letter}</span>
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
  const { answer } = useContext(AnswerContext);
  const result = checkGuess(word, answer);

  return (
    <p className="guess">
      {result.map(({ letter, status }, index) => <Cell key={index} letter={letter} status={status} />)}
    </p>
  );
}

function GuessResult( { word }: GuessResultProps) {
  return word ? <WordInCells word={word} /> : <EmptyCells />;
}

export default function GuessResults({ guesses }: GuessResultsProps) {
  return (
      <div className="guess-results">
        {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => (
          <GuessResult key={index} word={guesses[index]} />
        ))}
      </div>
  );
}