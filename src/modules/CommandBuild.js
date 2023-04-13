import { REST, Routes } from 'discord.js';

export default async (otto) => {
    try {
        const rest = new REST({
            version: '10'
        }).setToken(otto.env.OTTO_TOKEN);

        const commands = await otto.loadCommands();

        await rest.put(
            Routes.applicationGuildCommands(otto.user.id, '1094973510272700436'),
            { body: commands },
        );
    } catch (error) {
        otto.logger.error(error.stack);
    }
};