import React, { useEffect, useState } from 'react'
import ProductCard from '../components/Cards';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function callAPI(){
      let data = await fetch("https://dummyjson.com/products");
      let respons = await data.json();
      setData(respons.products);
      // console.log(data);
      
    }
    callAPI()
  },[])
// console.log(data);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-2.5'>
      {data?.filter((item)=> item.rating > 4.6).map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  )
}

export default Home