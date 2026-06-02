import Cards from '../components/Cards'
import useAPI from '../customHooks/useAPI'

const Home = () => {

    const [products] = useAPI("https://dummyjson.com/products");

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-2.5 px-10 py-2'>
        {products?.products?.map((item) => (
          <Cards key={item.id} {...item} />
        ))}
      </div>
    </>
  )
}

export default Home