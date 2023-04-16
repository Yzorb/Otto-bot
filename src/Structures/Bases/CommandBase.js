import { description, name, response } from '../../modules/language/language.js';

export default class {
    #otto;
    #interaction;

    constructor(otto, interaction) {
        this.#otto = otto;
        this.#interaction = interaction;
        this.getName = name;
        this.getDescription = description;
        this.getResponse = response;
    }

    handlerError(commandError) {
        try {
            this.#interaction.editReply(commandError.message);
            this.#otto.logger.error(commandError.stack);
        } catch (error) {
            this.#otto.logger.error(error.stack);
        }
    }
}