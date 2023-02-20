import React from 'react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import {
    Tr,
    Td,
} from '@chakra-ui/react'

function ReadOnlyJobAppsRow({data}) {
    // Pass in contacts, handler for edit, handler for delete
    return (
        <Tr>
            <Td>{data.employer}</Td>
            <Td>{data.employment_type}</Td>
            <Td>{data.application_status}</Td>
            <Td>{data.created_at}</Td>
            <Td>{data.url}</Td>
            <Td>{data.location}</Td>
            <Td>{data.skills}</Td>
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