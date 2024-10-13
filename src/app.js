import express from 'express';
import cookieParser from 'cookie-parser';
import database from './utils/database.js';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import errorHandler from './middleware/errorHandler.js';
import mocksRouter from './routes/mocks.router.js';

const app = express();
const PORT = process.env.PORT||8080;

database();

app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use('/api/mocks',mocksRouter)

app.use(errorHandler);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
