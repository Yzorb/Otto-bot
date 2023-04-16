import { load } from 'js-yaml';
import { readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import logger from '../../../Structures/helpers/logger.js';
import { LanguagesOptions } from '../../../resources/constants/constants.js';

export default (prefix, language, { args }) => {
    try {
        if (!language || !LanguagesOptions[language]) {
            language = LanguagesOptions.default;
        }

        const absolut = resolve(`src/resources/languages/${language}`);
        const folders = readdirSync(absolut);

        for (const folder of folders) {
            const files = readdirSync(resolve(`src/resources/languages/${language}/${folder}`));

            for (const file of files) {
                const options = load(readFileSync(`src/resources/languages/${language}/${folder}/${file}`));

                if (options[prefix] && options[prefix].response) {
                    const text = options[prefix].response;

                    const match = text.match(/@{([\w\W]+?)}/g);

                    return match
                        ? match.reduce((one, two) => one.replace(two, args[two.match(/@{([\w\W]+?)}/)[1]]), text)
                        : text;
                }
            }
        }
    } catch (error) {
        logger.error(error.stack);
    }
};