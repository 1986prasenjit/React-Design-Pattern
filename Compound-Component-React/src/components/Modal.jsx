const Modal = ({modalTitle, modalText, buttonTitleOne, buttonTitleTwo, buttonTitleThree}) => {
  return (
    <>
      <section className="w-full h-screen flex items-center justify-center">
        <section className="flex flex-col item-center justify-center gap-4 w-1/2 border-2 border-black p-6 m-auto">
          <h1>{modalTitle}</h1>
          <p>{modalText}</p>
          <div className="flex gap-4">
            <button className="border-2 border-black px-4 py-2 w-75 rounded-md bg-rose-500 text-white">
              {buttonTitleOne}  
            </button>
            <button className="border-2 border-black px-4 py-2 w-75 rounded-md bg-rose-500 text-white">
              {buttonTitleTwo}
            </button>
            <button className="border-2 border-black px-4 py-2 w-75 rounded-md bg-rose-500 text-white">
              {buttonTitleThree}
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default Modal;
