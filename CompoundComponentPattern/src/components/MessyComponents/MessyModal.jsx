const MessyModal = ({ title, description, buttonTitle, buttonTitleTwo,buttonTitleTwo }) => {
  return (
    <div className="border-2 border-black p-6 flex flex-col gap-4 w-1/3 rounded-md bg-amber-400">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="flex gap-4">
        <button className="border-2 border-black px-4 py-2 w-75 rounded-md bg-rose-500 text-white">
          {buttonTitle}
        </button>
        <button className="border-2 border-black px-4 py-2 w-75 rounded-md bg-rose-500 text-white">
          {buttonTitleTwo}
        </button>
      </div>
    </div>
  );
};

export default MessyModal;
