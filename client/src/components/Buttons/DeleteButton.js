import React from 'react';
import { DeleteIcon } from '@chakra-ui/icons';

function DeleteButton( {id, onDelete} ) {

	const handleDelete = async (id) => {
		fetch(`application/${id}`, { method: "DELETE" })
        .then(r => {
            if(r.status === 200){
                onDelete(id)
            }
        })
	};
    return (
        <div>
            <DeleteIcon onClick={() => handleDelete(id)}/>
        </div>
    );
}

export default DeleteButton;