import React from 'react'
import { createPortal } from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'

const Modal = ({ onClose, isOpen, children }) => {
    return createPortal(
        <>
            {isOpen && (
                <div className="absolute top-0 z-40 grid h-screen w-screen place-items-center backdrop-blur">
                    <div className="relative z-50 m-auto min-h-[200px] min-w-[60%] bg-white p-4">
                        <div className="flex justify-end">
                            <AiOutlineClose
                                onClick={onClose}
                                className="cursor-pointer self-end text-2xl"
                            />
                        </div>
                        {children}
                    </div>
                </div>
            )}
        </>,
        document.getElementById('modal-root')
    )
}

export default Modal
