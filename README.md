A sample YUITest Adapter for JsTestDriver
=========================================
http://code.google.com/p/js-test-driver/

Enables running YUITest compatible tests in jsTestDriver.

jsTestDriver.jstd loads the dependencies required by the tested module
http://yuilibrary.com/yui/configurator/

1. Start server
java -jar jsTestDriver.jar --port 9876

2. Connect browser
http://localhost:9876/capture

3. Run test
java -jar jsTestDriver.jar --server http://localhost:9876 --tests all --config jsTestDriver.jstd

