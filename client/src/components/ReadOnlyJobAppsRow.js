import React from 'react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import DeleteButton from './Buttons/DeleteButton';
import {
    Tr,
    Td,
} from '@chakra-ui/react'

function ReadOnlyJobAppsRow({data, onDelete}) {
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
            <Td>{data.contact_name}</Td>
            <Td>{data.notes}</Td>
            <Td><EditIcon /></Td>

            {/* <Td>
                <EditIcon onClick={(e) => handleEditClick(e, contact)}/>
            </Td> */}

            <Td><DeleteButton id={data.application_id}/></Td>
           
            {/* <Td>
                <DeleteIcon onClick={() => handleDeleteClick(contact.id)}/>
            </Td> */}
        </Tr>
    )
};

export default ReadOnlyJobAppsRow;