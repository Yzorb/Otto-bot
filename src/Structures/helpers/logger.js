import debug from 'debug';
import { workNameSpace } from '../../resources/constants/constants.js';

const DebugDefault = debug(workNameSpace);

export default {
    info: (content) => {
        DebugDefault.extend('info')(content);
    },
    error: (content) => {
        DebugDefault.extend('error')(content);
    },
    warn: (content) => {
        DebugDefault.extend('warn')(content);
    },
    debug: (content) => {
        DebugDefault.extend('debug')(content);
    }
};