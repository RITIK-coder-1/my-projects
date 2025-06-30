import "./App.css";
import { Home, Header, Footer } from "./components";

function App() {
  return (
    <div className="h-full w-full flex flex-col justify-between">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
