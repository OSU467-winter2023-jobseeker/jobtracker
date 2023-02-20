import React from 'react';
import { Button, Center, Input, InputGroup } from '@chakra-ui/react';


function AddJobAppsRow(addJobApplication, setAddJobApplication, handleAddFormChange, handleAddFormSubmit) {
    // Pass in onChange handler and onSubmit
    return (
        <Center>
            <form onSubmit={handleAddFormSubmit}>
                <InputGroup>
                    <Input
                        type="text"
                        name="company"
                        required="required"
                        placeholder="Enter a company..."
                        onChange={handleAddFormChange}
                    />
                    <Input
                        type="text"
                        name="position"
                        required="required"
                        placeholder="Enter a position..."
                        onChange={handleAddFormChange}
                    />
                    <Input
                        type="text"
                        name="status"
                        required="required"
                        placeholder="Enter a status..."
                        onChange={handleAddFormChange}
                    />
                    <Input
                        type="date"
                        name="dateApplied"
                        required="required"
                        placeholder="Enter the date you applied..."
                        onChange={handleAddFormChange}
                    />
                    <Input
                        type="text"
                        name="jobDescription"
                        required="required"
                        placeholder="Enter a job link..."
                        onChange={handleAddFormChange}
                    />
                    <Input
                        type="text"
                        name="skills"
                        required="required"
                        placeholder="Enter skills (separated by commas)"
                        onChange={handleAddFormChange}
                    />
                    <Input
                        type="text"
                        name="contact"
                        required="required"
                        placeholder="Enter a contact..."
                        onChange={handleAddFormChange}
                    />
                    <Input
                        type="text"
                        name="notes"
                        required="required"
                        placeholder="Enter any notes..."
                        onChange={handleAddFormChange}
                    />
                    {/* Date we should autopopulate with the current date with an insert statement */}
                </InputGroup>
                <Button colorScheme='teal' variant='solid' marginLeft={2}>
                    Add
                </Button>
            </form>
        </Center>
    )
};

export default AddJobAppsRow;