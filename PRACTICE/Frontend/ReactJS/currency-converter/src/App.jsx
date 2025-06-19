import Input from "./components/Input";
import useCurrency from "./hooks/useCurrency";

function App() {
  const data = useCurrency(); // getting the retrieved data
  let dataArray = []; // this array will store the currency value and I'll loop through it to display them

  for (const property in data) {
    dataArray.push(property); // looping through the data object and pushing each property to the array
  }
  return (
    <>
      <div className="w-full h-full p-5 backdrop-blur-xs">
        <h1 className="text-white text-center text-5xl font-bold mb-5">
          Currency Converter
        </h1>
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <Input dataArray={dataArray} />
          <Input dataArray={dataArray} />
          <button className="bg-blue-700 p-2 rounded-xl w-72 font-bold cursor-pointer">
            Convert
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
