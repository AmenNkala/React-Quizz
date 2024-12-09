import logo from "../assets/quiz-logo.png";
export default function Header() {
  return (
    <header>
      <img src={logo} alt='notepad' />
      <h1>React Quizz</h1>
    </header>
  );
}
