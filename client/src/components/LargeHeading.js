import { Heading } from '@chakra-ui/react';

function LargeHeading ({ text }) { 
    return (
        <Heading 
            fontSize='6xl'
            align='center'>
            {text}
        </Heading>
    )
};

export default LargeHeading;