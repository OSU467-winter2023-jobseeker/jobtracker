import React from 'react';
import { Button, Center, Input, InputGroup } from '@chakra-ui/react';


function AddContactRow() {
    // Pass in onChange handler and onSubmit
    return (
        <Center>
            <InputGroup>
                <Input
                    type="text"
                    name="company"
                    required="required"
                    placeholder="Enter a company..."
                />
                <Input
                    type="text"
                    name="name"
                    required="required"
                    placeholder="Enter a name..."
                />
                <Input
                    type="text"
                    name="position"
                    required="required"
                    placeholder="Enter a position..."
                />
                <Input
                    type="email"
                    name="email"
                    required="required"
                    placeholder="Enter an email..."
                />
                <Input
                    type="text"
                    name="phoneNumber"
                    required="required"
                    placeholder="Enter a phone number..."
                />
                {/* Date we should autopopulate with the current date with an insert statement */}
            </InputGroup>
            <Button colorScheme='teal' variant='solid' marginLeft={2}>
                Add
            </Button>
        </Center>
    )
};

export default AddContactRow;