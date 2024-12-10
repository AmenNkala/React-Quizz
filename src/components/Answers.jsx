import { useState, useContext } from "react";
import { QuestionsContext } from "../store/QuestionsContext";

export default function Answers() {
  const { id, answers } = useContext(QuestionsContext);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  function handleAnswerSelect(qId, answer, index) {
    setSelectedAnswer(index);
  }

  return (
    <>
      <div id='answers'>
        {answers.map((answer, index) => (
          <span className='answer' key={index}>
            <button
              className={selectedAnswer === index ? "selected" : null}
              onClick={() => handleAnswerSelect(id, answer, index)}
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
