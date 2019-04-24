const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET routes
 */
router.get('/:difficulty/:days', rejectUnauthenticated, (req, res) => {
    const difficulty = req.params.difficulty;
    const days = req.params.days;
    console.log( `in GET tripRoute...`, difficulty, days );
    
    
    // use WHERE with difficulty, days > min & < max
    // to get routes specific to user's preferences
    let sqlText = `SELECT * FROM "route" 
                    WHERE "difficulty"=$1
                    AND "min_days" <= $2
                    AND "max_days" >= $2
                    ORDER BY "id";`;

    pool.query( sqlText, [difficulty, days] )
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