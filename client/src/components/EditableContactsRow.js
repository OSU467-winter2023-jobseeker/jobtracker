import React from 'react';
import { Button, Center, Input, InputGroup, Tr, Td, } from '@chakra-ui/react';



function EditableContactsRow({ editContactFormValues, setContactAppFormValues, handleCancelClick, key }) {
    // Pass in onChange handler and onSubmit
    return (
        <Tr key={key}>
            <Td>
                <Input
                    type="text"
                    name="name"
                    required="required"
                    placeholder="Enter a name..."
                    size='sm'
                    value={editContactFormValues.full_name}
                    onChange={(e) => setContactAppFormValues({ ...editContactFormValues, full_name: e.target.value })}
                />
            </Td>
            <Td>
                <Input
                    type="text"
                    name="position"
                    required="required"
                    placeholder="Enter a position..."
                    size='sm'
                    value={editContactFormValues.position}
                    onChange={(e) => setContactAppFormValues({ ...editContactFormValues, position: e.target.value })}
                />
            </Td>
            <Td>
                <Input
                    type="email"
                    name="email"
                    required="required"
                    placeholder="Enter an email..."
                    size='sm'
                    value={editContactFormValues.email}
                    onChange={(e) => setContactAppFormValues({ ...editContactFormValues, email: e.target.value })}
                />
            </Td>
            <Td>
                <Input
                    type="text"
                    name="phoneNumber"
                    required="required"
                    placeholder="Enter a phone number..."
                    size='sm'
                    value={editContactFormValues.phone_number}
                    onChange={(e) => setContactAppFormValues({ ...editContactFormValues, phone_number: e.target.value })}
                />
            </Td>
            <Td>
                <Input
                    type="text"
                    name="company"
                    required="required"
                    placeholder="Enter a Linkedin link..."
                    size='sm'
                    value={editContactFormValues.linkedin_url}
                    onChange={(e) => setContactAppFormValues({ ...editContactFormValues, linkedin_url: e.target.value })}
                />
            </Td>
            <Td>
                <Button colorScheme='teal' variant='solid' marginLeft={2} type='submit' size='xs'>
                    Save
                </Button>
            </Td>
            <Td>
                <Button colorScheme='teal' variant='solid' marginLeft={2} type='button' size='xs' onClick={handleCancelClick}>
                    Cancel
                </Button>
            </Td>
        </Tr>

    )
};

export default EditableContactsRow;