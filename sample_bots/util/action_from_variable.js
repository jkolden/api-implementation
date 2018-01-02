"use strict";

module.exports = {

    metadata: () => ({
        "name": "ActionFromVariable",
        "properties": {
            "variable": { "type": "string", "required": true }
        },
        "supportedActions": [
        ]
    }),

    invoke: (conversation, done) => {
        console.info('ActionFromVariable: var=' + conversation.properties().variable);
        var value = conversation.variable(conversation.properties().variable);
        console.info('ActionFromVariable: setting action=' + value);
        conversation.transition(value);
        done();
    }
};
