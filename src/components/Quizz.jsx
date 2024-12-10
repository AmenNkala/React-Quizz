import Answers from "./Answers";
import QuestionOverview from "./QuestionOverview";

export default function Quizz() {
  return (
    <div id='quiz'>
      <QuestionOverview />
      <Answers />
    </div>
  );
}
