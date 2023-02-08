import { Box, Center, Container, Flex, VStack, Text, Heading, Divider, InputGroup } from '@chakra-ui/react';
import JobAppsTable from '../components/JobAppsTable';
import AddJobAppsRow from '../components/AddJobAppsRow';

function JobApplications() {
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