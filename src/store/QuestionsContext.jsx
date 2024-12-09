import { createContext, useEffect, useReducer, useState } from "react";
import QUESTIONS from "../questions";

export const QUESTION_TIMER = 10000;
const correctAnswers = [
  {
    qId: "q1",
    answer: "A library to build user interfaces with help of declarative code.",
  },
  {
    qId: "q2",
    answer:
      "Enabling the use of state and other React features in functional components.",
  },
  {
    qId: "q3",
    answer: "A JavaScript extension that adds HTML-like syntax to JavaScript.",
  },
  {
    qId: "q4",
    answer:
      "By defining a JavaScript function that returns a renderable value.",
  },
  {
    qId: "q5",
    answer:
      "An object in a component that holds values and may cause the component to render on change.",
  },
  {
    qId: "q6",
    answer:
      "By using the map() method to iterate over an array of data and returning JSX.",
  },
  { qId: "q7", answer: "Using a the #if template syntax." },
];

export const QuestionsContext = createContext({
  questions: [],
  userResponses: [],
  currentQuestion: {},
  report: {},
  onUpdateUserResponses: () => {},
  onCreateUserReport: () => {},
});

function questionsReducer(state, action) {
  switch (action.type) {
    case "UPDATE_RESPONSES":
      const report = correctAnswers.reduce((acc, curr) => {
        const userResponse = state.userResponses.find(
          (r) => r.qId === curr.qId
        );
        return {
          ...acc,
          [curr.qId]:
            userResponse?.answer === curr.answer ? "Correct" : "Wrong",
        };
      }, {});

      return {
        ...state,
        userResponses: [...state.userResponses, action.response],
      };
    /* case "CREATE_USER_REPORT":
      const report = correctAnswers.reduce((acc, curr) => {
        const userResponse = state.userResponses.find(
          (r) => r.qId === curr.qId
        );
        return {
          ...acc,
          [curr.qId]:
            userResponse?.answer === curr.answer ? "Correct" : "Wrong",
        };
      }, {});
      return {
        ...state,
        report,
      }; */
    case "RESET_USER_RESPONSES":
    default:
      return state;
  }
}
export default function QuestionsContextProvider({ children }) {
  const [state, dispatch] = useReducer(questionsReducer, {});
  const [currentQuestionId, setCurrentQuestion] = useState(0);

  const questionsCtx = {
    questions: [...QUESTIONS],
  };

  return (
    <QuestionsContext.Provider value={questionsCtx}>
      {children}
    </QuestionsContext.Provider>
  );
}
