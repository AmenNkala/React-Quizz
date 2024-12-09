import QuestionsContextProvider from "./store/QuestionsContext";

import Header from "./components/Header";
import Quizz from "./components/Quizz";

function App() {
  return (
    <QuestionsContextProvider>
      <Header />
      <Quizz />
    </QuestionsContextProvider>
  );
}

export default App;
