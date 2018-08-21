
/**
 *  @class {errorExtends} - extend from error class
 */
class errorExtent extends Error {
	/**
	 *
	 * @param {String} message - error  message
	 * @param {number} status  - http status code
	 * @param {string} stack --stack error
	 * @param {boolean} isPublic - is it public (user can seen it ) or not not by default
	 */
	constructor({
		message, status, stack, errors, isPublic,
	}) {
		super(message);
		this.message = message;
		this.status = status;
		this.errors = errors;
		this.stack = stack;
		this.isPublic = isPublic;
		this.name = this.constructor.name;
	}
}


/**
 * @class {myErrorHandler}
 *
 */
export default class myErrorHandler extends errorExtent {
	constructor({
		message, stack, isPublic, errors, status,
	}) {
		super({
			message, stack, status, errors, isPublic,
		});
	}
}
