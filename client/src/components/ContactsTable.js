import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import { Fragment, useState } from 'react';

import ReadOnlyContactsRow from './ReadOnlyContactsRow';
import EditableContactsRow from './EditableContactsRow';


function ContactsTable({ contacts, setContacts }) {
    const [editID, setEditID] = useState(null);
    const [editContactFormValues, setContactAppFormValues] = useState({
        full_name: "",
        position: "",
        email: "",
        phone_number: "",
        linkedin_url: ""
    })

    const onEdit = (e, contact) => {
        e.preventDefault();
        setEditID(contact.contact_id);

        const formValues = {
            full_name: contact.full_name,
            position: contact.position,
            email: contact.email,
            phone_number: contact.phone_number,
            linkedin_url: contact.linkedin_url
        }
        setContactAppFormValues(formValues);
    }

    const onDelete = (id) => {
        const newContacts = contacts.filter((val) => val.contact_id !== id);
        setContacts(newContacts);
    }

    const handleCancelClick = () => {
        setEditID(null);
    }

    const handleEditSubmitForm = async (e) => {
        e.preventDefault();
        const id = editID;

        const editedContacts = {
            id: editID,
            full_name: editContactFormValues.full_name,
            position: editContactFormValues.position,
            email: editContactFormValues.email,
            phone_number: editContactFormValues.phone_number,
            linkedin_url: editContactFormValues.linkedin_url
        };

        const response = await fetch(`contacts/${id}`, {
            method: "PUT",
            body: JSON.stringify(editedContacts),
            headers: {
                "Content-Type": "application/json",
            }
        })
        if (response.status === 200) {
            alert('Application has been updated!')
        } else {
            alert('Application failed to be updated!')
        }

        const newContact = [...contacts];

        const index = contacts.findIndex((contacts) => contacts.contact_id === editID);

        newContact[index] = editedContacts;
        setContacts(newContact);
        setEditID(null);
    }

    return (
        <TableContainer>
            <form onSubmit={(e) => handleEditSubmitForm(e)}>
                <Table variant='striped' colorScheme='teal' size='sm'>
                    <TableCaption>List of people you have networked with!</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Contact Name</Th>
                            <Th>Position</Th>
                            <Th>Email</Th>
                            <Th>Phone Number</Th>
                            <Th>Linkedin</Th>
                            <Th>Edit</Th>
                            <Th>Delete</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {contacts.map((data, i) => (
                            <Fragment>
                                {editID === data.contact_id ? (
                                    <EditableContactsRow
                                        editContactFormValues={editContactFormValues}
                                        setContactAppFormValues={setContactAppFormValues}
                                        handleCancelClick={handleCancelClick}
                                        key={i}
                                    />
                                ) : (
                                    <ReadOnlyContactsRow
                                        data={data}
                                        onDelete={onDelete}
                                        onEdit={onEdit}
                                        key={i}
                                    />
                                )}
                            </Fragment>
                        ))}
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>Contact Name</Th>
                            <Th>Position</Th>
                            <Th>Email</Th>
                            <Th>Phone Number</Th>
                            <Th>Linkedin</Th>
                            <Th>Edit</Th>
                            <Th>Delete</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </form>
        </TableContainer>
    )
};

export default ContactsTable;