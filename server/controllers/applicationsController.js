const authorization = require('../middleware/authorization');
const skills = require('./skillsController');
const Pool = require('../db/db');
const pool = Pool.pool;
const { format } = require('date-fns');

const getApplications = (request, response) => {
    pool.query('SELECT a.* FROM applications a INNER JOIN users u ON u.user_id = a.user_id WHERE a.user_id = $1 ORDER BY a.created_at DESC', [request.params.id], (error, results) => {
        // console.log(request);
        if (error) {
            throw error
        }
        results.rows.forEach((row) => {
            row.application_deadline = format(new Date(row.application_deadline), 'yyyy-MM-dd');
            row.date_applied = format(new Date(row.date_applied), 'yyyy-MM-dd');
        })
        response.status(200).json(results.rows);
    });
};

const createApplications = (request, response) => {
    const data = request.body

    pool.query('INSERT INTO applications (contact_name, employer, employment_type, application_status, application_deadline, location, url, skills, date_applied, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING application_id',
        [data.contact_name, data.employer, data.employment_type, data.application_status, data.application_deadline, data.location, data.url, data.skills, data.date_applied, data.user_id],
        // [data.contact_name, data.employer, data.employment_type, data.application_status, data.application_deadline, data.location, data.url, data.skills, data.notes, data.date_applied],
        (error, results) => {
            if (error) {
                throw error
            }
            skills.createSkills(results.rows[0].application_id, data.skills);

            response.status(201).send(`Application added with ID: ${results.rows[0].application_id}`);
        });
};

const updateApplications = (request, response) => {
    const id = parseInt(request.params.id)
    const data = request.body

    pool.query(
        'UPDATE applications SET contact_name = $1, employer = $2, employment_type = $3, application_status = $4, application_deadline = $5, location = $6, url = $7, skills = $8, date_applied = $9 WHERE application_id = $10',
        [data.contact_name, data.employer, data.employment_type, data.application_status, data.application_deadline, data.location, data.url, data.skills, data.date_applied, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Application modified with ID: ${id}`);
        }
    );
};

const deleteApplications = (request, response) => {
    const id = parseInt(request.params.id)

    const deleteSkillsResult = skills.deleteSkills(id);

    pool.query('DELETE FROM applications WHERE application_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Application deleted with ID: ${id}`);
    });
};

module.exports = {
    getApplications,
    createApplications,
    updateApplications,
    deleteApplications,
};