## create-temp-dir

Create a temporary directory under /tmp

```js
var createTempDir = require('create-temp-dir')

createTempDir('foobar', function (error, dir) {

  dir.path
  // => /tmp/foobar-314156

  dir.cleanup(/* optional callback */)

})
```

## Install

```bash
$ npm install create-temp-dir
```
