"use strict"

module.exports = {

    metadata: () => ({
        "name": "AgeChecker",
        "properties": {
            "minAge": { "type": "integer", "required": true }
        },
        "supportedActions": [
            "allow",
            "block"
        ]
    }),

    invoke: (conversation, done) => {
        // Parse a number out of the incoming message
        const text = conversation.text();
        const matches = text.match(/\d+/);
        var age = 0;
        if (matches) {
            age = matches[0];
        }

        console.info('AgeChecker: using age=' + age);

        // Set action based on age check
        conversation.transition( age >= 18 ? 'allow' : 'block' );

        done();
    }
};