import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function useLocalStorage() {
  const count = useSelector((state) => state.counter.value);
  const [countState, setCountState] = useState(
    localStorage.getItem("count") || 0
  );

  useEffect(() => {
    localStorage.setItem("count", countState);
    setCountState((countState) => (countState = count));
  }, [count, countState]);
}

export default useLocalStorage;
