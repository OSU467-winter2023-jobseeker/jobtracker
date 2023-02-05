import { Button } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';

function RedirectGoogleButton() { 
    return (
        <Button leftIcon={<FcGoogle />}>
            Login with Google
        </Button>
    )
};

export default RedirectGoogleButton;