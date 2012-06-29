/*global YUI */
YUI({
    filter: 'DEBUG',
    bootstrap: !window.jstestdriver,    // all dependencies need to be loaded staticly ahead in jstestdriver
    modules: {
//        'jstestdriverAdapter': {
//            fullpath: "./jstestdriverAdapter.js",
//            condition: {
//                trigger: 'sampleTestCase',
//                test: function(Y) {
//                    return !Y.Lang.isUndefined(Y.config.win.jstestdriver);
//                },
//                when: 'before'
//            }
//        },
        sampleTestCase: {
            fullpath: "./sampleTestCase.js"
        }
    }
}).use('test', 'jstestdriverAdapter', 'sampleTestCase','test-console', function (Y) {    // jsTestDriverAdapter needs to be loaded
        var testCase = Y.sampleTestCase;
        try {
            new Y.Test.Console().render('#log');
        } catch( e ) {

        }
        Y.Test.Runner.add(testCase);
        Y.Test.Runner.run();
    });
