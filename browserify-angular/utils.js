function showConsole(msg) {
	console.log("The msg is:" + msg)
}

function oddEvenFormat( txt, isEven ) {
	return isEven ? txt.toUpperCase() : txt.toLowerCase();
}

function isNumber ( elem ) {
	return typeof(elem) === "number";
}

module.exports.showConsole = showConsole;
module.exports.oddEvenFormat = oddEvenFormat;
module.exports.isNumber = isNumber;