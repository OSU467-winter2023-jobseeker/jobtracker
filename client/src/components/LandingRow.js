import { Button, Flex, Text, HStack } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';

function LandingRow ({ button, text }) { 
    return (
        <HStack spacing='50'  border='4px' borderColor='thistle' >
        {/* // <Flex align='center' borderColor='lightblue.100'> */}
            <Button p='8' align='left' background='darkgoldenrod' textColor='white' fontSize='lg'>
                {button}
            </Button>
            <Text p='10' fontSize='lg'>
                {text}
            </Text>
        </HStack>
    )
};

export default LandingRow;