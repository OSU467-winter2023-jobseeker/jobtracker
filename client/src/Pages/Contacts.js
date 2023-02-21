import { Box, Center, Container, Flex, VStack, Text, Heading, Divider, InputGroup, Button } from '@chakra-ui/react';
import ContactsTable from '../components/ContactsTable';
import AddContactRow from '../components/AddContactRow';
import React, { useEffect, useState } from 'react';

function Contacts({ loadContacts, contacts, setContacts }) {
    // Use effect to load the contacts data
    useEffect(() => {
        loadContacts();
    }, []);

    // Add useState
    const [addContact, setAddContact] = useState({
        company: "",
        name: "",
        position: "",
        email: "",
        phoneNumber: ""
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const newAddContact = { ...addContact };
        console.log(newAddContact);
        // insert response with api

        // clear data from addJobApplication
    }
    return (
        <VStack>
            <Box>
                <Center>
                    <ContactsTable
                        contacts={contacts}
                        setContacts={setContacts}
                    />
                </Center>
            </Box>
            <Divider />
            <Box>
                <Center>
                    <div>Add a new contact:</div>
                </Center>
                <form onSubmit={handleFormSubmit}>
                    <AddContactRow
                        addContact={addContact}
                        setAddContact={setAddContact}
                    />
                    <Button colorScheme='teal' variant='solid' marginLeft={2} type='submit'>
                        Add
                    </Button>
                </form>
            </Box>
        </VStack>

    )
};

export default Contacts;