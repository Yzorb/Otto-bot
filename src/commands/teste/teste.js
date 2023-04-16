import CommandBase from '../../Structures/Bases/CommandBase.js';
export default class extends CommandBase {
    constructor(otto, interaction) {
        super(otto, interaction);

        this.otto = otto;
        this.interaction = interaction;

        this.name = this.getName('command_test');
        this.description = this.getDescription('command_test');
    }

    callback() {
        try {
            this.interaction.reply('teste');
        } catch (error) {
            this.handlerError(error);
        }
    }
}