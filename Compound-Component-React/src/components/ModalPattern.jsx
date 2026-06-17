const ModalPattern = ({ children }) => {
  return (
    <>
      <section className="flex flex-col item-center justify-center gap-4 w-1/2 border-2 border-black p-6 m-auto">
        {children}
      </section>
    </>
  );
};

function ModalTitle({ children }) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">{children}</h1>
    </div>
  );
}

function ModalText({ children }) {
  return (
    <div>
      <p className="text-center">{children}</p>
    </div>
  );
}

function ModalButton({ children }) {
  return (
    <div>
      <button className="border-2 border-black px-4 py-2 w-75 rounded-md bg-rose-500 text-white">
        {children}
      </button>
    </div>
  );
}

ModalPattern.Title = ModalTitle;
ModalPattern.Text = ModalText;
ModalPattern.Button = ModalButton;

export default ModalPattern;
