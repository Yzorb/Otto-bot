import { REST, Routes } from 'discord.js';
import logger from '../Structures/helpers/logger.js';

export default async ({
    version,
    clientId,
    commands,
    token
}) => {
    try {
        const rest = new REST({
            version
        }).setToken(token);

        await rest.put(Routes.applicationCommands(clientId), {
            body: commands
        });
    } catch (error) {
        logger.error(error.stack);
    }
};