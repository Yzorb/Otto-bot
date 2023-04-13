export default (otto, interaction, commandsOptions) => {
    try {
        const {
            commandName
        } = interaction;

        const {
            name,
            callback
        } = commandsOptions;

        if (commandName === name) {
            callback(interaction);
        }
    } catch (error) {
        otto.logger.error(error.stack);
    }
};