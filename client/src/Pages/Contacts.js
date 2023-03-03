import { Box, Center, Container, Flex, VStack, Text, Heading, Divider, InputGroup, Button } from '@chakra-ui/react';
import ContactsTable from '../components/ContactsTable';
import AddContactRow from '../components/AddContactRow';
import React, { useEffect, useState } from 'react';

function Contacts({ loadContacts, contacts, setContacts }) {
    const user = JSON.parse(localStorage.getItem('user'));
    // Use effect to load the contacts data
    useEffect(() => {
        loadContacts();
    }, []);

    // Add useState
    const [addContact, setAddContact] = useState({
        full_name: "",
        position: "",
        email: "",
        phone_number: "",
        linkedin_url: "",
        user_id: user.user_id
    });

    const clearAddContact = () => {
        const clearedContact = {
            full_name: "",
            position: "",
            email: "",
            phone_number: "",
            linkedin_url: "",
            user_id: user.user_id
        };

        setAddContact(clearedContact);
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const newContactsList = [...contacts];
        const newAddContact = { ...addContact };

        const response = await fetch("/contacts", {
            method: "POST",
            body: JSON.stringify(newAddContact),
            headers: {
                "Content-Type": "application/json",
            }
        })
        if (response.status === 201) {
            alert("Successfully added a new contact!");
            newContactsList.push(newAddContact);
            // setContacts([...contacts, ...newContactsList]);
            clearAddContact();
            window.location.reload();

        } else {
            alert(`Failed to add contact, status code = ${response.status}`)
        }
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
                    <Button colorScheme='teal' variant='solid' marginLeft={2} size='sm' type='submit'>
                        Add
                    </Button>
                </form>
            </Box>
        </VStack>

    )
};

export default Contacts;