import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

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
