import { createContext } from "react";
import { WORDS } from "../data";
import { sample } from "../utils";

type AnswerContextType = {
  answer: string;
  resetAnswer: () => void;
}

export const AnswerContext = createContext<AnswerContextType>({answer: sample(WORDS), resetAnswer: () => {}});


