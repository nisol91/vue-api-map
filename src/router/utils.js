var sprintf = require('sprintf-js').sprintf,
	vsprintf = require('sprintf-js').vsprintf;

var getFolderTree = function getFolderTree(id) {
	var p;
	var d = parseInt(id);
	var c = Math.floor(d / 100);
	var b = Math.floor(c / 100);
	var a = Math.floor(b / 100);
	p = vsprintf('/%02d000000/%04d0000/%06d00/%08d', [a, b, c, d]);
	return p;
}

exports.getFolderTree = getFolderTree;
