import { useState, useEffect } from "react";
import { Input } from "./components";
import useCurrency from "./hooks/useCurrency";

function App() {
  const data = useCurrency(); // getting the retrieved data
  let dataArray = []; // this array will store the currency value and I'll loop through it to display them

  for (const property in data) {
    dataArray.push(property); // looping through the data object and pushing each property to the array
  }

  console.log("data array: ", dataArray); // for debbuging purposes
  console.log("data: ", data);

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    for (const property in data) {
      let value = data[property]["value"];

      // let toValue;
      // if (property === to) {
      //   toValue = data[property]["value"];
      // }

      // let fromValue;
      // if (property === from) {
      //   fromValue = data[property]["value"];
      // }

      // if (from === "USD" && to === property) {
      //   setConvertedAmount((amount * value).toFixed(2));
      // } else if (from !== "USD" && to === property) {
      //   setConvertedAmount((amount * (fromValue / toValue)).toFixed(2));
      // }

      if (to === property) {
        setConvertedAmount((amount * value).toFixed(2));
      }
    }
  }, [amount, from, to]);

  console.log(from);

  return (
    <>
      <div className="w-full h-full p-5 backdrop-blur-xs">
        <h1 className="text-white text-center text-5xl font-bold mb-5">
          Currency Converter
        </h1>
        <div className="w-full flex flex-col justify-start items-center gap-20 mt-10">
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
        </div>
      </div>
    </>
  );
}

export default App;
