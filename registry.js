'use strict';

module.exports = {
    components: {
        'SayHello': require('./sample_bots/say_hello/say_hello'),

        'AgeChecker': require('./sample_bots/pizza/age_checker'),

        'BalanceRetrieval': require('./sample_bots/banking/balance_retrieval'),
        'FAQ': require('./sample_bots/banking/faq'),
        'Payments': require('./sample_bots/banking/payments'),
        'TrackSpending': require('./sample_bots/banking/track_spending'),
        'TransactionsRetrieval': require('./sample_bots/banking/transactions_retrieval'),

        'SetVariablesFromFile': require('./sample_bots/util/set_variables_from_file'),
        'SetVariableFromEntityMatches': require('./sample_bots/util/set_variable_from_entity_matches'),
        'ConditionalIsNull': require('./sample_bots/util/conditional_is_null'),

  }
};