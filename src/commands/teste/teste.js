import CommandBase from '../../Structures/Bases/CommandBase.js';

export default class extends CommandBase {
    constructor() {
        super();

        this.name = this.getName('teste1');
        this.description = 'teste';
    }

    callback(interaction) {
        interaction.reply('teste');
    }
}