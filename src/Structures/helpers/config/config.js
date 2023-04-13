import DebugLogger from 'debug';
import dotenv from 'dotenv';
import { workNameSpace } from '../../../resources/constants/constants.js';
import logger from '../logger.js';
export default class Config {
    constructor(options = {
        workSpace: workNameSpace,
        debug: Boolean,
        override: Boolean,
        loggerName: String
    }) {
        this.workSpace = options.workSpace || workNameSpace;
        this.debug = options.debug;
        this.override = options.override;
        this.loggerName = options.loggerName;

        this.#LoggerEnable();
        this.#DotEnvConfig();
    }

    #LoggerEnable() {
        const loggerPrefix = this.loggerName ? this.loggerName : '*';

        DebugLogger
            .enable(`${this.workSpace}:${loggerPrefix}`);
    }

    #DotEnvConfig() {
        const result = dotenv	
            .config({
                debug: this.debug,
                override: this.override
            });

        if (result.parsed) {
            logger.info('Environment variables have been set successfully!');
        } else {
            logger.info(`Error setting environment variables: ${result.error}`);
        }
    }
}