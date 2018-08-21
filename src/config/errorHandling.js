import Err from './error';
import { env } from './conf';

/**
 * @function {error} - return error on development only
 * @param {object} message - error info
 */
const handler = (err, req, res, next) => {
  const response = {
    message: err.message,
    stack: err.stack,
    code: err.status,
    errors: err.errors,
  };
  if (env !== 'development') {
    delete response.stack;
  }
  res.status(err.status);
  res.send(response);
  res.end();
};

/**
 *
 * @function  {function} - conver error to Err type and return it
 * @param {object} convert - object to act as Err
 */
// const converter = (err, req, res, next) => {
//   console.log(err instanceof Error);

//   let convert = err;
//   if (!(err instanceof Err)) {
//     convert = new Err({
//       message: err.message,
//       status: err.status,
//       stack: err.stack,
//     });
//   }
//   console.log(convert);
//   return handler(convert, req, res);
// };

/**
 * @function {function} handler - return notFOund error
 * @param {object} err hold the error
 *
 */
const notFound = (req, res, next) => {
  const err = new Err({ message: 'not found -___-', status: 404 });
  return handler(err, req, res);
};

export default {
  handler, notFound,
};
