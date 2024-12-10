import { useContext } from "react";
import ProgressBar from "./ProgressBar";
import { QuestionsContext, QUESTION_TIMER } from "../store/QuestionsContext";

export default function QuestionOverview() {
  const { text } = useContext(QuestionsContext);
  return (
    <div id='question-overview'>
      <div id='question'>
        <ProgressBar maxValue={QUESTION_TIMER} />
        <h2>{text}</h2>
      </div>
    </div>
  );
}
