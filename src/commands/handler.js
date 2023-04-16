export default (otto, interaction, commandsOptions) => {
    try {
        const {
            commandName
        } = interaction;

        if (commandName === commandsOptions.name) {
            commandsOptions.callback();
        }
    } catch (error) {
        otto.logger.error(error.stack);
    }
};