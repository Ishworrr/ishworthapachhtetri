import React from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { IoMdTrash } from 'react-icons/io'
import { RiEditCircleLine } from 'react-icons/ri'
import { db } from '../config/firebase'
import { deleteDoc, doc } from 'firebase/firestore'
import AnddandUpdateContact from './AnddandUpdateContact'
import useDisclouse from '../hooks/useDisclouse'
import { toast } from 'react-toastify'

const ContactCard = ({ contact }) => {
    const { isOpen, onClose, onOpen } = useDisclouse() //for hook-useDisclouse
    const deleteContact = async (id) => {
        try {
            await deleteDoc(doc(db, 'contacts', id))
            toast.success('Contact Deleted Successfully')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div
                key={contact.id}
                className="flex items-center justify-between rounded-xl bg-yellow p-4"
            >
                <div className="flex gap-4">
                    <HiOutlineUserCircle className="text-4xl text-orange" />
                    <div className="">
                        <h2 className="font-medium">{contact.name}</h2>
                        <p className="text-sm">{contact.email}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <RiEditCircleLine
                        onClick={onOpen}
                        className="cursor-pointer text-2xl"
                    />
                    <IoMdTrash
                        onClick={() => deleteContact(contact.id)}
                        className="cursor-pointer text-3xl text-orange"
                    />
                </div>
            </div>
            <AnddandUpdateContact
                contact={contact}
                isUpdate
                isOpen={isOpen}
                onClose={onClose}
            />
        </>
    )
}

export default ContactCard
