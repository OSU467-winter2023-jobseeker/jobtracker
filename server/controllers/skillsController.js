const authorization = require('../middleware/authorization');
const Pool = require('../db/db');
const pool = Pool.pool;

const getSkill = (request, response) => {
    pool.query('SELECT s.* FROM skills s INNER JOIN applications a ON a.application_id = s.application_id WHERE s.application_id = $1 ORDER BY s.created_at DESC', 
        [request.params.id], 
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows);
        }
    );
};

const createSkill = (request, response) => {
    const data = request.body

    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO skills (application_id, skill, comfort_level) VALUES ($1, $2, $3)',
            [data.application_id, data.skill, data.comfort_level],
            (error, results) => {
                if (error) {
                    reject(error);
                }
                resolve(results.rows[0]);
            }
        )
    });
};

const deleteSkill = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM skills WHERE skills_id = $1', 
        [id], 
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Skill deleted with ID: ${id}`);
        }
    );
};

module.exports = {
    getSkills,
    createSkills,
    deleteSkills,
};