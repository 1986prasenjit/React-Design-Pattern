import ProductCard from "../components/Card";
import HeadingCompo from "../components/HeadingCompo"
import Hero from "../components/HeroSection"
import { useEffect, useState } from "react"

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function callAPI(){
      let data = await fetch("https://dummyjson.com/products");
      let respons = await data.json();
      setProducts(respons.products);
      // console.log(data);
      
    }
    callAPI()
  },[])
  return (
    <>
      <Hero />
      <HeadingCompo title="New Arrivals" />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-2.5 px-10 py-2'>
        {products?.slice(0, 4).map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
      <HeadingCompo title="Latest Deals" />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-2.5 px-10 py-2'>
        {products?.slice(10, 15).map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </>
  )
}

export default Home