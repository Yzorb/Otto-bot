export default {
    name: 'interactionCreate',
    callback: (otto, interaction) => {
        try {
            if (interaction.isChatInputCommand()) return otto.loadCommands(interaction);
        } catch (error) {
            otto.logger.error(error.stack);
        }
    }
};