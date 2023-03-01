import { Box, VStack } from '@chakra-ui/react';
import React from 'react';
import LandingRow from '../components/LandingRow';
import LargeHeading from '../components/LargeHeading';

function Landing({ user }) { 
    return (
        <Box marginTop='20' align='center'>
            <LargeHeading text='Track-em-jobs - Start Tracking Now!'></LargeHeading>
            <VStack p='10' spacing='6' align='stretch' w='75%'>
                <LargeHeading text={'Hello there ' + user.first_name}></LargeHeading>
                <LandingRow 
                    buttonText='My Applications'
                    description='Here you can track all of your job applications in an
                        easy-to-read spreadsheet style page.'
                    link='/applications'>
                </LandingRow>
                <LandingRow
                    buttonText='My Contacts'
                    description='Up your networking game with this helpful tool to 
                    track your networking contacts and their relationships to
                    your applications.'
                    link='/contacts'>
                </LandingRow>
                <LandingRow
                    buttonText='Job Skills'
                    description='See how often skills are mentioned in each of your 
                    current applications and view jobs based on the skills 
                    they require.'
                    link='/skills'>
                </LandingRow>
            </VStack>
        </Box>
    )
};

export default Landing;