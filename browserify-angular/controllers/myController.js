var utils = require("../utils.js")

function myController($scope) {
	var msg = "Hello World!"
	utils.showConsole(msg);
	$scope.text = msg;
}

module.exports = myController;