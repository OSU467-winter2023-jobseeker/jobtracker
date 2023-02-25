import React from 'react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import {
    Tr,
    Td,
} from '@chakra-ui/react'

function ReadOnlyJobAppsRow({data, onDelete}) {
    // Pass in contacts, handler for edit, handler for delete
    const id = data.application_id;

    const handleDelete = (e, id) => {
        e.preventDefault();
        // console.log(id);
		fetch(`application/${id}`, { method: "DELETE" })
        .then(r => {
            if(r.status === 200){
                onDelete(id)
            }
        })
	};
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
           
            <Td>
                <DeleteIcon onClick={(e) => handleDelete(e, id)}/>
            </Td>
        </Tr>
    )
};

export default ReadOnlyJobAppsRow;