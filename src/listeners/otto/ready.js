import StatusManager from '../../modules/StatusManager.js';

export default {
	name: 'ready',
	callback: (otto) => {
		try {
			StatusManager(otto);
		} catch (error) {
			otto.logger.error(error.stack);
		}
	}
};