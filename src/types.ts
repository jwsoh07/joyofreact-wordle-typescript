export type LetterStatus = 'correct' | 'misplaced' | 'incorrect';

export type GuessResult = {
    letter: string;
    status: LetterStatus;
}[];

