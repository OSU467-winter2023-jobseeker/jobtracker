import { Box, Center, Container, Flex, VStack, Text, Heading, Divider, InputGroup } from '@chakra-ui/react';
import JobAppsTable from '../components/JobAppsTable';
import AddJobAppsRow from '../components/AddJobAppsRow';
import { useEffect } from 'react';

function JobApplications(jobApplications, loadJobApplications) {
    // Use effect to load the job applications data
    // useEffect(() => {
    //     loadJobApplications();
    // },[]);

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
    const handleAddFormChange = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const newJobApplicationData = { ...addJobApplication };
        newJobApplicationData[fieldName] = fieldValue;

        setAddJobApplication(newJobApplicationData);
    };


    return (
        <VStack>
            <Box>
                <Center>
                    <JobAppsTable />
                </Center>
            </Box>
            <Divider />
            <Box>
                <Center>
                    <div>Add a new job application:</div>
                </Center>
                <AddJobAppsRow />
            </Box>

        </VStack>

    )
};

export default JobApplications;