//node_main.js: Main logic for Node application.
/* This file depends on nodejs and the nodejs module requirejs. */

/* 
	FIXME: TestSuite.AsyncTest.AsyncAssertion is buggy with ExceptionTest: true and comparison function. 
*/

var requirejs = require("requirejs");
var config = require("./require_config");

requirejs.config(config);

requirejs([
	"file",
	"Snip",
	"test_TestSuite",
	"TestSuite",
	"promise"
], function(
	file,
	Snip,
	test_TestSuite,
	TestSuite,
	promise
) {
	console.log("Main initialized successfully!");

	new (TestSuite.extend({
		"initialize": function() {
			console.log("TestSuite initialized successfully!");
			var xTestSuite = this;
			xTestSuite.set("MethodUnderTest", "Function");

			xTestSuite.add([{
				"Name": "Test",
				"Input": undefined,
				"Function": function() { return true; },
				"ExpectedOutput": true
			}, {
				"Name": "Test2",
				"Input": undefined,
				"Function": function() { return true; },
				"ExpectedOutput": true
			}]);

			xTestSuite.test();
		}
	}))();

	//new test_TestSuite();


	/*
        var xSnip = new Snip({
                "Dir": __dirname + "/Snippets/",
                "Snippets": {
                        "testsuite":"testsuite.txt",
                        "function":"function.txt",
			"test":"test.txt"
                }
        });

	xSnip.render({
		"TemplateType": "test",
		"Options": {
			"Method": "TestSuite_test_AsyncRejects_ResolvesFalse",
			"Name": "test"
		},
		"FileName": "../test.js"
	});
	//*/
});
