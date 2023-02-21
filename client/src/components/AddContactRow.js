import React from 'react';
import { Button, Center, Input, InputGroup } from '@chakra-ui/react';


function AddContactRow({addContact, setAddContact}) {
    // Pass in onChange handler and onSubmit
    return (
        <Center>
            <InputGroup>
                <Input
                    type="text"
                    name="company"
                    required="required"
                    placeholder="Enter a company..."
                    value={addContact.company}
                    onChange={(e) => setAddContact({...addContact, company: e.target.value})}
                />
                <Input
                    type="text"
                    name="name"
                    required="required"
                    placeholder="Enter a name..."
                    value={addContact.name}
                    onChange={(e) => setAddContact({...addContact, name: e.target.value})}
                />
                <Input
                    type="text"
                    name="position"
                    required="required"
                    placeholder="Enter a position..."
                    value={addContact.position}
                    onChange={(e) => setAddContact({...addContact, position: e.target.value})}
                />
                <Input
                    type="email"
                    name="email"
                    required="required"
                    placeholder="Enter an email..."
                    value={addContact.email}
                    onChange={(e) => setAddContact({...addContact, email: e.target.value})}
                />
                <Input
                    type="text"
                    name="phoneNumber"
                    required="required"
                    placeholder="Enter a phone number..."
                    value={addContact.phoneNumber}
                    onChange={(e) => setAddContact({...addContact, phoneNumber: e.target.value})}
                />
                {/* Date we should autopopulate with the current date with an insert statement */}
            </InputGroup>
        </Center>
    )
};

export default AddContactRow;