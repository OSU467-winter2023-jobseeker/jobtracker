import React from 'react';
import { Button, Center, Input, InputGroup, Tr, Td, } from '@chakra-ui/react';



function EditableContactsRow({ editAppFormValues, setEditAppFormValues, handleCancelClick }) {
    // Pass in onChange handler and onSubmit
    return (
        <Tr>
            <Td>
                <Input
                    type="text"
                    name="name"
                    required="required"
                    placeholder="Enter a name..."
                    value={addContact.full_name}
                    onChange={(e) => setAddContact({ ...addContact, full_name: e.target.value })}
                />
            </Td>
            <Td>
                <Input
                    type="text"
                    name="position"
                    required="required"
                    placeholder="Enter a position..."
                    value={addContact.position}
                    onChange={(e) => setAddContact({ ...addContact, position: e.target.value })}
                />
            </Td>
            <Td>
                <Input
                    type="email"
                    name="email"
                    required="required"
                    placeholder="Enter an email..."
                    value={addContact.email}
                    onChange={(e) => setAddContact({ ...addContact, email: e.target.value })}
                />
            </Td>
            <Td>
                <Input
                    type="text"
                    name="phoneNumber"
                    required="required"
                    placeholder="Enter a phone number..."
                    value={addContact.phone_number}
                    onChange={(e) => setAddContact({ ...addContact, phone_number: e.target.value })}
                />
            </Td>
            <Td>
                <Input
                    type="text"
                    name="company"
                    required="required"
                    placeholder="Enter a Linkedin link..."
                    value={addContact.linkedin_url}
                    onChange={(e) => setAddContact({ ...addContact, linkedin_url: e.target.value })}
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