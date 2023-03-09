import { Box, Center, VStack, Divider, Button } from '@chakra-ui/react';
import JobAppsTable from '../components/JobAppsTable';
import AddJobAppsRow from '../components/AddJobAppsRow';
import { useEffect, useState } from 'react';

function JobApplications({ jobApplications, setJobApplications, loadJobApplications }) {
    const user = JSON.parse(localStorage.getItem('user'));
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
        user_id: user.user_id
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
            user_id: user.user_id
        }

        setAddJobApplication(emptyJobApplication);
    }

    // Add handlers
    const handleAddFormSubmit = async (e) => {
        e.preventDefault();
        const newJobApplicationList =  [...jobApplications];
        const newJobApplication = {...addJobApplication};
        
        const response = await fetch(process.env.REACT_APP_BACKEND_ADDRESS + "/applications", {
            method: "POST",
            body: JSON.stringify(newJobApplication),
            headers: {
                'Authorization': 'Bearer ' + user.token,
                "Content-Type": "application/json",
            }
        });
        if (response.status === 201) {
            alert("Successfully added a new application!");
            newJobApplicationList.push(newJobApplication);

            // setJobApplications([...jobApplications, ...newJobApplicationList]);
            clearAddJobApplication();
            window.location.reload();
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