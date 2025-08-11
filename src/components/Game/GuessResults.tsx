import type { Word } from "../../data";

interface GuessResultsProps {
  guesses: Word[];
}

export default function GuessResults({ guesses }: GuessResultsProps) {
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => (
        <p className="guess" key={index}>
          {guess}
        </p>
      ))}
    </div>
  );
}