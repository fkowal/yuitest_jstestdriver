YUI({
    //bootstrap:false
}).use('test', 'jstestdriverAdapter', function (Y) {
        var Assert = Y.Assert;
        var testCase = new Y.Test.Case({
            name:'simpletest case',
            'test equality assertions': function() {
                // Equality Assertions
                Y.Assert.areEqual(5, 5);     //passes
                Y.Assert.areEqual(5, "5");     //passes
                Y.Assert.areNotEqual(5, 6);  //passes
                try {
                    Y.Assert.areEqual(5, 6, "Five was expected."); //fails
                    Y.Assert.fail("Exception should be thrown");
                } catch( e ) {
                    Y.Assert.pass("Exception expected");
                }
            },
            'test Sameness Assertions':function () {
                // Sameness Assertions
                Y.Assert.areSame(5, 5);      //passes
                try {
                    Y.Assert.areSame(5, "5");    //fails
                    Y.Assert.fail("Exception should be thrown")
                } catch (e) {
                    Y.Assert.pass("Exception thrown");
                }
                Y.Assert.areNotSame(5, 6);   //passes
                Y.Assert.areNotSame(5, "5"); //passes
                try {
                    Y.Assert.areSame(5, 6, "Five was expected."); //fails
                    Y.Assert.fail("Exception should be thrown");
                } catch (e) {}
            },
            'test Data Type Assertions Base types': function() {
                //  Data Type Assertions
                Y.Assert.isString("Hello world");     //passes
                Y.Assert.isNumber(1);                 //passes
                Y.Assert.isArray([]);                 //passes
                Y.Assert.isObject([]);                //passes
                Y.Assert.isFunction(function(){});    //passes
                Y.Assert.isBoolean(true);             //passes
                //Y.Assert.isObject(function(){});      //passes

                try {
                    Y.Assert.isNumber("1", "Value should be a number.");  //fails
                    Y.Assert.fail("Exception should be thrown");
                } catch(e) {}
                try {
                    Y.Assert.isString(1, "Value should be a string."); //fails
                    Y.Assert.fail("Exception should be thrown");
                } catch(e) {}
            },
            'test Data Type Assertions isTypeOf': function() {
                Y.Assert.isTypeOf("string", "Hello world");   //passes
                Y.Assert.isTypeOf("number", 1);               //passes
                Y.Assert.isTypeOf("boolean", true);           //passes
                Y.Assert.isTypeOf("number", 1.5);             //passes
                Y.Assert.isTypeOf("function", function(){});  //passes
                Y.Assert.isTypeOf("object", {});              //passes
                Y.Assert.isTypeOf("undefined", this.blah);    //passes

                try {
                    Y.Assert.isTypeOf("number", "Hello world", "Value should be a number."); //fails
                    Y.Assert.fail("Exception should be thrown");
                } catch (e) {}
            },
            'test isInstanceOf Assertions': function() {
                Y.Assert.isInstanceOf(Object, {});    //passes
                Y.Assert.isInstanceOf(Array, []);     //passes
                Y.Assert.isInstanceOf(Object, []);     //passes
                Y.Assert.isInstanceOf(Function, function(){});  //passes
                Y.Assert.isInstanceOf(Object, function(){});  //passes

                try {
                    Y.Assert.isTypeOf(Array, {}, "Value should be an array."); //fails
                    Y.Assert.fail("Exception should be thrown");
                } catch (e) {
                    Y.Assert.pass()
                }
            },
            'test Special Value Assertions': function() {
                // Special Value Assertions
                Y.Assert.isFalse(false);      //passes
                Y.Assert.isTrue(true);        //passes
                Y.Assert.isNaN(NaN);          //passes
                Y.Assert.isNaN(5 / "a5");      //passes
                Y.Assert.isNotNaN(5);         //passes
                Y.Assert.isNull(null);        //passes
                Y.Assert.isNotNull(undefined);    //passes
                Y.Assert.isUndefined(undefined);  //passes
                Y.Assert.isNotUndefined(null);    //passes

                try {
                    Y.Assert.isUndefined({}, "Value should be undefined."); //fails
                    Y.Assert.fail("Exception should be thrown");
                } catch (e) {}
            }
        });
        Y.Test.Runner.add(testCase);
        Y.Test.Runner.run();
    })
