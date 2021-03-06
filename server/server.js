
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const tripRouter = require('./routes/trip.router');
const routeRouter = require('./routes/route.router');
const equipmentRouter = require('./routes/equipment.router');
const mealRouter = require('./routes/meal.router');
const outfitterRouter = require('./routes/outfitter.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/trip', tripRouter);
app.use('/api/route', routeRouter);
app.use('/api/equipment', equipmentRouter);
app.use('/api/meal', mealRouter);
app.use('/api/outfitter', outfitterRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
