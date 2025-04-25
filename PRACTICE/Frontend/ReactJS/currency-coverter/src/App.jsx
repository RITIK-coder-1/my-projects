import Input from "./components/Input";

function App() {
  return (
    <>
      <div className="w-full h-full p-5 backdrop-blur-xs">
        <h1 className="text-white text-center text-5xl font-bold mb-5">
          Currency Converter
        </h1>
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <Input />
          <Input />
        </div>
      </div>
    </>
  );
}

export default App;
