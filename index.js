var fs = require("fs");
var os = require("os");
var path = require("path");
var rimraf = require("rimraf");

module.exports = create;

function create (prefix, mode, callback) {
  var id = Math.floor(Math.random() * 99999999);
  var dir = path.join(os.tmpdir(), prefix + '-' + id);

  if (arguments.length == 2) {
    callback = mode;
    mode = 777;
  }

  fs.mkdir(dir, function (error) {
    if (error) return callback(error);

    callback(undefined, {
      path: dir,
      cleanup: cleanup
    });
  });

  function cleanup (callback) {
    rimraf(dir, callback || fn);
  }
}

function fn () {}
