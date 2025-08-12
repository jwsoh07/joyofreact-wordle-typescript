import { createContext } from "react";
import { WORDS } from "../data";
import { sample } from "../utils";

export const AnswerContext = createContext(sample(WORDS));

