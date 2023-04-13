export default class CommandBase {
    constructor() {}

    getName(name) {
        const names = {
            teste1: 'teste-1',
            teste2: 'teste-2'
        };

        return names[name];
    }
}