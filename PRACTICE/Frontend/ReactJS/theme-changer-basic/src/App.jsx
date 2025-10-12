import "./App.css";
import Button from "./components/Button";
import Toggle from "./components/Toggle";
import Paragraph from "./components/Paragraph";

function App() {
  return (
    <>
      <Toggle />
      <h1 className="text-3xl dark:text-blue-300 duration-500">hey</h1>
      <Button />
      <Paragraph />
    </>
  );
}

export default App;
