import { useEffect, useState, useContext } from "react";
import Answers from "./Answers";
import QuestionOverview from "./QuestionOverview";

import { QuestionsContext } from "../store/QuestionsContext";

export default function Quizz() {
  return (
    <div id='quiz'>
      <QuestionOverview />
      <Answers />
    </div>
  );
}
