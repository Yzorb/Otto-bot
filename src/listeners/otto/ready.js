import CommandBuild from '../../modules/CommandBuild.js';

export default {
    name: 'ready',
    callback: async (otto) => {
        try {
            CommandBuild({
                version: '10',
                clientId: otto.user.id,
                commands: await otto.loadCommands(),
                token: otto.env.OTTO_TOKEN
            });
        } catch (error) {
            otto.logger.error(error.stack);
        }
    }
};