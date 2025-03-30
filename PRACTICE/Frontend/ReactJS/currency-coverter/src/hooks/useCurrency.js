import { useEffect, useState } from "react";

function useCurrency(currency) {
  // the currency URL
  let url =
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_n95l3qfyxmz0n8TE6vYIbUgSlEuiWairf3BCydyg";

  // the currency to display
  let currency = "INR";

  // fetching API
  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        console.log(data["data"][currency]);
      });
  }, [url, currency]);
}

export default useCurrency;
