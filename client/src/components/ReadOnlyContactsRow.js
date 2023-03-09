import React from 'react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
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

function ReadOnlyContactsRow({ data, onDelete, onEdit, key }) {
    // Pass in contacts, handler for edit, handler for delete
    const id = data.contact_id;

    const handleDelete = (e, id) =>  {
        const user = JSON.parse(localStorage.getItem('user'));
        e.preventDefault();
        fetch(process.env.REACT_APP_BACKEND_ADDRESS + `contacts/${id}`, {
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + user.token,
            }
        })
        .then(r => {
            if(r.status === 200){
                onDelete(id)
            }
        })
    }
    return (
        <Tr key={key}>
            <Td>{data.full_name}</Td>
            <Td>{data.position}</Td>
            <Td>{data.email}</Td>
            <Td>{data.phone_number}</Td>
            <Td>{data.linkedin_url}</Td>

            <Td>
                <EditIcon onClick={(e) => onEdit(e, data)}/>
            </Td>

            <Td>
                <DeleteIcon onClick={(e) => handleDelete(e, id)}/>
            </Td>
        </Tr>
    )
};

export default ReadOnlyContactsRow;