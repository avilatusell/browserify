var angular = require("angular");
// var angularRoute = require("angular-route");

var myController = require("./controllers/myController.js")
var myOtherController = require("./controllers/myOtherController.js")

angular.module("myApp", [])
	.controller("myController", myController)
	.controller("myOtherController", myOtherController)