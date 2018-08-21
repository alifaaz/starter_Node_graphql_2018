import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
// import passport from 'passport';
import { logs } from './conf';
import error from './errorHandling';
import Err from './error';
// import { JWT } from '../features/USERS/user.passport';
// import userRouters from '../features/USERS/user.routers';

const router = express.Router()
const app = express();
// logger dev : console | prod : file
app.use(morgan(logs));

// compressioon using nginx

// parse body && params and assign it to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// secure app using helmet
app.use(helmet());

// allw enable cros oringn  resources sharing
app.use(cors());
// authintication and authorizaton
// usuing passport
// app.use(passport.initialize());
// passport.use('jwt', JWT);
// passport.use('facebosok')
// passport.use('google')

// routers
// router.use('/users/', userRouters)
console.log(router)
// app.route
app.use(router)
app.get('/', (req, res) => { res.send({ msg: 'hello this is me' }); });
app.get('/err', (req, res, next) => {

	next(new Err({ message: 'this is bad test me out hahahah', status: 401 }));

});

// convert error to ErrorHanling type if not
// app.use(error.converter);

// error handling notFOUnd resources
app.use(error.notFound);

// app.use(error.hanling)
app.use(error.handler);
export default app;
