import React from "react";

const Modal = ({ onClose, title, isOpen, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0  bg-opacity-75 flex items-center justify-center p-4 z-50 overflow-y-auto">
      {/* Modal Overlay: fixed position, covers whole screen, semi-transparent black background, high z-index */}
      <div
        className="fixed inset-0 opacity-50"
        onClick={onClose} // Allows clicking outside to close the modal
      ></div>

      {/* Modal Content Wrapper: centers the modal, adds padding to ensure space */}
      <div className="relative bg-[#e9edf6]  rounded-lg shadow-xl p-6 md:p-8 max-w-md w-full mx-auto z-50 transform transition-all duration-300 scale-100 opacity-100">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">
            {title || "Modal Title"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-3xl leading-none font-semibold focus:outline-none"
            aria-label="Close modal"
          >
            &times; {/* HTML entity for a multiplication sign (X) */}
          </button>
        </div>

        {/* Modal Body: where your custom content will go */}
        <div className=" mb-6">{children}</div>

        {/* Optional: Modal Footer for actions, e.g., "Confirm", "Cancel" */}
        {/* <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Confirm
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Modal;
