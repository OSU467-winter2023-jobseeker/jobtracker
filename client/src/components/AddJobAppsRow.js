import React from 'react';
import { Button, Center, Input, InputGroup } from '@chakra-ui/react';


function AddJobAppsRow({addJobApplication, setAddJobApplication}) {
    // Pass in onChange handler and onSubmit
    return (
        <Center>
            <InputGroup>
                <Input
                    type="text"
                    name="company"
                    required="required"
                    placeholder="Enter a company..."
                    value={addJobApplication.company}
                    onChange={(e) => setAddJobApplication({...addJobApplication, company: e.target.value})}
                />
                <Input
                    type="text"
                    name="position"
                    required="required"
                    placeholder="Enter a position..."
                    value={addJobApplication.position}
                    onChange={(e) => setAddJobApplication({...addJobApplication, position: e.target.value})}
                />
                <Input
                    type="text"
                    name="status"
                    required="required"
                    placeholder="Enter a status..."
                    value={addJobApplication.status}
                    onChange={(e) => setAddJobApplication({...addJobApplication, status: e.target.value})}
                />
                <Input
                    type="date"
                    name="dateApplied"
                    required="required"
                    placeholder="Enter the date you applied..."
                    value={addJobApplication.dateApplied}
                    onChange={(e) => setAddJobApplication({...addJobApplication, dateApplied: e.target.value})}
                />
                <Input
                    type="text"
                    name="jobDescription"
                    required="required"
                    placeholder="Enter a job link..."
                    value={addJobApplication.jobDescription}
                    onChange={(e) => setAddJobApplication({...addJobApplication, jobDescription: e.target.value})}
                />
                <Input
                    type="text"
                    name="location"
                    required="required"
                    placeholder="Enter location..."
                    value={addJobApplication.location}
                    onChange={(e) => setAddJobApplication({...addJobApplication, location: e.target.value})}
                />
                <Input
                    type="text"
                    name="skills"
                    required="required"
                    placeholder="Enter skills (separated by commas)"
                    value={addJobApplication.skills}
                    onChange={(e) => setAddJobApplication({...addJobApplication, skills: e.target.value})}
                />
                <Input
                    type="text"
                    name="contact"
                    required="required"
                    placeholder="Enter a contact..."
                    value={addJobApplication.contact}
                    onChange={(e) => setAddJobApplication({...addJobApplication, contact: e.target.value})}
                />
                <Input
                    type="text"
                    name="notes"
                    required="required"
                    placeholder="Enter any notes..."
                    value={addJobApplication.notes}
                    onChange={(e) => setAddJobApplication({...addJobApplication, notes: e.target.value})}
                />
            </InputGroup>
        </Center>
    )
};

export default AddJobAppsRow;