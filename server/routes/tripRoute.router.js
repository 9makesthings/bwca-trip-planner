const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET routes
 */
router.get('/', (req, res) => {
    
    // use WHERE with difficulty, days > min & < max
    // to get routes specific to user's preferences
    let sqlText = `SELECT * FROM "route" ORDER BY "id";`;

    pool.query( sqlText )
        .then( (result) => {
            res.send( result.rows );
        })
        .catch( (error) => {
            console.log( `Couldn't get trip routes.`, error );
            res.sendStatus(500);
        })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;