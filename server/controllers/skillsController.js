const authorization = require('../middleware/authorization');
const Pool = require('../db/db');
const pool = Pool.pool;

async function getSkills (request, response) {
    const userId = await authorization.checkToken(request, true);
    var applications = [];

    pool.query('SELECT s.skill, a.employer FROM skills s INNER JOIN (SELECT a.application_id, a.employer FROM applications a WHERE a.user_id = $1) a ON a.application_id = s.application_id ORDER BY s.created_at DESC',
        [userId],
        (error, results) => {
            if (error) {
                throw error
            }
            const skillsResults = analyzeSkills(results.rows);
            console.log(skillsResults);
            response.status(200).json(skillsResults);
    });

};

function analyzeSkills (skillsQuery) {
    var skillsResults = {}
    var apps = [];
    
    for (const skillPair in skillsQuery) {
        const currentSkill = skillsQuery[skillPair].skill;
        const currentEmployer = skillsQuery[skillPair].employer;
        if (!(currentSkill in skillsResults)) {
            skillsResults[currentSkill] = {skillPercent: 1, applications: [currentEmployer]};
        } else {
            skillsResults[currentSkill].skillPercent += 1;
            skillsResults[currentSkill].applications.push(currentEmployer);
        }

        if (!apps.includes(currentEmployer)) {apps.push(currentEmployer)};
    }

    const appCount = apps.length;

    for (const skill in skillsResults) {
        const skillCount = skillsResults[skill].skillPercent;
        skillsResults[skill].skillPercent = (100 * skillCount / appCount).toFixed(0); 
    }

    return skillsResults;
}

const getSkill = (request, response) => {
    pool.query('SELECT s.* FROM skills s INNER JOIN applications a ON a.application_id = s.application_id WHERE s.application_id = $1 ORDER BY s.created_at DESC', 
        [request.params.id], 
        (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).json(results.rows);
        }
    );
};

/**
 * Take the string of skills inserted into applications and 
 * create a new Skill object for each.
 */
async function createSkills (applicationId, skills) {
    const skillList = skills.split(', ');
    for (const skill in skillList) {
        const newSkill = await createSkill(applicationId, skillList[skill]);
    }
}

/**
 * Create a single new skill entity.
 */
async function createSkill (applicationId, skill) {
    pool.query('INSERT INTO skills (application_id, skill, comfort_level) VALUES ($1, $2, $3)',
        [applicationId, skill, '5'],
        (error, results) => {
            if (error) {
                throw error;
            }
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