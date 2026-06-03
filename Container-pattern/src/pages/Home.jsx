import React from "react";
import Cards from "../components/Cards";

const Home = () => {
  const [products, setProducts] = React.useState([]);

  const URL = "https://dummyjson.com/products";

  React.useEffect(() => {
    async function callAPI() {
      try {
        const data = await fetch(URL);

        const response = await data.json();

        setProducts(response.products);
      } catch (error) {
        console.error(
          `Something went wrong while fetching the API data ${error}`,
        );
      }
    }
    callAPI();
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {
        products && products.map((item)=> (
            <Cards key={item.id} {...item}  />
        ))
      }
    </div>
  );
};

export default Home;
