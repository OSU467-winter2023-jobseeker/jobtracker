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

function ReadOnlyContactsRow() {
    // Pass in contacts, handler for edit, handler for delete
    return (
        <Tr>
            <Td>Google</Td>
            <Td>John Smith</Td>
            <Td>Software Developer</Td>
            <Td>example@google.com</Td>
            <Td>123-456-7890</Td>
            <Td>01/01/23</Td>
            <Td><EditIcon /></Td>

            {/* <Td>
                <EditIcon onClick={(e) => handleEditClick(e, contact)}/>
            </Td> */}

            <Td><DeleteIcon /></Td>
           
            {/* <Td>
                <DeleteIcon onClick={() => handleDeleteClick(contact.id)}/>
            </Td> */}
        </Tr>
    )
};

export default ReadOnlyContactsRow;