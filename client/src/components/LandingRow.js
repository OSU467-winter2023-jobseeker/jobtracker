import { Button, Flex } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';

function LandingRow({ button, text }) { 
    return (
        <Flex>
            <Button leftIcon={<FcGoogle />}>
                {button}
            </Button>
            <Text>
                {text}
            </Text>
        </Flex>
    )
};

export default LandingRow;