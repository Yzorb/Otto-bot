import CommandBuild from '../../modules/CommandBuild.js';
import StatusManager from '../../modules/StatusManager.js';

export default {
    name: 'ready',
    callback: (otto) => {
        try {
            StatusManager(otto);
            CommandBuild(otto);
        } catch (error) {
            otto.logger.error(error.stack);
        }
    }
};