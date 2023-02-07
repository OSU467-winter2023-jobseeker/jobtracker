import { Box, Center, Container, Flex, VStack, Text, Heading } from '@chakra-ui/react';
import RedirectGoogleButton from '../components/RedirectGoogleButton';
import LargeHeading from '../components/LargeHeading';

function UserLogin() { 
    return (
        <Flex align='center' justify='center' height='100vh'>
            <VStack p={8} border='8px' borderColor='red.100'>
                <LargeHeading text='Job Tracker'></LargeHeading>
                <Heading as='h2' size='2xl'>Log in below!</Heading>
                <Text>
                    To login or create a new account, please log in with your
                    Google credentials. Clicking below will redirect you to
                    Google's authorization page.
                </Text>
                <RedirectGoogleButton></RedirectGoogleButton>
            </VStack>
        </Flex>
    )
};

export default UserLogin;