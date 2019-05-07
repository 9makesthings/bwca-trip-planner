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
                    ORDER BY "code";`;

    pool.query( sqlText )
        .then( (result) => {
            res.send( result.rows );
        })
        .catch( (error) => {
            console.log( `Couldn't get equipment list.`, error );
            res.sendStatus(500);
        })
});

// POST packlist
router.post( '/:id', rejectUnauthenticated, (req, res) => {
    let trip_id = req.params.id;
    
    let equipment = req.body;

    for( let i=0; i < equipment.length; i++ ){
        
        let name = equipment[i].name;
        let status = equipment[i].status;
        
        let sqlText = `INSERT INTO "packlist" ("equipment_name", "status", "trip_plan_id")
                    VALUES ( $1, $2, $3);`;
        pool.query( sqlText, [ name, status, trip_id ] )
            .then( (response) => {
                res.sendStatus(201);
            })
            .catch( (error) => {
                console.log( `Couldn't save meal plan.`, error );
                res.sendStatus(500);
            })
    }
})


// GET packlist by tripID for ViewDetails page
router.get('/packlist/:id', rejectUnauthenticated, (req, res) => {
    const id = req.params.id;
    console.log( `in GET packlist by id...`, id );
    
    let sqlText = `SELECT * FROM "packlist"
                    WHERE "trip_plan_id"=$1
                    ORDER BY "id";`;

    pool.query( sqlText, [id] )
        .then( (result) => {
            res.send( result.rows );
        })
        .catch( (error) => {
            console.log( `Couldn't get packlist by id.`, error );
            res.sendStatus(500);
        })
});

// UPDATE packlist from ViewTripDetails page
router.put( '/:id', (req, res) => {
    let trip_id = req.params.id;
    let equipmentList = req.body;
    // console.log( `EQUIPMENT:`, req.body.packlist );
    
    for( let i=0; i < equipmentList.length; i++ ){
        
        let name = equipmentList[i].name;
        let status = equipmentList[i].status;
        
        let sqlText = `UPDATE "packlist"
                    SET "status" = $1
                    WHERE "trip_plan_id" = $2
                    AND "equipment_name" = $3;`;

        pool.query( sqlText, [ status, trip_id, name ] )
            .then( (response) => {
                console.log( `Equipment updated` );
                res.sendStatus(200);
            })
            .catch( (error) => {
                console.log( `Couldn't save updated packlist.`, error );
                res.sendStatus(500);
            })
    }
})


module.exports = router;