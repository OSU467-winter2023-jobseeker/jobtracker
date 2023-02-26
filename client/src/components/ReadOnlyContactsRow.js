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

function ReadOnlyContactsRow({ data, onDelete }) {
    // Pass in contacts, handler for edit, handler for delete
    const id = data.contact_id;

    const handleDelete = (e, id) =>  {
        e.preventDefault();
        fetch(`contact/${id}`, { method: "DELETE" })
        .then(r => {
            if(r.status === 200){
                onDelete(id)
            }
        })
    }
    return (
        <Tr>
            <Td>{data.full_name}</Td>
            <Td>{data.position}</Td>
            <Td>{data.email}</Td>
            <Td>{data.phone_number}</Td>
            <Td>{data.linkedin_url}</Td>
            <Td><EditIcon /></Td>

            {/* <Td>
                <EditIcon onClick={(e) => handleEditClick(e, contact)}/>
            </Td> */}



            <Td>
                <DeleteIcon onClick={(e) => handleDelete(e, id)}/>
            </Td>
        </Tr>
    )
};

export default ReadOnlyContactsRow;