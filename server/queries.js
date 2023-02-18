// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'me',
//   host: 'localhost',
//   database: 'api',
//   password: 'password',
//   port: 5432,
// })


const getApplications = (request, response) => {
    pool.query('SELECT * FROM applications ORDER BY created_date DESC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createApplication = (request, response) => {
    const { x, y } = request.body

    pool.query('INSERT INTO applications (x, y) VALUES ($1, $2)', [x, y], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Application added with ID: ${results.insertId}`)
    })
}

const updateApplication = (request, response) => {
    const id = parseInt(request.params.id)
    const { x, y } = request.body

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