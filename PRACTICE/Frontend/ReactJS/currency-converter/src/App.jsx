import { useState } from "react";
import { Input } from "./components";
import useCurrency from "./hooks/useCurrency";

function App() {
  const data = useCurrency(); // getting the retrieved data
  let dataArray = []; // this array will store the currency value and I'll loop through it to display them

  for (const property in data) {
    dataArray.push(property); // looping through the data object and pushing each property to the array
  }

  for (const property in data) {
    console.log("values: ", data[property]["value"]); // looping through the data object and pushing each property to the array
  }

  console.log("data array: ", dataArray); // for debbuging purposes
  console.log("data: ", data);

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const convertedAmount = amount + 2;

  return (
    <>
      <div className="w-full h-full p-5 backdrop-blur-xs">
        <h1 className="text-white text-center text-5xl font-bold mb-5">
          Currency Converter
        </h1>
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <Input
            dataArray={dataArray}
            amount={amount}
            label="From"
            selectCurrency={from}
            onAmountChange={setAmount}
            onCurrencyChange={setFrom}
          />
          <Input
            dataArray={dataArray}
            amount={convertedAmount}
            label="To"
            isReadOnly={true}
            selectCurrency={to}
            onCurrencyChange={setTo}
          />
          <button className="bg-blue-700 p-2 rounded-xl w-72 font-bold cursor-pointer">
            Convert
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
