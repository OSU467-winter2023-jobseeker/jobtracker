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
import ReadOnlyJobAppsRow from './ReadOnlyJobAppsRow';
import EditableJobAppsRow from './EditableJobAppsRow';
import { Fragment, useState } from 'react';

function JobAppsTable({ jobApplications, setJobApplications }) {
    const [editID, setEditID] = useState(null);
    const [editAppFormValues, setEditAppFormValues] = useState({
        employer: "",
        employment_type: "",
        application_status: "",
        application_deadline: "",
        url: "",
        location: "",
        skills: "",
        contact_name: "",
        date_applied: "",
    })

    const onEdit = (e, application) => {
        e.preventDefault();
        setEditID(application.application_id);

        const formValues = {
            employer: application.employer,
            employment_type: application.employment_type,
            application_status: application.application_status,
            application_deadline: application.application_deadline,
            url: application.url,
            location: application.location,
            skills: application.skills,
            contact_name: application.contact_name,
            date_applied: application.date_applied
        }
        setEditAppFormValues(formValues);
    }

    const onDelete = (id) => {
        const newApplications = jobApplications.filter((val) => val.application_id !== id);
        setJobApplications(newApplications);
    }

    const handleCancelClick = () => {
        setEditID(null);
    }

    const handleEditSubmitForm = async (e) => {
        e.preventDefault();
        const id = editID;
        const user = JSON.parse(localStorage.getItem('user'));

        const editedApplication = {
            id: editID,
            employer: editAppFormValues.employer,
            employment_type: editAppFormValues.employment_type,
            application_status: editAppFormValues.application_status,
            application_deadline: editAppFormValues.application_deadline,
            url: editAppFormValues.url,
            location: editAppFormValues.location,
            skills: editAppFormValues.skills,
            contact_name: editAppFormValues.contact_name,
            date_applied: editAppFormValues.date_applied,
        };

        const response = await fetch(process.env.REACT_APP_BACKEND_ADDRESS + `/applications/${id}`, {
            method: "PUT",
            body: JSON.stringify(editedApplication),
            headers: {
                'Authorization': 'Bearer ' + user.token,
                "Content-Type": "application/json",
            }
        })
        if (response.status === 200) {
            alert('Application has been updated!')
        } else {
            alert('Application failed to be updated!')
        }

        const newApplication = [...jobApplications];

        const index = jobApplications.findIndex((jobApplications) => jobApplications.application_id === editID);

        newApplication[index] = editedApplication;
        setJobApplications(newApplication);
        setEditID(null);
    }

    return (
        <TableContainer>
            <form onSubmit={(e) => handleEditSubmitForm(e)}>
                <Table variant='striped' colorScheme='teal' size='sm'>
                    <TableCaption>List of jobs/interships you have applied to!</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Company</Th>
                            <Th>Position</Th>
                            <Th>Status</Th>
                            <Th>Application Deadline</Th>
                            <Th>Job Description</Th>
                            <Th>Location</Th>
                            <Th>Skills</Th>
                            <Th>Contact Info</Th>
                            <Th>Date Applied</Th>
                            <Th>Edit</Th>
                            <Th>Delete</Th>
                        </Tr>
                    </Thead>
                    <Tbody>

                        {jobApplications.map((data, i) => (
                            <Fragment>
                                {editID === data.application_id ? (
                                    <EditableJobAppsRow
                                        editAppFormValues={editAppFormValues}
                                        setEditAppFormValues={setEditAppFormValues}
                                        handleCancelClick={handleCancelClick}
                                        key={i}
                                    />
                                ) : (
                                    <ReadOnlyJobAppsRow
                                        data={data}
                                        onDelete={onDelete}
                                        onEdit={onEdit}
                                        key={i}
                                    />
                                )}
                            </Fragment>
                        )
                        )}

                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>Company</Th>
                            <Th>Position</Th>
                            <Th>Status</Th>
                            <Th>Application Deadline</Th>
                            <Th>Job Description</Th>
                            <Th>Location</Th>
                            <Th>Skills</Th>
                            <Th>Contact Info</Th>
                            <Th>Date Applied</Th>
                            <Th>Edit</Th>
                            <Th>Delete</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </form>
        </TableContainer>
    )
};

export default JobAppsTable;