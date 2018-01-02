"use strict";

module.exports = {

    metadata: () => ({
        "name": "OutputVariables",
        "properties": {
            "variables": { "type": "string", "required": true }
        },
        "supportedActions": [
        ]
    }),

    invoke: (conversation, done) => {
        console.info('OutputVariables: ' + conversation.properties().variables);

        var variables = conversation.properties().variables.split(',');
        variables.forEach( (variable) => {
            conversation.reply('' + variable + '=' + conversation.variable(variable));
        });

        // Sending replies and done afterwards
        conversation.keepTurn(false).transition();

        // TODO: support for continuing flow w/o input

        done();
    }
};
