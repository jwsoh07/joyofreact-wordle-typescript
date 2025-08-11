interface GuessInputProps {
  newGuess: string;
  onGuessChange: (guess: string) => void;
  handleNewGuess: (guess: string) => void;
}

export default function GuessInput({ newGuess, onGuessChange, handleNewGuess }: GuessInputProps) {

    function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      if (newGuess.length === 5) handleNewGuess(newGuess);
    };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        required
        pattern="[a-zA-Z]{5}"
        minLength={5}
        maxLength={5}
        value={newGuess}
        onChange={(e) => onGuessChange(e.target.value.toUpperCase())}
      />
    </form>
  );
}