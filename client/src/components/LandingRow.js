import { Button, Text, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function LandingRow ({ buttonText, description, link }) { 
    return (
        <HStack spacing='50'  border='4px' borderColor='goldenrod' padding='6' borderStyle='groove' >
        {/* // <Flex align='center' borderColor='lightblue.100'> */}
            <Button p='8' align='left' background='darkgoldenrod' textColor='white' fontSize='lg'>
                <Link to={link} >{buttonText}</Link>
            </Button>
            <Text p='10' fontSize='larger' fontWeight='500'>
                {description}
            </Text>
        </HStack>
    )
};

export default LandingRow;