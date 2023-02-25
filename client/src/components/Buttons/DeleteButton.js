import React from 'react';
import { DeleteIcon } from '@chakra-ui/icons';

function DeleteButton( {id, onDelete} ) {
    return (
        <div>
            <DeleteIcon />
        </div>
    );
}

export default DeleteButton;