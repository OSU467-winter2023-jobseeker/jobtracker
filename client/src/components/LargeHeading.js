import { Heading } from '@chakra-ui/react';

function LargeHeading ({ text }) { 
    return (
        <Heading 
            as='h1' 
            size='4xl' 
            align='center'>
            {text}
        </Heading>
    )
};

export default LargeHeading;