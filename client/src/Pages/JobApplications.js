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
        company: "",
        position: "",
        status: "",
        dateApplied: "",
        jobDescription: "",
        location: "",
        skills: "",
        contact: "",
        notes: "",
    });

    // Edit handlers

    // Delete handlers

    // Add handlers
    const handleAddFormSubmit = (e) => {
        e.preventDefault();

        const newJobApplication = { ...addJobApplication };
        console.log(addJobApplication);
        // insert response with api

        // clear data from addJobApplication
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
                    <Button colorScheme='teal' variant='solid' marginLeft={2} type='submit'>
                        Submit
                    </Button>
                </form>

            </Box>

        </VStack>

    )
};

export default JobApplications;