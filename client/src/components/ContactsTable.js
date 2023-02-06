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

import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import ReadOnlyContactsRow from './ReadOnlyContactsRow';


function ContactsTable() {
    return (
        <TableContainer>
            <Table variant='striped' colorScheme='teal'>
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Company</Th>
                        <Th>Contact Name</Th>
                        <Th>Position</Th>
                        <Th>Email</Th>
                        <Th>Phone Number</Th>
                        <Th>Last Contacted Date</Th>
                        <Th>Edit</Th>
                        <Th>Delete</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <ReadOnlyContactsRow />
                    <ReadOnlyContactsRow />
                    <ReadOnlyContactsRow />
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>Company</Th>
                        <Th>Contact Name</Th>
                        <Th>Position</Th>
                        <Th>Email</Th>
                        <Th>Phone Number</Th>
                        <Th>Last Contacted Date</Th>
                        <Th>Edit</Th>
                        <Th>Delete</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    )
};

export default ContactsTable;