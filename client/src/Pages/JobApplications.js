import { Box, Center, Container, Flex, VStack, Text, Heading, Divider, InputGroup, Button } from '@chakra-ui/react';
import JobAppsTable from '../components/JobAppsTable';
import AddJobAppsRow from '../components/AddJobAppsRow';
import { useEffect, useState } from 'react';

function JobApplications({ jobApplications, setJobApplications, loadJobApplications }) {
    // Use effect to load the job applications data
    useEffect(() => {
        loadJobApplications();
    }, []);

    // Add useState
    const [addJobApplication, setAddJobApplication] = useState({
        employer: "",
        employment_type: "",
        application_status: "",
        application_deadline: "",
        url: "",
        location: "",
        skills: "",
        contact_name: "",
        date_applied: "",
        user_id: "testString123"
    });

    const clearAddJobApplication = () => {
        const emptyJobApplication = {
            employer: "",
            employment_type: "",
            application_status: "",
            application_deadline: "",
            url: "",
            location: "",
            skills: "",
            contact_name: "",
            notes: "",
            date_applied: "",
            user_id: "testString123"
        }

        setAddJobApplication(emptyJobApplication);
    }

    // Add handlers
    const handleAddFormSubmit = async (e) => {
        e.preventDefault();
        const newJobApplicationList =  [...jobApplications];
        const newJobApplication = {...addJobApplication};
        
        const response = await fetch("/application", {
            method: "POST",
            body: JSON.stringify(newJobApplication),
            headers: {
                "Content-Type": "application/json",
            }
        })
        if (response.status === 201) {
            alert("Successfully added a new application!");
            newJobApplicationList.push(newJobApplication);

            setJobApplications([...jobApplications, ...newJobApplicationList]);
            clearAddJobApplication();
        } else {
            alert(`Failed to add application, status code = ${response.status}`);
        }

    }

    return (
        <VStack>
            <Box>
                <Center>
                    <JobAppsTable
                        jobApplications={jobApplications}
                        setJobApplications={setJobApplications}
                    />
                </Center>
            </Box>
            <Divider />
            <Box>
                <Center>
                    <div>Add a new job application:</div>
                </Center>
                <form onSubmit={handleAddFormSubmit}>
                    <AddJobAppsRow
                        addJobApplication={addJobApplication}
                        setAddJobApplication={setAddJobApplication}
                    />
                    <Button colorScheme='teal' variant='solid' marginLeft={2} size='sm' type='submit'>
                        Submit
                    </Button>
                </form>

            </Box>

        </VStack>

    )
};

export default JobApplications;