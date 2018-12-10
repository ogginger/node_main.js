//node_main.js: Main logic for Node application.
/* This file depends on nodejs and the nodejs module requirejs. */

var requirejs = require("requirejs");
var config = require("./require_config");

requirejs.config(config);

requirejs([
	"file",
	"Snip",
	"test_TestSuite
], function(
	file,
	Snip,
	test_TestSuite
) {
	console.log("Main initialized successfully!");

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
		"TemplateType": "function",
		"Options": {
			"Name": "function"
		},
		"FileName": "../test.js"
	});
	//*/
});
