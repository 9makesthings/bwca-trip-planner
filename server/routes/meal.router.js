const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET meals
 */
router.get('/breakfast', rejectUnauthenticated, (req, res) => {
    
    let sqlText = `SELECT * FROM "meal"
                    WHERE "type"='breakfast'
                    ORDER BY "code";`;

    pool.query( sqlText )
        .then( (result) => {
            res.send( result.rows );
        })
        .catch( (error) => {
            console.log( `Couldn't get meal list.`, error );
            res.sendStatus(500);
        })
});

router.get('/lunch', rejectUnauthenticated, (req, res) => {
    
    let sqlText = `SELECT * FROM "meal"
                    WHERE "type"='lunch'
                    ORDER BY "code";`;

    pool.query( sqlText )
        .then( (result) => {
            res.send( result.rows );
        })
        .catch( (error) => {
            console.log( `Couldn't get meal list.`, error );
            res.sendStatus(500);
        })
});

router.get('/dinner', rejectUnauthenticated, (req, res) => {
    
    let sqlText = `SELECT * FROM "meal"
                    ORDER BY "code";`;

    pool.query( sqlText )
        .then( (result) => {
            res.send( result.rows );
        })
        .catch( (error) => {
            console.log( `Couldn't get meal list.`, error );
            res.sendStatus(500);
        })
});

module.exports = router;