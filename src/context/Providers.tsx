import React from "react";
import { WORDS } from "../data";
import { sample } from "../utils";
import { AnswerContext } from "./Contexts";

export default function AnswerProvider({ children }: { children: React.ReactNode }) {
  const [answer, setAnswer] = React.useState(sample(WORDS));

    function resetAnswer() {
        setAnswer(sample(WORDS));
    }

  return (
    <AnswerContext value={{answer, resetAnswer}}>
      {children}
    </AnswerContext>
  );
} 