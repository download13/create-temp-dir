var test = require("prova");
var exists = require("fs").existsSync;
var create = require("./");

test('path', function (assert) {
  assert.plan(8);

  var tmp1, tmp2;

  create('foobar', function (error, dir) {
    assert.error(error);
    assert.equal(dir.path.slice(0, 12), '/tmp/foobar-');
    assert.ok(/^\/tmp\/foobar-\d+/.test(dir.path));

    tmp1 = dir.path;

    assert.notEqual(tmp1, tmp2);
  });

  create('foobar', function (error, dir) {
    assert.error(error);
    assert.equal(dir.path.slice(0, 12), '/tmp/foobar-');
    assert.ok(/^\/tmp\/foobar-\d+/.test(dir.path));

    tmp2 = dir.path;

    assert.notEqual(tmp1, tmp2);
  });

});

test('cleanup', function (assert) {
  assert.plan(8);

  create('hi', function (error, dir) {
    assert.error(error);
    assert.ok(exists(dir.path));

    dir.cleanup(function (error) {
      assert.error(error);
      assert.notOk(exists(dir.path));
    });
  });

  create('hi', function (error, dir) {
    assert.error(error);
    assert.ok(exists(dir.path));

    dir.cleanup(function (error) {
      assert.error(error);
      assert.notOk(exists(dir.path));
    });
  });

  create('hi', function (error, dir) {
    dir.cleanup();
  });
});
