import { Client } from 'discord.js';
import logger from '../helpers/logger.js';
import { ClientOptions } from '../../resources/constants/constants.js';

export default class Otto extends Client {
	constructor() {
		super(ClientOptions);
	}

	async connect() {
		try {
			this.login(process.env.OTTO_TOKEN) 
				.then(() => {
					logger.info(`${this.user.username} connected in process ${process.pid}`);
				});
		} catch (error) {
			logger.error(error.stack);
		}
	}
}