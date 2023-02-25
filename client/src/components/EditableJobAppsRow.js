import React from 'react';
import { Button, Center, Input, InputGroup, Tr, Td, } from '@chakra-ui/react';



function EditableJobAppsRow({ editAppFormValues, handleCancelClick }) {
    // Pass in onChange handler and onSubmit
    return (
        <Tr>
            <Td>
                <Input
                    type="text"
                    name="company"
                    required="required"
                    placeholder="Enter a company..."
                    size='sm'
                    value={editAppFormValues.employer}
                //onChange={(e) => setAddJobApplication({...addJobApplication, employer: e.target.value})}
                />
            </Td>
            <Td>
                <Input
                    type="text"
                    name="position"
                    required="required"
                    placeholder="Enter a position..."
                    size='sm'
                    value={editAppFormValues.employment_type}
                //onChange={(e) => setAddJobApplication({...addJobApplication, employment_type: e.target.value})}
                />
            </Td>
            <Td>
                <Input
                    type="text"
                    name="status"
                    required="required"
                    placeholder="Enter a status..."
                    size='sm'
                    value={editAppFormValues.application_status}
                //onChange={(e) => setAddJobApplication({...addJobApplication, application_status: e.target.value})}
                />
            </Td>
            <Td>
                <Input
                    type="date"
                    name="application_deadline"
                    required="required"
                    placeholder="Enter application deadline..."
                    size='sm'
                    value={editAppFormValues.application_deadline}
                //={(e) => setAddJobApplication({...addJobApplication, application_deadline: e.target.value})}
                />
            </Td>
            <Td>
                <Input
                    type="text"
                    name="jobDescription"
                    required="required"
                    placeholder="Enter a job link..."
                    size='sm'
                    value={editAppFormValues.url}
                //={(e) => setAddJobApplication({...addJobApplication, url: e.target.value})}
                />
            </Td>
            <Td>
                <Input
                    type="text"
                    name="location"
                    required="required"
                    placeholder="Enter location..."
                    size='sm'
                    value={editAppFormValues.location}
                //onChange={(e) => setAddJobApplication({...addJobApplication, location: e.target.value})}
                />
            </Td>
            <Td>
                <Input
                    type="text"
                    name="skills"
                    required="required"
                    placeholder="Enter skills (separated by commas)"
                    size='sm'
                    value={editAppFormValues.skills}
                //onChange={(e) => setAddJobApplication({...addJobApplication, skills: e.target.value})}
                />
            </Td>
            <Td>
                <Input
                    type="text"
                    name="contact"
                    required="required"
                    placeholder="Enter a contact..."
                    size='sm'
                    value={editAppFormValues.contact_name}
                //onChange={(e) => setAddJobApplication({...addJobApplication, contact_name: e.target.value})}
                />
            </Td>
            <Td>
                <Input
                    type="text"
                    name="notes"
                    required="required"
                    placeholder="Enter any notes..."
                    size='sm'
                    value={editAppFormValues.notes}
                //onChange={(e) => setAddJobApplication({...addJobApplication, notes: e.target.value})}
                />
            </Td>
            <Td>
                <Input
                    type="date"
                    name="application_applied"
                    required="required"
                    placeholder="Enter applied date..."
                    size='sm'
                    value={editAppFormValues.date_applied}
                //onChange={(e) => setAddJobApplication({...addJobApplication, date_applied: e.target.value})}
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

export default EditableJobAppsRow;