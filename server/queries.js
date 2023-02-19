const dotenv = require('dotenv');
dotenv.config();

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: process.env.DB_HOST,
  database: 'postgres',
  password: process.env.DB_PASS,
  port: 5432,
})


const getApplications = (request, response) => {
    pool.query('SELECT * FROM applications ORDER BY created_at DESC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createApplication = (request, response) => {
    const data = request.body

    pool.query('INSERT INTO applications (contact_id, employer, employment_type, application_status, application_deadline, location, url, skills, notes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', 
    [data.contact_id, data.employer, data.employment_type, data.application_status, data.application_deadline, data.location, data.url, data.skills, data.notes], 
    (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Application added with ID: ${results.insertId}`)
    })
}

const updateApplication = (request, response) => {
    const id = parseInt(request.params.id)
    const data = request.body

    pool.query(
        'UPDATE applications SET x = $1, y = $2 WHERE id = $3',
        [x, y, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Application modified with ID: ${id}`)
        }
    )
}


const deleteApplication = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM applications WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Application deleted with ID: ${id}`)
    })
}


module.exports = {
    getApplications,
    createApplication,
    updateApplication,
    deleteApplication
}