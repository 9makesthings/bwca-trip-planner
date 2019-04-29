const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET meals
 */
router.get('/:id', rejectUnauthenticated, (req, res) => {
    let trip_id = req.params.id;

    let sqlText = `SELECT * FROM "meal_plan"
                    WHERE "trip_plan_id" = $1
                    ORDER BY "day";`;

    pool.query( sqlText, [trip_id] )
        .then( (result) => {
            res.send( result.rows );
        })
        .catch( (error) => {
            console.log( `Couldn't get meal list.`, error );
            res.sendStatus(500);
        })
});

// POST meal plan
router.post( '/:id', rejectUnauthenticated, (req, res) => {
    let trip_id = req.params.id;
    console.log( `trip_id is:`, trip_id );
    let mealplan = req.body.mealPlan;

    for( let i=0; i < mealplan.length; i++ ){
        console.log( `Each day:`, mealplan[i] );
        
        let day = mealplan[i].day;
        let breakfast = mealplan[i].breakfast;
        let lunch = mealplan[i].lunch;
        let dinner = mealplan[i].dinner;
        let sqlText = `INSERT INTO "meal_plan" ("day", "breakfast", "lunch", "dinner", "trip_plan_id")
                    VALUES ( $1, $2, $3, $4, $5);`;
        pool.query( sqlText, [ day, breakfast, lunch, dinner, trip_id] )
            .then( (response) => {
                res.sendStatus(201);
            })
            .catch( (error) => {
                console.log( `Couldn't save meal plan.`, error );
                res.sendStatus(500);
            })
    }
})

module.exports = router;