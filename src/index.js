import Otto from './Structures/Clients/Otto.js';
import Config from './Structures/helpers/config/config.js';

new Config({
    debug: true,
    override: true,
    loggerName: '*'
});

const otto = new Otto();

otto.loadListeners();

otto.connect();