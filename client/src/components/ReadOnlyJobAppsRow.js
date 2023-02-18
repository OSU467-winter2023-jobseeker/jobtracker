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

function ReadOnlyJobAppsRow() {
    // Pass in contacts, handler for edit, handler for delete
    return (
        <Tr>
            <Td>Google</Td>
            <Td>SWE 1</Td>
            <Td>Pending Results</Td>
            <Td>01/01/23</Td>
            <Td>www.Google.com</Td>
            <Td>Silicon Valley</Td>
            <Td>Swift, Java, C++</Td>
            <Td>Johnny Appleseed</Td>
            <Td>Interview went well!</Td>
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

export default ReadOnlyJobAppsRow;