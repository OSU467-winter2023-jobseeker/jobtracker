import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import ReadOnlyContactsRow from './ReadOnlyContactsRow';


function ContactsTable({ contacts, setContacts }) {
    const onDelete = (id) => {
        const newContacts = contacts.filter((val) => val.contact_id !== id);
        setContacts(newContacts);
    }

    return (
        <TableContainer>
            <Table variant='striped' colorScheme='teal' size='sm'>
                <TableCaption>List of people you have networked with!</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Contact Name</Th>
                        <Th>Position</Th>
                        <Th>Email</Th>
                        <Th>Phone Number</Th>
                        <Th>Linkedin</Th>
                        <Th>Edit</Th>
                        <Th>Delete</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {contacts.map((data, i) => <ReadOnlyContactsRow data={data} onDelete={onDelete} key={i}/>)}
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>Contact Name</Th>
                        <Th>Position</Th>
                        <Th>Email</Th>
                        <Th>Phone Number</Th>
                        <Th>Linkedin</Th>
                        <Th>Edit</Th>
                        <Th>Delete</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    )
};

export default ContactsTable;