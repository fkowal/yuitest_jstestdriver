YUI.add('jstestdriverAdapter', function(Y) {
    Y.Test.Case = function(o) {
        TestCase(o.name, o);
    }
    var Assert = Y.Test.Assert;
    // Equality Assertions
    Assert.areEqual = function(expected, actual, msg) { assertEquals(msg, expected, actual); }
    Assert.areNotEqual = function(unexpected, actual, msg) { assertNotEquals(msg, unexpected, actual); }
    // Sameness Assertions
    Assert.areNotSame = function(unexpected, actual, msg) { assertNotSame(msg, unexpected, actual); }
    Assert.areSame = function(expected, actual, msg) { assertSame(msg, expected, actual); }
    // Special Value Assertions
    Assert.isTrue = function(actual, msg) { assertTrue(msg, actual); }
    Assert.isFalse = function(actual, msg) { assertFalse(msg, actual); }
    Assert.isNaN = function(actual, msg) { assertNaN(msg, actual); }
    Assert.isNotNaN = function(actual, msg) { assertNotNaN(msg, actual); }
    Assert.isNotNull = function(actual, msg) { assertNotNull(msg, actual); }
    Assert.isNotUndefined = function(actual, msg) { assertNotUndefined(msg, actual); }
    Assert.isNull = function(actual, msg) { assertNull(msg, actual); }
    Assert.isUndefined = function(actual, msg) { assertUndefined(msg, actual); }
    // Data Type Assertions
    Assert.isArray = function(actual, msg) { assertArray(msg, actual); }
    Assert.isBoolean = function(actual, msg) { assertBoolean(msg, actual); }
    Assert.isFunction = function(actual, msg) { assertFunction(msg, actual); }
    Assert.isInstanceOf = function(expected, actual, message) { assertInstanceOf(message, expected, actual); }
    Assert.isNumber = function(actual, msg) { assertNumber(msg, actual); }
    Assert.isObject = function(actual, msg) { assertObject(msg, actual); }
    Assert.isString = function(actual, msg) { assertString(msg, actual); }
    Assert.isTypeOf = function(expected, actual, msg) { assertTypeOf(msg, expected, actual); }
    Assert.throwsError = function(expectedError, method, msg) { assertException(msg, method, expectedError); }  // TODO verify
    //Forced Failures
    Assert.fail = function(msg) { fail(msg); }
}, 'v0.1' ,{requires:['test']});