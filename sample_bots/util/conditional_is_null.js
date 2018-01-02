"use strict";

module.exports = {

    metadata: () => ({
        "name": "ConditionalIsNull",
        "properties": {
            "variable": { "type": "string", "required": true }
        },
        "supportedActions": [
            "isnull",
            "isnotnull"
        ]
    }),

    invoke: (conversation, done) => {
        console.info('ConditionalIsNull: ' + conversation.properties().variable);

        var value = conversation.variable(conversation.properties().variable);
        console.info('ConditionalIsNull: checking value=' + value);
        if (value != null)
            conversation.transition("isnotnull");
        else
            conversation.transition("isnull");

        done();
    }
};
