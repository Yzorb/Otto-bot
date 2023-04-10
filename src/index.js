import Otto from './Structures/Clients/Otto.js';
import Config from './Structures/helpers/config/config.js';
import logger from './Structures/helpers/logger.js';

try {
	new Config({
		debug: true,
		override: true
	});

	const otto = new Otto();

	otto.connect();
} catch (error) {
	logger.error(error.stack);
}