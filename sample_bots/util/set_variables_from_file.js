"use strict";

// JSON file structure:
// {
//    <variablename>: <value>,
//    <variablename>: <value>
//    ...
// }

module.exports = {

    metadata: () => ({
        "name": "SetVariablesFromFile",
        "properties": {
            "filename": { "type": "string", "required": true }
        },
        "supportedActions": [
        ]
    }),

    invoke: (conversation, done) => {
        console.info('SetVariablesFromFile: using filename=' + conversation.properties().filename);

        var fileContents = require('./' + conversation.properties().filename);
        for (var variable in fileContents) {
            var value = fileContents[variable];
            conversation.variable(variable, value);
            console.info('SetVariablesFromFile: set var ' + variable + '=' + value);
        }
        conversation.transition();

        done();
    }
};
