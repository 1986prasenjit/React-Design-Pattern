import useAPI from "../customHooks/useAPI";

const Products = () => {
  const [products] = useAPI("https://jsonplaceholder.typicode.com/posts");

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-2.5 px-10 py-2 w-fit">
        <ul>
          {
            products?.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))
          }
        </ul>
      </div>
    </>
  );
};

export default Products;
