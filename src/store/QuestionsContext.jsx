import { createContext, useEffect, useReducer, useState } from "react";
import { mergedQuestions } from "../questions";
export const QUESTION_TIMER = 10000;

const initialState = mergedQuestions.map((question) => {
  return {
    ...question,
    questionAnswered: "no",
    questionSkipped: "no",
    playerChosenAnswer: "",
    isPlayerAnswerCorrect: "no",
  };
});

export const QuestionsContext = createContext({
  id: "",
  text: "",
  answers: [],
  correctAnswer: "",
  questionAnswered: "",
  questionSkipped: "",
  playerChosenAnswer: "",
  isPlayerAnswerCorrect: "",
});

function questionsReducer(state, action) {
  switch (action.type) {
    case "":
    default:
      return state;
  }
}
export default function QuestionsContextProvider({ children }) {
  const [state, dispatch] = useReducer(questionsReducer, initialState);
  const [currentQuestionId, setCurrentQuestion] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuestion((prev) => (prev < state.length - 1 ? prev + 1 : 0));
    }, QUESTION_TIMER);

    return () => clearInterval(interval);
  }, [state]);



  const questionsCtx = {
    id: currentQuestionId,
    text: state[currentQuestionId].text,
    answers: state[currentQuestionId].answers,
    correctAnswer: state[currentQuestionId].correctAnswer,
    questionAnswered: state[currentQuestionId].questionAnswered,
    questionSkipped: state[currentQuestionId].questionSkipped,
    playerChosenAnswer: state[currentQuestionId].playerChosenAnswer,
    isPlayerAnswerCorrect: state[currentQuestionId].isPlayerAnswerCorrect,
  };

  return (
    <QuestionsContext.Provider value={questionsCtx}>
      {children}
    </QuestionsContext.Provider>
  );
}
