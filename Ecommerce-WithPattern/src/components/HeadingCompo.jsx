const HeadingCompo = ({ title }) => {
  return (
    <>
      <section className="px-10 py-4 mt-10">
        <h2 className="border-pink-500 border-b-6 w-fit text-2xl tracking-widest italic lg:text-4xl font-semibold font-serif">{title}</h2>
      </section>
    </>
  );
};

export default HeadingCompo;
