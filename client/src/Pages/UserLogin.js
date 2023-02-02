import { Stack, Heading } from '@chakra-ui/react';

function loginPage() { 
    return (
        <Stack spacing={4}>
            <Heading as='h1'>Job Tracker</Heading>
            <Heading as='h2'>Log in below!</Heading>
        </Stack>
    )
};

export default loginPage;