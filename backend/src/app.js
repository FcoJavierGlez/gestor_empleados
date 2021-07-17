import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import './database';

import employesRouter from './routes/employees.routes';

const app = express();

/* Config */
app.set( 'port', process.env.PORT || 3000 );

/* Middlewares */
app.use( cors() );
app.use( morgan('dev') );
app.use( express.json() ); //Permite a express entender datos en formato JSON
app.use( express.urlencoded( { extended: false } ) ); //Permite a express entender los datos recibidos de formularios HTML

/* Routes */
app.use( '/api/employees', employesRouter );

export default app;