import useCurrency from "../hooks/useCurrency";

function Input({
  dataArray = [],
  amount,
  onAmountChange,
  onCurrencyChange,
  selectCurrency = "USD",
  amountDisable = false,
  currencyDisable = false,
}) {
  return (
    <div className="w-3xl h-36 bg-white p-3 rounded-xl flex justify-between">
      <div className="flex flex-col justify-center h-full gap-6">
        <label className="text-gray-500 font-bold text-xl">From</label>
        <input
          type="text"
          className="w-10 outline-none font-bold text-xl"
          defaultValue="0"
        />
      </div>
      <div className="flex flex-col justify-center h-full gap-6 items-end">
        <label className="text-gray-500 font-bold text-xl">Currency Type</label>
        <select className="w-30 outline-none font-thin text-md font-bold p-3 rounded-md bg-gray-100">
          {dataArray.map((ele) => {
            return (
              <option key={ele} value={ele}>
                {ele}
              </option>
            ); // we looped through the array and displayed each currency as an option
          })}
        </select>
      </div>
    </div>
  );
}

export default Input;
