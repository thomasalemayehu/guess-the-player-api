const express = require('express');
const cors = require('cors');
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();
require('express-async-errors');
const connectToDB = require('./config/db.config');

const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors());
app.use(express.json());

// import routes
const sessionRoutes = require('./routes/session.routes');
const playerRoutes = require('./routes/player.routes');
const teamRoutes = require('./routes/team.routes');

// import middlewares
const errorMiddleware = require('./middlewares/error.middleware');
const unknownMiddleware = require('./middlewares/unknown.middleware');

//
app.get('/', (request, response) => {
  response.send('Server is live');
});
app.use('/api/v1', sessionRoutes);
app.use('/api/v1', playerRoutes);
app.use('/api/v1', teamRoutes);

app.use(unknownMiddleware);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server is live ${PORT}`);
  connectToDB();
  console.log('Successfully connected to MongoDB');
});
