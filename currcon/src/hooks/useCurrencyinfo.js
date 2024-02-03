import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_jcdVDFzT1Jl2iY7zs4H6KG7jk2kDCtEqipq66Pus`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      .catch((error) => console.error("Error fetching currency data:", error));
  }, [currency]);

 
  useEffect(() => {
    console.log("Updated data:", data);
  }, [data]);

 
  console.log("Initial data:", data);

  return data;
}

export default useCurrencyInfo;
