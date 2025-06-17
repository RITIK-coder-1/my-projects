import { useEffect, useState } from "react";

function useCurrency() {
  const [data, setData] = useState({});

  // fetching API
  useEffect(() => {
    fetch(
      "https://api.currencyapi.com/v3/latest?apikey=cur_live_n95l3qfyxmz0n8TE6vYIbUgSlEuiWairf3BCydyg"
    )
      .then((API) => API.json())
      .then((API) => {
        setData(API["data"]); // because this data has two nested objects: data and meta. We're retrieving API["data"])
        console.log(API); // for debugging purposes
      })
      .catch((err) => {
        console.log("API could not be fetched: ", err);
      });
  }, []);

  return data;
}

export default useCurrency;
