const path = require('path');

exports.config = {
    runner: 'local',
    hostname: 'localhost',
    port: 4723,
    path: '/',
    user: 'webdriverio',
    key:  'xxxxxxxxxxxxxxxx-xxxxxx-xxxxx-xxxxxxxxx',

    region: 'us',
    headless: false,
    specs: [
        'test/spec/**',
    ],
    exclude: [
    ],
    maxInstances: 10,
    maxInstancesPerCapability: 10,
    //
    // Inserts WebdriverIO's globals (e.g. `browser`, `$` and `$$`) into the global environment.
    // If you set to `false`, you should import from `@wdio/globals`. Note: WebdriverIO doesn't
    // handle injection of test framework specific globals.
    //
    injectGlobals: true,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://docs.saucelabs.com/basics/platform-configurator
    //
    capabilities: [{
        'appium:platformName': 'iOS',
        'appium:deviceName': 'iPhone 15 Pro',
        'appium:platformVersion': '17.0',
        'appium:automationName': 'xcuitest',
        // 'appium:bundleId': 'com.adyen.mystore',
        'appium:app': path.join(process.cwd(), './app/MyStore.app')
    }],
    //
    // Additional list of node arguments to use when starting child processes
    execArgv: [],
    logLevel: 'info',
    logLevels: {
        webdriver: 'error',
        '@wdio/appium-service': 'error'
    },
    //
    // Set directory to store all logs into
    outputDir: __dirname,
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Set a base URL in order to shorten `url()` command calls. If your `url` parameter starts
    // with `/`, the `baseUrl` is prepended, not including the path portion of `baseUrl`.
    //
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the `baseUrl`
    // gets prepended directly.
    baseUrl: 'http://localhost:8080',
    //
    // Default timeout for all waitForXXX commands.
    waitforTimeout: 1500,
    //
    // Add files to watch (e.g. application code or page objects) when running `wdio` command
    // with `--watch` flag. Globbing is supported.
    filesToWatch: [
        // e.g. rerun tests if I change my application code
        // './app/**/*.js'
    ],
    //
    // Framework you want to run your specs with.
    // The following are supported: 'mocha', 'jasmine', and 'cucumber'
    // See also: https://webdriver.io/docs/frameworks.html
    //
    // Make sure you have the wdio adapter package for the specific framework installed before running any tests.
    framework: 'mocha',
    //
    // The number of times to retry the entire specfile when it fails as a whole
    specFileRetries: 1,
    // Delay in seconds between the spec file retry attempts
    specFileRetriesDelay: 0,
    // Whether or not retried spec files should be retried immediately or deferred to the end of the queue
    specFileRetriesDeferred: false,
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // See also: https://webdriver.io/docs/dot-reporter.html , and click on "Reporters" in left column
    reporters: [
        'spec',
    ],
    //
    // Options to be passed to Mocha.
    // See the full list at: http://mochajs.org
    mochaOpts: {
        ui: 'bdd'
    },
    //
    // Options to be passed to Jasmine.
    // See also: https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-jasmine-framework#jasmineopts-options
    jasmineOpts: {
        //
        // Jasmine default timeout
        defaultTimeoutInterval: 5000,
        //
        // The Jasmine framework allows it to intercept each assertion in order to log the state of the application
        // or website depending on the result. For example, it is pretty handy to take a screenshot every time
        // an assertion fails.
        expectationResultHandler: function(passed, assertion) {
            // do something
        },
        //
        // Make use of Jasmine-specific grep functionality
        grep: null,
        invertGrep: null
    },
    //
    // If you are using Cucumber you need to specify where your step definitions are located.
    // See also: https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-cucumber-framework#cucumberopts-options
    cucumberOpts: {
        require: [],        // <string[]> (file/dir) require files before executing features
        backtrace: false,   // <boolean> show full backtrace for errors
        compiler: [],       // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        dryRun: false,      // <boolean> invoke formatters without executing steps
        failFast: false,    // <boolean> abort the run on first failure
        snippets: true,     // <boolean> hide step definition snippets for pending steps
        source: true,       // <boolean> hide source URIs
        strict: false,      // <boolean> fail if there are any undefined or pending steps
        tagExpression: '',  // <string> (expression) only execute the features or scenarios with tags matching the expression
        timeout: 20000,     // <number> timeout for step definitions
        ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
        scenarioLevelReporter: false // Enable this to make webdriver.io behave as if scenarios and not steps were the tests.
    },
    // For convenience, if ts-node or @babel/register modules are detected
    // they are automatically loaded for config parsing so that TypeScript and
    // future ES features can be used in wdio configs, and are also
    // automatically loaded for test running so that tests can be written
    // using TypeScript and future ES features.
    // Because this may not be ideal in every situation, the following options
    // may be used to customize the loading for test running, incase it has
    // other requirements.
    autoCompileOpts: {
        //
        // To disable auto-loading entirely set this to false.
        autoCompile: true, // <boolean> Disable this to turn off autoloading. Note: When disabling, you will need to handle calling any such libraries yourself.
        //
        // If you have ts-node installed, you can customize how options are passed to it here:
        // Any valid ts-node config option is allowed. Alternatively the ENV Vars could also be used instead of this.
        // See also: https://github.com/TypeStrong/ts-node#cli-and-programmatic-options
        // See also RegisterOptions in https://github.com/TypeStrong/ts-node/blob/master/src/index.ts
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json'
        },
        // If @babel/register is installed, you can customize how options are passed to it here:
        // Any valid @babel/register config option is allowed.
        // https://babeljs.io/docs/en/babel-register#specifying-options
        babelOpts: {
            ignore: []
        },
    },
    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides a several hooks you can use to interfere the test process in order to enhance
    // it and build services around it. You can either apply a single function to it or an array of
    // methods. If one of them returns with a promise, WebdriverIO will wait until that promise is
    // resolved to continue.
    //
    /**
     * Gets executed once before all workers get launched.
     * @param {object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    onPrepare: function (config, capabilities) {
    },
    /**
     * Gets executed before a worker process is spawned and can be used to initialize specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {string} cid      capability id (e.g 0-0)
     * @param  {object} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {object} specs    specs to be run in the worker process
     * @param  {object} args     object that will be merged with the main configuration once worker is initialized
     * @param  {object} execArgv list of string arguments passed to the worker process
     */
    onWorkerStart: function (cid, caps, specs, args, execArgv) {
    },
    /**
     * Gets executed after a worker process has exited.
     * @param  {string} cid      capability id (e.g 0-0)
     * @param  {number} exitCode 0 - success, 1 - fail
     * @param  {object} specs    specs to be run in the worker process
     * @param  {number} retries  number of retries used
     */
    onWorkerEnd: function (cid, exitCode, specs, retries) {
    },
    /**
     * Gets executed before initializing the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    beforeSession: function (config, capabilities, specs) {
    },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {object}         browser      instance of created browser/device session
     */
    before: function (capabilities, specs, browser) {
    },
    /**
     * Gets executed before the suite starts (in Mocha/Jasmine only).
     * @param {object} suite suite details
     */
    beforeSuite: function (suite) {
    },
    /**
     * This hook gets executed _before_ every hook within the suite starts.
     * (For example, this runs before calling `before`, `beforeEach`, `after`, `afterEach` in Mocha.). In Cucumber `context` is the World object.
     *
     */
    beforeHook: function (test, context, hookName) {
    },
    /**
     * Hook that gets executed _after_ every hook within the suite ends.
     * (For example, this runs after calling `before`, `beforeEach`, `after`, `afterEach` in Mocha.). In Cucumber `context` is the World object.
     */
    afterHook: function (test, context, { error, result, duration, passed, retries }, hookName) {
    },
    /**
     * Function to be executed before a test (in Mocha/Jasmine only)
     * @param {object} test    test object
     * @param {object} context scope object the test was executed with
     */
    beforeTest: function (test, context) {
    },
    /**
     * Runs before a WebdriverIO command is executed.
     * @param {string} commandName hook command name
     * @param {Array} args arguments that the command would receive
     */
    beforeCommand: function (commandName, args) {
    },
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {string} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {number} result 0 - command success, 1 - command error
     * @param {object} error error object, if any
     */
    afterCommand: function (commandName, args, result, error) {
    },
    /**
     * Function to be executed after a test (in Mocha/Jasmine only)
     * @param {object}  test             test object
     * @param {object}  context          scope object the test was executed with
     * @param {Error}   result.error     error object in case the test fails, otherwise `undefined`
     * @param {*}       result.result    return object of test function
     * @param {number}  result.duration  duration of test
     * @param {boolean} result.passed    true if test has passed, otherwise false
     * @param {object}  result.retries   information about spec related retries, e.g. `{ attempts: 0, limit: 0 }`
     */
    afterTest: function (test, context, { error, result, duration, passed, retries }) {
    },
    /**
     * Hook that gets executed after the suite has ended (in Mocha/Jasmine only).
     * @param {object} suite suite details
     */
    afterSuite: function (suite) {
    },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    after: function (result, capabilities, specs) {
    },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    afterSession: function (config, capabilities, specs) {
    },
    /**
     * Gets executed after all workers have shut down and the process is about to exit.
     * An error thrown in the `onComplete` hook will result in the test run failing.
     * @param {object} exitCode 0 - success, 1 - fail
     * @param {object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    onComplete: function (exitCode, config, capabilities, results) {
    },
    /**
    * Gets executed when a refresh happens.
    * @param {string} oldSessionId session ID of the old session
    * @param {string} newSessionId session ID of the new session
    */
    onReload: function(oldSessionId, newSessionId) {
    },
    /**
     * Cucumber Hooks
     *
     * Runs before a Cucumber Feature.
     * @param {string}                   uri      path to feature file
     * @param {GherkinDocument.IFeature} feature  Cucumber feature object
     */
    beforeFeature: function (uri, feature) {
    },
    /**
     *
     * Runs before a Cucumber Scenario.
     * @param {ITestCaseHookParameter} world    world object containing information on pickle and test step
     * @param {object}                 context  Cucumber World object
     */
    beforeScenario: function (world, context) {
    },
    /**
     *
     * Runs before a Cucumber Step.
     * @param {Pickle.IPickleStep} step     step data
     * @param {IPickle}            scenario scenario pickle
     * @param {object}             context  Cucumber World object
     */
    beforeStep: function (step, scenario, context) {
    },
    /**
     *
     * Runs after a Cucumber Step.
     * @param {Pickle.IPickleStep} step             step data
     * @param {IPickle}            scenario         scenario pickle
     * @param {object}             result           results object containing scenario results
     * @param {boolean}            result.passed    true if scenario has passed
     * @param {string}             result.error     error stack if scenario failed
     * @param {number}             result.duration  duration of scenario in milliseconds
     * @param {object}             context          Cucumber World object
     */
    afterStep: function (step, scenario, result, context) {
    },
    /**
     *
     * Runs after a Cucumber Scenario.
     * @param {ITestCaseHookParameter} world            world object containing information on pickle and test step
     * @param {object}                 result           results object containing scenario results `{passed: boolean, error: string, duration: number}`
     * @param {boolean}                result.passed    true if scenario has passed
     * @param {string}                 result.error     error stack if scenario failed
     * @param {number}                 result.duration  duration of scenario in milliseconds
     * @param {object}                 context          Cucumber World object
     */
    afterScenario: function (world, result, context) {
    },
    /**
     *
     * Runs after a Cucumber Feature.
     * @param {string}                   uri      path to feature file
     * @param {GherkinDocument.IFeature} feature  Cucumber feature object
     */
    afterFeature: function (uri, feature) {
    },
    /**
     * Runs before a WebdriverIO assertion library makes an assertion.
     * @param commandName command name
     * @param args        arguments that command would receive
     */
    beforeAssertion: function (params) {
    },
    /**
     * Runs after a WebdriverIO command gets executed
     * @param commandName  command name
     * @param args         arguments that command would receive
     * @param result       result of the command
     * @param error        error in case something went wrong
     */
    afterAssertion: function (params) {
    }
}