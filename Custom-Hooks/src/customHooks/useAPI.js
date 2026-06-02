import { useState, useEffect } from "react";

function useAPI(url) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function callAPI() {
      try {
        let data = await fetch(url);
        let respons = await data.json();
        setProducts(respons);
        console.log(data);
      } catch (error) {
        console.log(`Something went wrong while fetching the data ${error}`);
      }
    }
    callAPI();
  }, [url]);
  return [products, setProducts];
}

export default useAPI;
