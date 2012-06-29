/*global YUI */
/**
 * this adapter makes 3 things
 * # converts Y.Test.Case to jsTestDriver TestCase
 * # converts Y.*.AssertionErrors to extend the native Error,
 * so that stackTrace will attached to the Error object
 * this enabled jsTestDriver to display nice links links containing the failname
 * and line number of the test that failed
 * # jsTestDriver expects all assertErrors.name to be 'AssertError' then it marks
 * tests as Failed in the result summary, else a failed test would be marked as Error
 */
YUI.add('jstestdriverAdapter', function(Y) {
    if (Y.Lang.isUndefined(Y.config.win.jstestdriver)) {
        return;
    }
    Y.Test.Case = function(o) {
        // override the Test.Case so it will be run by jsTestDriver runner
        TestCase(o.name, o);
    }

    // jsTestDrivers expects Error.name to be 'AssertError' in order for the test to Fail
    // other Error.name mark the test as Error
    Y.Test.AssertionError = Error;
    Y.Test.AssertionError.prototype.name = 'AssertError';//'AssertionError';
    Y.Test.ComparisonFailure = Error;
    Y.Test.ComparisonFailure.prototype.name = 'AssertError';//'ComparisionFailure';
    Y.Test.UnexpectedValue = Error;
    Y.Test.UnexpectedValue.prototype.name = 'AssertError';//'UnexpectedValue';
    Y.Test.ShouldError = Error;
    Y.Test.ShouldError.prototype.name = 'AssertError';//'ShouldError';
    Y.Test.ShouldFail = Error;
    Y.Test.ShouldFail.prototype.name = 'AssertError';//'ShouldFail';
    Y.Test.UnexpectedError = Error;
    Y.Test.UnexpectedError.prototype.name = 'AssertError';//'UnexpectedError';
    Y.Test.Assert.Error = Error;
    Y.Test.Assert.Error = 'AssertError';//'AssertionError';
}, 'v0.2' ,{requires:['test']});
