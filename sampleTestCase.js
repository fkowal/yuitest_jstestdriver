/*global YUI */
YUI.add('sampleTestCase', function (Y) {
    var Assert = Y.Assert, testCase;

    testCase = new Y.Test.Case({
        name:'simpletest case',
        'test should fail':function () {
            //Assert.fail("dupa");
            Assert.areNotEqual(3, 3, "are equal");
            //assert.areSame(5, "5");    //fails
            Assert.isTypeOf("number", "Hello world", "Value should be a number."); //fails
        },
        'test equality assertions':function () {
            // Equality Assertions
            Assert.areEqual(5, 5);     //passes
            Assert.areEqual(5, "5");     //passes
            Assert.areNotEqual(5, 6);  //passes
            try {
                Assert.areEqual(5, 6, "Five was expected."); //fails
                Assert.fail("Exception should be thrown");
            } catch (e) {
                Assert.pass("Exception expected");
            }
        },
        'test Sameness Assertions':function () {
            // Sameness Assertions
            Assert.areSame(5, 5);      //passes
            try {
                Assert.areSame(5, "5");    //fails
                Assert.fail("Exception should be thrown");
            } catch (e) {
                Assert.pass("Exception thrown");
            }
            Assert.areNotSame(5, 6);   //passes
            Assert.areNotSame(5, "5"); //passes
            try {
                Assert.areSame(5, 6, "Five was expected."); //fails
                Assert.fail("Exception should be thrown");
            } catch (e) {
                Assert.pass("Exception thrown");
            }
        },
        'test Data Type Assertions Base types':function () {
            //  Data Type Assertions
            Assert.isString("Hello world");     //passes
            Assert.isNumber(1);                 //passes
            Assert.isArray([]);                 //passes
            Assert.isObject([]);                //passes
            Assert.isFunction(function () {
            });    //passes
            Assert.isBoolean(true);             //passes
            //Assert.isObject(function(){});      //passes

            try {
                Assert.isNumber("1", "Value should be a number.");  //fails
                Assert.fail("Exception should be thrown");
            } catch (e) {
                Assert.pass("Exception thrown");
            }
            try {
                Assert.isString(1, "Value should be a string."); //fails
                Assert.fail("Exception should be thrown");
            } catch (e) {
                Assert.pass("Exception thrown");
            }
        },
        'test Data Type Assertions isTypeOf':function () {
            Assert.isTypeOf("string", "Hello world");   //passes
            Assert.isTypeOf("number", 1);               //passes
            Assert.isTypeOf("boolean", true);           //passes
            Assert.isTypeOf("number", 1.5);             //passes
            Assert.isTypeOf("function", function () {
            });  //passes
            Assert.isTypeOf("object", {});              //passes
            Assert.isTypeOf("undefined", this.blah);    //passes

            try {
                Assert.isTypeOf("number", "Hello world", "Value should be a number."); //fails
                Assert.fail("Exception should be thrown");
            } catch (e) {
            }
        },
        'test isInstanceOf Assertions':function () {
            Assert.isInstanceOf(Object, {});    //passes
            Assert.isInstanceOf(Array, []);     //passes
            Assert.isInstanceOf(Object, []);     //passes
            Assert.isInstanceOf(Function, function () {
            });  //passes
            Assert.isInstanceOf(Object, function () {
            });  //passes

            try {
                Assert.isTypeOf(Array, {}, "Value should be an array."); //fails
                Assert.fail("Exception should be thrown");
            } catch (e) {
                Assert.pass("Exception thrown");
            }
        },
        'test Special Value Assertions':function () {
            // Special Value Assertions
            Assert.isFalse(false);      //passes
            Assert.isTrue(true);        //passes
            Assert.isNaN(NaN);          //passes
            Assert.isNaN(5 / "a5");      //passes
            Assert.isNotNaN(5);         //passes
            Assert.isNull(null);        //passes
            Assert.isNotNull(undefined);    //passes
            Assert.isUndefined(undefined);  //passes
            Assert.isNotUndefined(null);    //passes

            try {
                Assert.isUndefined({}, "Value should be undefined."); //fails
                Assert.fail("Exception should be thrown");
            } catch (e) {
                Assert.pass("Exception thrown");
            }
        }
    });
    Y.sampleTestCase = testCase;
    //Y.Test.Runner.add(testCase);
}, 'v0.2', {requires:['test'], optional:['jstestdriverAdapter']});
