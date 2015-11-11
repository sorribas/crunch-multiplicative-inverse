crunch-multiplicative-inverse
=============================

Multiplicative inverse funtion implemented on the [crunch](https://www.npmjs.com/package/number-crunch) big integer library.

Example
-------

```js
var multiplicativeInverse = require('crunch-multiplicative-inverse');
var c = require('number-crunch');

multiplicativeInverse(c.parse('42'), c.parse('2017')); // returns [1969]

```

LICENSE
-------

MIT
