import DebugLogger from 'debug';
import dotenv from 'dotenv';
import { workNameSpace } from '../../../resources/constants/constants.js';
import logger from '../logger.js';

export default class Config {
	constructor({
		workSpace = workNameSpace,
		debug,
		override
	}) {
		DebugLogger.enable(`${workSpace}:*`);

		const DotEnvResult = dotenv
			.config({
				debug,
				override
			});

		if (DotEnvResult.error) return logger.error(DotEnvResult.error);

		logger.info('Environment variables have been set successfully!');
	}
}