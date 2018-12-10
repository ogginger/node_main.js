//require_config.js: Requirejs configuration.

module.exports = {
        nodeRequire: require,
        baseUrl: "TestSuite",
        paths: {
		"rsvp": "../lib/rsvp.min",
		"backbone": "../lib/backbone.min",
		"underscore": "../lib/underscore.min",
		"TestSuite_stable": "old/TestSuite_0.1",
		"bIsObjectEqual": "lib/is_object_equal.min",
		"xGenerateTest": "lib/generate_test.min",
		"xAddTest": "lib/add_test.min",
		"bTestAll": "lib/test_all.min",
		"xGenerateAsyncTest": "lib/generate_async_test.min",
		"bTestAllAsync": "lib/test_all_async.min",
		"async_every": "lib/async_every.min",
		"AsyncIterator": "lib/async_iterator.min",
		"AsyncValidate": "lib/async_validate.min",
		"Functions/log": "lib/log",
		"Functions/bIsObjectEqual": "lib/is_object_equal.min",
		"validate": "lib/validate.min"
	},
        bundles: {
		"../lib/log.min": [ "log" ],
		"../lib/snip.min": [ "Snip" ],
		"../lib/file.min": [ "file" ],
                "../lib/promise.min": [ "promise" ]
	},
	suppress: {
		nodeShim: true
	},
	shim: {
		"underscore": {
			deps: [
				"jquery"
			],
			exports: "_"
		},
		"backbone": {
			deps: [
				"underscore"
			],
			exports: "Backbone"
		},
		"file": {
			deps: [
				"fs",
				"rsvp"
			],
			exports: "file"
		},
		"Snip": {
			deps: [
				"file",
				"backbone"
			],
			exports: "Snip"
		},
		"promise": {
                        deps: [
                                "rsvp"
                        ],
                        exports: "promise"
                },
		"TestSuite": {
			deps: [
				"backbone",
				"rsvp"
			],
			exports: "TestSuite"
		}
	}
};
