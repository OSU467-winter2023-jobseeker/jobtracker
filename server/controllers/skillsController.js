const authorization = require('../middleware/authorization');
const Pool = require('../db/db');
const pool = Pool.pool;

async function getSkills (request, response) {
    const userId = await authorization.checkToken(request, true);
    const applications = [];

    pool.query('SELECT a.application_id FROM applications a INNER JOIN users u ON u.user_id = a.user_id WHERE a.user_id = $1 ORDER BY a.created_at DESC',
        [request.params.id],
        (error, results) => {
            if (error) {
                throw error
            }
            console.log(results.rows)
            return;
    });

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

async function createSkills (applicationId, skills) {
    const skillList = skills.split(', ');
    for (const skill in skillList) {
        const newSkill = await createSkill(applicationId, skill);
        console.log(newSkill);
    }
}

async function createSkill (applicationId, skill) {
    
    pool.query('INSERT INTO skills (application_id, skill, comfort_level) VALUES ($1, $2, $3)',
        [applicationId, skill, '5'],
        (error, results) => {
            if (error) {
                throw error;
            }
            console.log(results);
            return results;
        }
    );
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
    createSkills
};