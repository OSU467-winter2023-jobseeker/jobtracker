import React from 'react';
import { Button, Center, Input, InputGroup } from '@chakra-ui/react';


function AddJobAppsRow() {
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
                    name="position"
                    required="required"
                    placeholder="Enter a position..."
                />
                <Input
                    type="text"
                    name="status"
                    required="required"
                    placeholder="Enter a status..."
                />
                <Input
                    type="date"
                    name="dateApplied"
                    required="required"
                    placeholder="Enter the date you applied..."
                />
                <Input
                    type="text"
                    name="jobDescription"
                    required="required"
                    placeholder="Enter a job link..."
                />
                <Input
                    type="text"
                    name="skills"
                    required="required"
                    placeholder="Enter skills (separated by commas)"
                />
                <Input
                    type="text"
                    name="contact"
                    required="required"
                    placeholder="Enter a contact..."
                />
                <Input
                    type="text"
                    name="notes"
                    required="required"
                    placeholder="Enter any notes..."
                />
                {/* Date we should autopopulate with the current date with an insert statement */}
            </InputGroup>
            <Button colorScheme='teal' variant='solid' marginLeft={2}>
                Add
            </Button>
        </Center>
    )
};

export default AddJobAppsRow;