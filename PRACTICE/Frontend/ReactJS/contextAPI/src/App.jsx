import "./App.css";
import Login from "./components/Login";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>Context API</h1>
      <Login />
    </UserContextProvider>
  );
}

export default App;
