"use strict";

module.exports = {

    metadata: () => (
        {
            "name": "SayHello",
            "properties": {
                "name": { "type": "string", "required": true }
            },
            "supportedActions": []
        }
    ),

    invoke: (conversation, done) => {
        const name = conversation.properties().name;


        console.info('Retrieved name:', name);

        conversation.reply({ text: 'Hi ' + name + '.' } );
        conversation.reply({ text: 'I am a simple bot running inside the OMCe node container.' } );
        conversation.reply({ text: 'The OMCe node container gives you access to all OMCe plataform services, including Connectors, Database, App Polices and more.' });
        conversation.reply({ text: 'Check it out at http://www.oracle.com/pls/topic/lookup?ctx=en/cloud/paas/mobile-suite&id=MSUDG-GUID-27778194-E8A5-42B3-B587-02009731BD6D' });

        // accessing  OMCe plataform services via custom code SDK using conversation.oracleMobile.
        // See Calling OMCe APIs from Custom Code at
        // http://www.oracle.com/pls/topic/lookup?ctx=en/cloud/paas/mobile-suite&id=MSUDG-GUID-27778194-E8A5-42B3-B587-02009731BD6D
        conversation.reply({ text: 'By the way, the API producing these messages is referenced by a backend called ' + conversation.oracleMobile.mbe.getMBE().name + '.' });
        conversation.transition();
        done();
    }
};
