const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET equipment
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    
    let sqlText = `SELECT * FROM "equipment"
                    WHERE "type" = 'shared'
                    ORDER BY "code"
                    LIMIT 5;`;

    pool.query( sqlText )
        .then( (result) => {
            res.send( result.rows );
        })
        .catch( (error) => {
            console.log( `Couldn't get equipment list.`, error );
            res.sendStatus(500);
        })
});


module.exports = router;