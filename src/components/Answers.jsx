import { useState, useContext } from "react";
import { QuestionsContext } from "../store/QuestionsContext";

export default function Answers() {
  const { currentQuestion, onUpdateUserResponses } =
    useContext(QuestionsContext);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const { answers } = currentQuestion;

  function handleAnswerSelect(qId, answer, index) {
    setSelectedAnswer(index);
    onUpdateUserResponses(qId, answer);
  }

  return (
    <>
      <div id='answers'>
        {answers.map((answer, index) => (
          <span className='answer' key={index}>
            <button
              className={selectedAnswer === index ? "selected" : null}
              onClick={() =>
                handleAnswerSelect(currentQuestion.id, answer, index)
              }
            >
              {answer}
            </button>
          </span>
        ))}
      </div>
      <div id='skip-action'>
        <button>Skip</button>
      </div>
    </>
  );
}
