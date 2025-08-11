export default function GuessInput() {
  return (
    <form className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        pattern="[a-zA-Z]{5}"
        required
        minLength={5}
        maxLength={5}
      />
    </form>
  );
}