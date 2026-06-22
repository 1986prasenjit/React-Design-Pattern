import HeroSection from "../components/HeroSection"
import Card from "../components/Card";

const Product = ({product}) => {
  return (
    <>
      <HeroSection />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-5 px-10">
        {
        product && product.map((item)=> (
            <Card key={item.id} {...item}  />
        ))
      }
      </div>
    </>
  )
}

export default Product