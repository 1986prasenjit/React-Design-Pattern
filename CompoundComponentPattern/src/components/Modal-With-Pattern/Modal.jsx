

const Modal = ({children}) => {
  return (
    <div className="border-2 border-black p-6 flex flex-col gap-10 w-1/3 rounded-md bg-amber-400">
        {children}
    </div>
  )
}

function ModalTitle({children}) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">{children}</h1>
    </div>
  )
}

function ModalDescription({children}) {
  return (
    <div className="flex gap-4 items-center justify-center">
      {children}
    </div>
  )
}

function ModalFooter({children}) {
  return (
    <div className="flex gap-4">
      {children}
    </div>
  )
}

Modal.Header = ModalTitle
Modal.Description = ModalDescription
Modal.Footer = ModalFooter

export default Modal