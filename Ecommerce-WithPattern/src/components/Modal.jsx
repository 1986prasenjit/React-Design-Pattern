import { createPortal } from "react-dom";

const Modal = ({ onClose }) => {
  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
    >
      <button
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl animate-[popup_.4s_ease]"
      >
        <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-pink-400/30 blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-purple-400/30 blur-3xl"></div>

        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-pink-500 hover:text-white transition duration-300"
        >
          ✕
        </button>

        <div className="relative z-10 p-8 text-center">
          <div className="mb-4 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-r from-pink-500 to-purple-500 text-4xl shadow-lg animate-bounce">
            🛍️
          </div>

          <h2 className="text-3xl font-extrabold text-gray-800 mb-3">
            Added To Cart
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Your product has been successfully added to the cart. Continue
            shopping or proceed to checkout.
          </p>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={onClose}
              className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100 transition duration-300"
            >
              Continue
            </button>

            <button className="rounded-xl bg-linear-to-r from-pink-500 to-purple-500 px-6 py-3 font-semibold text-white shadow-lg hover:scale-105 transition duration-300">
              Checkout
            </button>
          </div>
        </div>
      </button>
    </div>,
    document.body
  );
};

export default Modal;