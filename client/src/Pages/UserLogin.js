import { Flex, VStack, Text, Heading } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LargeHeading from '../components/LargeHeading';

function UserLogin({ user, setUser }) {
    const navigate = useNavigate();

    const handleCredentialResponse = async (response) => {
        var res = await fetch(process.env.REACT_APP_BACKEND_ADDRESS + '/login', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + response.credential,
                "Content-Type": "application/json"
            },
        });
        const userData = await res.json();
        localStorage.setItem('user', JSON.stringify(userData));
        if (res.status === 200) {
            // alert('You are now logged in! Welcome!')
            console.log(userData);
            navigate('/', userData);
        } else {
            alert('Failed to log in - please try again.')
        }
    };

    useEffect(() => {
        if (window.google) {
            window.google.accounts.id.initialize({
                client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                callback: handleCredentialResponse
            });
            window.google.accounts.id.renderButton(
                document.getElementById('loginButton'),
                { theme: 'outline', size: 'large' }
            );
        };
    });

    return (
        <Flex align='center' justify='center' height='100vh'>
            <VStack p={8} border='8px' borderColor='red.100'>
                <LargeHeading text='Job Tracker'></LargeHeading>
                <Heading as='h2' size='2xl'>Log in below!</Heading>
                <Text>
                    To login or create a new account, please log in with your
                    Google credentials. Clicking below will redirect you to
                    Google's authorization page.
                </Text>
                <div id='loginButton'></div>
            </VStack>
        </Flex>
    )
};

export default UserLogin;