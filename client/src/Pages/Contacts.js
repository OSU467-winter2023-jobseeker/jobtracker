import { Box, Center, Container, Flex, VStack, Text, Heading, Divider, InputGroup } from '@chakra-ui/react';
import ContactsTable from '../components/ContactsTable';
import AddContactRow from '../components/AddContactRow';
import React, {useEffect} from 'react';

function Contacts({loadContacts}) {
    // Use effect to load the contacts data
    useEffect(() => {
        loadContacts();
    }, []);

    return (
        <VStack>
            <Box>
                <Center>
                    <ContactsTable />
                </Center>
            </Box>
            <Divider />
            <Box>
                <Center>
                    <div>Add a new contact:</div>
                </Center>
                <AddContactRow />
            </Box>

        </VStack>

    )
};

export default Contacts;