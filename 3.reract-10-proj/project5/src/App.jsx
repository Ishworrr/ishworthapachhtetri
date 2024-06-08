import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { FiSearch } from 'react-icons/fi'
import { AiFillPlusCircle } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import { HiOutlineUserCircle } from 'react-icons/hi'
// import { IoMdTrash } from 'react-icons/io'
// import { RiEditCircleLine } from 'react-icons/ri'
import { collection, getDocs, onSnapshot } from 'firebase/firestore'

import { db } from './config/firebase'
import ContactCard from './components/ContactCard'
import Modal from './components/Modal'
import AnddandUpdateContact from './components/AnddandUpdateContact'
import useDisclouse from './hooks/useDisclouse'
import NotFoundContact from './components/NotFoundContact'

const App = () => {
    const [contacts, setContacts] = useState([])

    const { isOpen, onClose, onOpen } = useDisclouse() //for hook-useDisclouse
    useEffect(() => {
        const getContacts = async () => {
            try {
                const contactCollection = collection(db, 'contacts')
                // const contactShots = await getDocs(contactCollection)

                onSnapshot(contactCollection, (snapshot) => {
                    //const contactList = contactShots.docs.map((doc) => {
                    const contactList = snapshot.docs.map((doc) => {
                        return {
                            id: doc.id,
                            ...doc.data(),
                        }
                    })
                    setContacts(contactList)
                    console.log(contactList)
                    return contactList
                })
            } catch (error) {
                console.log(error)
            }
        }
        getContacts()
    }, [])

    const filterContacts = (e) => {
        const value = e.target.value
        const contactCollection = collection(db, 'contacts')
        // const contactShots = await getDocs(contactCollection)

        onSnapshot(contactCollection, (snapshot) => {
            //const contactList = contactShots.docs.map((doc) => {
            const contactList = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data(),
                }
            })
            const filteredContacts = contactList.filter((contact) =>
                contact.name.toLowerCase().includes(value.toLowerCase())
            )

            setContacts(filteredContacts)
            console.log(filteredContacts)
            return filteredContacts
        })
    }

    return (
        <>
            <div className="mx-auto max-w-[370px] px-4">
                <Navbar />
                <div className="flex gap-2">
                    <div className="relative flex flex-grow items-center">
                        <FiSearch className="absolute ml-1 text-3xl text-white" />
                        <input
                            onChange={filterContacts}
                            type="text"
                            className="h-10 flex-grow items-center rounded-lg border border-white bg-transparent pl-9 text-white"
                        />
                        <AiFillPlusCircle
                            onClick={onOpen}
                            className="ml-1 cursor-pointer text-5xl text-white"
                        />
                    </div>
                </div>
                <div className="mt-4 flex flex-col gap-4">
                    {contacts.length <= 0 ? (
                        <NotFoundContact />
                    ) : (
                        contacts.map((contact) => (
                            <ContactCard key={contact.id} contact={contact} />
                        ))
                    )}
                </div>
            </div>
            {/* <div className="mb-50 mx-auto flex max-w-[370px] items-center justify-center"> */}
            <AnddandUpdateContact onClose={onClose} isOpen={isOpen} />
            <ToastContainer position="bottom-center" />
            {/* </div> */}
        </>
    )
}

export default App
