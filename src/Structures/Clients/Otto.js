import { Client } from 'discord.js';
import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { ClientOptions } from '../../resources/constants/constants.js';
import logger from '../helpers/logger.js';

export default class Otto extends Client {
	constructor() {
		super(ClientOptions);

		this.logger = logger;
	}

	async loadListeners() {
		try {
			const folders = readdirSync(resolve('src/listeners'));

			for (const folder of folders) {
				const files = readdirSync(resolve(`src/listeners/${folder}`));

				for (const file of files) {
					const {
						name,
						plataform,
						once,
						callback
					} = (await import(`../../listeners/${folder}/${file}`)).default;

					switch (plataform) {
					default:
						if (once) {
							this.once(name, (...args) => callback(this, ...args));
						} else {
							this.on(name, (...args) => callback(this, ...args));
						}
						break;
					case 'process':
						if (once) {
							process.once(name, (...args) => callback(this, ...args));
						} else {
							process.on(name, (...args) => callback(this, ...args));
						}
						break;
					}
				}
			}
		} catch (error) {
			logger.error(error.stack);
		}
	}

	async connect(token = process.env.OTTO_TOKEN) {
		try {
			this.login(token)
				.then(() => {
					logger.info(`${this.user.username} connected in process ${process.pid}`);
				});
		} catch (error) {
			logger.error(error.stack);
		}
	}
}