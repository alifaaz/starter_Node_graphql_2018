import mongoose from 'mongoose';
import log from 'console-emoji';
import { mongo, env } from './conf';

// exit with error
mongoose.connection.on('error', (err) => {
  log(`mongodb error ${err}`, 'err');
});

// console log the error in development env

if (env === 'development') {
  mongoose.set('debug', true);
}


/**
 * connect to db
 *
 * @return {object} - connection object
 * @public
 */


export default () => {
  mongoose.connect(mongo.uri, {
    /**
 * @keepAlive - to send packet every 120ms to checkk conectivity
 * @poolSize - number of socket to run operation on dbs
 * @reconntTries - number of tried connection after its drop
 * @reconnctInterval - time by ms of try to connect when its drop
 */
    keepAlive: 120,
    poolSize: 10,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,

  });
  return mongoose.connection;
};
