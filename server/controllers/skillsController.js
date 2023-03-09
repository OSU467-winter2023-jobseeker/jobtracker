const authorization = require('../middleware/authorization');
const Pool = require('../db/db');
const pool = Pool.pool;

/**
 * Get all skills for the user along with some data on their frequency.
 */
async function getSkills (request, response) {
    const userId = await authorization.getUserId(request);

    pool.query('SELECT s.skill, s.comfort_level, a.employer FROM skills s INNER JOIN (SELECT a.application_id, a.employer FROM applications a WHERE a.user_id = $1) a ON a.application_id = s.application_id ORDER BY s.created_at DESC',
        [userId],
        (error, results) => {
            if (error) {
                throw error;
            }
            const skillsResults = analyzeSkills(results.rows);
            response.status(200).json(skillsResults);
    });

};

/**
 * Take the row results from a sql skills query and return a new
 * object containing analysis of each skill and how many times
 * it appears across a user's applications.
 */
function analyzeSkills (skillsQuery) {
    var skillsResults = {};
    var apps = [];
    
    // 
    for (const skillPair in skillsQuery) {
        const currentSkill = skillsQuery[skillPair].skill;
        const currentEmployer = skillsQuery[skillPair].employer;
        if (!(currentSkill in skillsResults)) {
            skillsResults[currentSkill] = {
                skill: currentSkill,
                skillPercent: 1,
                comfortLevel: skillsQuery[skillPair].comfort_level,
                applications: [currentEmployer
            ]};
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
};

/**
 * Update the comfort level of all skill objects that match the given skill..
 */
async function updateSkills (request, response) {
    const userId = await authorization.checkToken(request, true);
    const data = request.body;

    pool.query('UPDATE skills SET comfort_level = $1 from applications where skills.skill = $2 and applications.application_id = skills.application_id and applications.user_id = $3',
        [data.comfortLevel, data.skill.toLowerCase(), userId],
        (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).json(results.rows);
    });

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
};

/**
 * Create a single new skill entity.
 */
async function createSkill (applicationId, skill) {
    pool.query('INSERT INTO skills (application_id, skill, comfort_level) VALUES ($1, $2, $3)',
        [applicationId, skill.toLowerCase(), 'No experience'],
        (error, results) => {
            if (error) {
                throw error;
            }
            return results;
        }
    );
};

/**
 * Delete all skills with the given application_id.
 */
async function deleteSkills (applicationId) {
    pool.query('DELETE FROM skills WHERE application_id = $1',
        [applicationId], 
        (error, results) => {
            if (error) {
                throw error
            }
            return results;
        }
    );
};

module.exports = {
    getSkills,
    createSkills,
    deleteSkills,
    updateSkills
};