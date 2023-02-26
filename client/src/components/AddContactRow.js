import React from 'react';
import { Button, Center, Input, InputGroup } from '@chakra-ui/react';


function AddContactRow({addContact, setAddContact}) {
    // Pass in onChange handler and onSubmit
    return (
        <Center>
            <InputGroup>
                <Input
                    type="text"
                    name="name"
                    required="required"
                    placeholder="Enter a name..."
                    size='sm'
                    value={addContact.full_name}
                    onChange={(e) => setAddContact({...addContact, full_name: e.target.value})}
                />
                <Input
                    type="text"
                    name="position"
                    required="required"
                    placeholder="Enter a position..."
                    size='sm'
                    value={addContact.position}
                    onChange={(e) => setAddContact({...addContact, position: e.target.value})}
                />
                <Input
                    type="email"
                    name="email"
                    required="required"
                    placeholder="Enter an email..."
                    size='sm'
                    value={addContact.email}
                    onChange={(e) => setAddContact({...addContact, email: e.target.value})}
                />
                <Input
                    type="text"
                    name="phoneNumber"
                    required="required"
                    placeholder="Enter a phone number..."
                    size='sm'
                    value={addContact.phone_number}
                    onChange={(e) => setAddContact({...addContact, phone_number: e.target.value})}
                />
                <Input
                    type="text"
                    name="company"
                    required="required"
                    placeholder="Enter a Linkedin link..."
                    size='sm'
                    value={addContact.linkedin_url}
                    onChange={(e) => setAddContact({...addContact, linkedin_url: e.target.value})}
                />
                {/* Date we should autopopulate with the current date with an insert statement */}
            </InputGroup>
        </Center>
    )
};

export default AddContactRow;