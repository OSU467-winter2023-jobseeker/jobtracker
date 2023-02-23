import { Flex, VStack, Text, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import LargeHeading from '../components/LargeHeading';

function UserLogin({ user, setUser }) {

    const handleCredentialResponse = async (response) => {
        var res = await fetch('/userLogin', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ jwt: response.credential })
        });
        const userData = await res.json();
        localStorage.setItem('user', JSON.stringify(userData));
        
        // .catch(error => {
        //     return error;
        // });
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