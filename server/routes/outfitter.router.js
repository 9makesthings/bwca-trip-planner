const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET routes
 */
router.get('/', (req, res) => {
    
    let sqlText = `SELECT * FROM "outfitter"
                    ORDER BY "id";`;

    pool.query( sqlText )
        .then( (result) => {
            res.send( result.rows );
        })
        .catch( (error) => {
            console.log( `Couldn't get outfitters.`, error );
            res.sendStatus(500);
        })
});


module.exports = router;