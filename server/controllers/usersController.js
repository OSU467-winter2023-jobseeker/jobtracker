const authorization = require('../middleware/authorization');
const Pool = require('../db/db');
const pool = Pool.pool;

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY created_at DESC', (error, results) => {
        // console.log(request);
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    });
};

/// create getUser function that takes in userId and returns user object
const getUser = (userId) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM users WHERE user_id = $1', [userId], (error, results) => {
            if (error) {
                reject(error);
            }   
            resolve(results.rows[0]);
        })
    })
}


const insertUsers = (request, response) => {
    const data = request;
    console.log(data)
    pool.query('INSERT INTO users (user_id, full_name, email ) VALUES ($1, $2, $3)',
        [data.user_id, data.full_name, data.email],
        (error, results) => {
            if (error) {
                throw error
            }
            return `User added with ID: ${results.insertId}`;
        }
    );
};

const updateUsers = (request, response) => {
    const data = request.body;

    pool.query('UPDATE users SET full_name = $1, email = $2 WHERE user_id = $3',
        [data.full_name, data.email, data.user_id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(201).send(`User modified with ID: ${data.user_id}`);
        }
    );
};

const deleteUsers = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('DELETE FROM users WHERE user_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User deleted with ID: ${id}`);
    });

};

module.exports = {
    getUsers,
    insertUsers,
    updateUsers,
    deleteUsers,
    getUser
};