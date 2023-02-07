import { Box, Center, Container, Flex, VStack, Text, Heading } from '@chakra-ui/react';

function Landing() { 
    return (
        <Flex align='center' justify='center' height='100vh'>
            <VStack p={8} border='8px' borderColor='red.100'>
                <Heading as='h1' size='4xl'>Track-em-jobs - Start Tracking Now!</Heading>
                <Text>

                </Text>
            </VStack>
        </Flex>
    )
};

export default Landing;