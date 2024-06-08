import React from 'react'
import Modal from './Modal'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import { db } from '../config/firebase'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

const contactSchemaValidation = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid Email').required('Email is required'),
})

const AnddandUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
    const addContact = async (contact) => {
        try {
            const contactRef = collection(db, 'contacts')
            await addDoc(contactRef, contact)
            onClose()
            toast.success('Conatct Added Successfully')
        } catch (error) {
            console.log(error)
        }
    }
    const updateContact = async (contact, id) => {
        try {
            const contactRef = doc(db, 'contacts', id)
            await updateDoc(contactRef, contact)
            onClose()
            toast.success('Conatct Updated Successfully')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                // className="flex max-w-[370px] items-center justify-center"
            >
                <Formik
                    validationSchema={contactSchemaValidation}
                    // className="max-w-[370px]"
                    initialValues={
                        isUpdate
                            ? {
                                  name: contact.name,
                                  email: contact.email,
                              }
                            : {
                                  name: '',
                                  email: '',
                              }
                    }
                    onSubmit={(values) => {
                        console.log(values)

                        isUpdate
                            ? updateContact(values, contact.id)
                            : // addContact(
                              //     { name: values.name },
                              //     { email: values.email }
                              // )
                              addContact(values)
                    }}
                >
                    <Form className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-red">
                                Name
                            </label>
                            <Field name="name" className="h-10 border" />
                            <div className="text-xs text-red">
                                <ErrorMessage name="name" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-green">
                                Email
                            </label>
                            <Field
                                type="email"
                                name="email"
                                className="h-10 border"
                            />
                            <div className="text-xs text-red">
                                <ErrorMessage name="email" />
                            </div>
                            <button className="border-sky-950 bg-orange px-3 py-1.5">
                                {isUpdate ? 'Update' : 'Add'} Conatct
                            </button>
                        </div>
                    </Form>
                </Formik>
                Hi hello ascasc
            </Modal>
        </div>
    )
}

export default AnddandUpdateContact
