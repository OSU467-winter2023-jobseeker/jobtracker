import { Box, VStack } from '@chakra-ui/react';
import LandingRow from '../components/LandingRow';
import LargeHeading from '../components/LargeHeading';

function Landing() { 
    return (
        <Box marginTop='20'>
            <LargeHeading text='Track-em-jobs - Start Tracking Now!'></LargeHeading>
            <VStack p='10' spacing='6'>
                <LandingRow 
                    button='My Applications' 
                    text='Here you can track all of your job applications in an
                        easy-to-read spreadsheet style page.'>
                </LandingRow>
                <LandingRow 
                    button='My Contacts' 
                    text='Up your networking game with this helpful tool to 
                    track your networking contacts and their relationships to
                    your applications.'>
                </LandingRow>
                <LandingRow 
                    button='Job Skills'
                    text='See how often skills are mentioned in each of your 
                    current applications and view jobs based on the skills 
                    they require.'>
                </LandingRow>
            </VStack>
        </Box>
    )
};

export default Landing;