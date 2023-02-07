import { Button, Text, HStack } from '@chakra-ui/react';

function LandingRow ({ button, text }) { 
    return (
        <HStack spacing='50'  border='4px' borderColor='goldenrod' padding='6' borderStyle='groove' >
        {/* // <Flex align='center' borderColor='lightblue.100'> */}
            <Button p='8' align='left' background='darkgoldenrod' textColor='white' fontSize='lg'>
                {button}
            </Button>
            <Text p='10' fontSize='larger' fontWeight='500'>
                {text}
            </Text>
        </HStack>
    )
};

export default LandingRow;