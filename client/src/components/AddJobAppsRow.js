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
                    value={addJobApplication.employer}
                    onChange={(e) => setAddJobApplication({...addJobApplication, employer: e.target.value})}
                />
                <Input
                    type="text"
                    name="position"
                    required="required"
                    placeholder="Enter a position..."
                    value={addJobApplication.employment_type}
                    onChange={(e) => setAddJobApplication({...addJobApplication, employment_type: e.target.value})}
                />
                <Input
                    type="text"
                    name="status"
                    required="required"
                    placeholder="Enter a status..."
                    value={addJobApplication.application_status}
                    onChange={(e) => setAddJobApplication({...addJobApplication, application_status: e.target.value})}
                />
                <Input
                    type="date"
                    name="application_deadline"
                    required="required"
                    placeholder="Enter application deadline..."
                    value={addJobApplication.application_deadline}
                    onChange={(e) => setAddJobApplication({...addJobApplication, application_deadline: e.target.value})}
                />
                <Input
                    type="text"
                    name="jobDescription"
                    required="required"
                    placeholder="Enter a job link..."
                    value={addJobApplication.url}
                    onChange={(e) => setAddJobApplication({...addJobApplication, url: e.target.value})}
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
                    value={addJobApplication.contact_name}
                    onChange={(e) => setAddJobApplication({...addJobApplication, contact_name: e.target.value})}
                />
                <Input
                    type="text"
                    name="notes"
                    required="required"
                    placeholder="Enter any notes..."
                    value={addJobApplication.notes}
                    onChange={(e) => setAddJobApplication({...addJobApplication, notes: e.target.value})}
                />
                <Input
                    type="date"
                    name="application_applied"
                    required="required"
                    placeholder="Enter applied date..."
                    value={addJobApplication.date_applied}
                    onChange={(e) => setAddJobApplication({...addJobApplication, date_applied: e.target.value})}
                />
            </InputGroup>
        </Center>
    )
};

export default AddJobAppsRow;