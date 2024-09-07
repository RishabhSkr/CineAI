const Modal = ({ children, onClose }) => {
  // console.log(children)
    return (
      <div className="z-20 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-black p-4 rounded-lg max-w-md w-full relative">
          <button
            className="absolute top-0 right-0 p-2 text-white"
            onClick={onClose}
          >
            X
          </button>
          {children} {/* Render the content passed to the modal */}
        </div>
      </div>
    );
  };
  
  export default Modal;
  