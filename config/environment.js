/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    SHAMAR_CATEGORY: process.env.SHAMAR_CATEGORY,
    modulePrefix: 'shamar-cms',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      usingCors: false,
  		corsWithCreds: false,
  		apiURL: null
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV['ember-simple-auth'] = {
    authorizer: 'authorizer:oauth2'
  };

  ENV['ember-simple-auth-token'] = {
    identificationField: 'email',
    serverTokenEndpoint: '/api/accounts/login',
    authorizationPrefix: 'JWT ',
    authorizationHeaderName: 'Authorization',
    tokenPropertyName: 'data',
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'dev') {
    ENV.APP.usingCors = true;
		ENV.APP.corsWithCreds = true;
		ENV.APP.apiURL = 'http://shamar-dev.us-east-1.elasticbeanstalk.com';

    ENV['ember-simple-auth-token'] = {
      identificationField: 'email',
      serverTokenEndpoint: ENV.APP.apiURL + '/api/accounts/login'
    };
  }

  if (environment === 'localdev') {
    ENV.APP.usingCors = true;
		ENV.APP.corsWithCreds = true;
		ENV.APP.apiURL = 'http://localhost:5000';

    ENV['ember-simple-auth-token'] = {
      identificationField: 'email',
      serverTokenEndpoint: ENV.APP.apiURL + '/api/accounts/login'
    };
  }


  if (environment === 'test') {
    ENV.APP.usingCors = true;
		ENV.APP.corsWithCreds = true;
    ENV.APP.apiURL = 'http://localhost:5000';
    // Testem prefers this...
    // ENV.locationType = 'none';

    // keep test console output quieter
    // ENV.APP.LOG_ACTIVE_GENERATION = false;
    // ENV.APP.LOG_VIEW_LOOKUPS = false;

    // ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.locationType = 'hash';
    ENV.APP.usingCors = true;
		ENV.APP.corsWithCreds = true;
		ENV.APP.apiURL = 'http://shamar-dev.us-east-1.elasticbeanstalk.com';

    ENV['ember-simple-auth-token'] = {
      identificationField: 'email',
      serverTokenEndpoint: ENV.APP.apiURL + '/api/accounts/login'
    };
  }

  return ENV;
};
