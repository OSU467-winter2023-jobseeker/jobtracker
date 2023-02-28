const authorization = require('../middleware/authorization');
const Pool = require('../db/db');
const pool = Pool.pool;

const getContacts = (request, response) => {
    pool.query('SELECT c.* FROM contacts c INNER JOIN users u ON u.user_id = c.user_id WHERE c.user_id = $1 ORDER BY created_at DESC', [request.params.id], (error, results) => {
        // console.log(request);
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
    });
};

const createContacts = (request, response) => {
    const data = request.body

    pool.query('INSERT INTO contacts (user_id, full_name, position, email, phone_number, linkedin_url, notes) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [data.user_id, data.full_name, data.position, data.email, data.phone_number, data.linkedin_url, data.notes],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(201).send(`Contact added with ID: ${results.insertId}`)
        });
};

const updateContacts = (request, response) => {
    const id = parseInt(request.params.id)
    const data = request.body

    pool.query(
        'UPDATE contacts SET full_name = $1, position = $2, email = $3, phone_number = $4, linkedin_url = $5, notes = $6 WHERE contact_id = $7',
        [data.full_name, data.position, data.email, data.phone_number, data.linkedin_url, data.notes, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Contact modified with ID: ${id}`)
        });
};

const deleteContacts = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM contacts WHERE contact_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Contact deleted with ID: ${id}`);
    });
};

module.exports = {
    getContacts,
    createContacts,
    updateContacts,
    deleteContacts
};