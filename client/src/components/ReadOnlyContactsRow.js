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

function ReadOnlyContactsRow({ data }) {
    // Pass in contacts, handler for edit, handler for delete
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
                <DeleteIcon />
            </Td>
        </Tr>
    )
};

export default ReadOnlyContactsRow;