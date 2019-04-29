const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();


// POST for "save" of new trip information
router.post('/', rejectUnauthenticated, (req, res) => {
    let user_id = req.body.user_id;
    let name = req.body.name;
    let number_days = req.body.number_days;
    let group_size = req.body.group_size;
    let difficulty = req.body.difficulty;
    let route_id = req.body.route_id;
    console.log( `in POST for save trip`, user_id );
    
    let sqlText = `INSERT INTO "trip_plan" ("user_id", "name", "number_days", "group_size", "difficulty", "route_id")
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING "id";`;

    pool.query( sqlText, [user_id, name, number_days, group_size, difficulty, route_id] )
        .then( (result) => {
            res.send( result.rows );
            pool.query
        })
        .catch( (error) => {
            console.log( `Couldn't save trip.`, error );
            res.sendStatus(500);
        })
});

// GET all trips saved by the user
router.get('/:user_id', rejectUnauthenticated, (req, res) => {
    const user_id = req.params.user_id;
    console.log( `in GET trip by user_id...`, user_id );
    
    let sqlText = `SELECT * FROM "trip_plan" 
                    WHERE "user_id" = $1
                    ORDER BY "id";`;

    pool.query( sqlText, [user_id] )
        .then( (result) => {
            res.send( result.rows );
        })
        .catch( (error) => {
            console.log( `Couldn't get trip plans by user_id.`, error );
            res.sendStatus(500);
        })
});

// DELETE trip by trip id
router.delete('/:trip_id', rejectUnauthenticated, (req, res) => {
    const trip_id = req.params.trip_id;
    console.log( `in DELETE trip by trip_id...`, trip_id );
    
    let sqlText = `DELETE FROM "trip_plan" 
                    WHERE "id" = $1;`;

    pool.query( sqlText, [trip_id] )
        .then( (result) => {
            console.log( `Delete successful!` );
            res.send( result.rows );
        })
        .catch( (error) => {
            console.log( `Couldn't delete trip.`, error );
            res.sendStatus(500);
        })
});

// GET trip by ID for ViewDetails page
router.get('/trip_details/:id', rejectUnauthenticated, (req, res) => {
    const id = req.params.id;
    console.log( `in GET trip by id...`, id );
    
    let sqlText = `SELECT * FROM "trip_plan"
                    WHERE "id"=$1;`;

    pool.query( sqlText, [id] )
        .then( (result) => {
            res.send( result.rows );
        })
        .catch( (error) => {
            console.log( `Couldn't get trip plan by id.`, error );
            res.sendStatus(500);
        })
});


module.exports = router;