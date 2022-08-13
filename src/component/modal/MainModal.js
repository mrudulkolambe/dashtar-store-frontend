import React, { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { IoClose } from 'react-icons/io5';

const MainModal = ({ modalOpen, setModalOpen, children }) => {
  const cancelButtonRef = useRef();

  return (
    <>
      <Transition appear show={modalOpen} as={Fragment}>
        <Dialog
          as="div"
          className={modalOpen ? "fixed inset-0 z-30 overflow-y-auto text-center" : "hidden"}
          onClose={() => setModalOpen(false)}
          initialFocus={cancelButtonRef}
        >
          <div className={modalOpen ? "min-h-screen px-4" : "hidden"}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className={modalOpen ? "duration-200 fixed inset-0 bg-black opacity-60" : "duration-200 fixed inset-0 bg-black opacity-0 pointer-events-none"} />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {children}
            </Transition.Child>
            <div className="absolute right-5 top-5">
              <button
                onClick={() => setModalOpen(false)}
                type="button"
                className={modalOpen ? "inline-flex justify-center px-2 py-2 text-base font-medium text-red-500 bg-white border border-transparent rounded-full hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500": 'hidden'}
              >
                <IoClose />
              </button>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default React.memo(MainModal);
