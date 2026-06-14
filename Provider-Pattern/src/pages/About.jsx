import Cards from "../components/Cards"
import {useContext } from "react"
import { ProductContext } from "../context/ProductContext";


const About = () => {
  const {product} = useContext(ProductContext);

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-2.5 px-10 py-2'>
        {product?.slice(0, 4).map((item) => (
          <Cards key={item.id} {...item} />
        ))}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-2.5 px-10 py-2'>
        {product?.slice(10, 15).map((item) => (
          <Cards key={item.id} {...item} />
        ))}
      </div>
    </>
  )
}

export default About;