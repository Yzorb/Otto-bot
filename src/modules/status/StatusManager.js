export default (otto) => {
    try {
        otto.user.setPresence({
            activities: [{
                name: 'The stars await us!',
                type: 3
            }]
        });
    } catch (error) {
        otto.logger.error(error.stack);
    }
};