import React from 'react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import {
    Tr,
    Td,
} from '@chakra-ui/react'

function ReadOnlyJobAppsRow({data, onDelete, onEdit, key}) {
    // Pass in contacts, handler for edit, handler for delete
    const id = data.application_id;

    const handleDelete = async (e, id) => {
        const user = JSON.parse(localStorage.getItem('user'));
        e.preventDefault();
        // console.log(id);
		const response = await fetch(process.env.REACT_APP_BACKEND_ADDRESS + `/applications/${id}`, {
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + user.token,
                "Content-Type": "application/json"
            }
            })
            .then(r => {
                if(r.status === 200){
                    onDelete(id)
                }
            });
	};

    return (
        <Tr key={key}>
            <Td>{data.employer}</Td>
            <Td>{data.employment_type}</Td>
            <Td>{data.application_status}</Td>
            <Td>{data.application_deadline}</Td>
            <Td>{data.url}</Td>
            <Td>{data.location}</Td>
            <Td>{data.skills}</Td>
            <Td>{data.contact_name}</Td>
            <Td>{data.date_applied}</Td>

            <Td>
                <EditIcon onClick={(e) => onEdit(e, data)}/>
            </Td>
           
            <Td>
                <DeleteIcon onClick={(e) => handleDelete(e, id)}/>
            </Td>
        </Tr>
    )
};

export default ReadOnlyJobAppsRow;