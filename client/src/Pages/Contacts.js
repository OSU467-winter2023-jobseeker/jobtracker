import { Box, Center, Container, Flex, VStack, Text, Heading } from '@chakra-ui/react';
import ContactsTable from '../components/ContactsTable';

function Contacts() {
    return (
        <Center>
            <ContactsTable />
        </Center>
    )
};

export default Contacts;