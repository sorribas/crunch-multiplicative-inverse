var c = require('number-crunch');

var ZERO = c.parse('0');
var ONE = c.parse('1');
var MINUS_ONE = c.parse('-1');

module.exports = function (a, b) {
  if (c.compare(b, ZERO) === -1) b = c.mul(b, MINUS_ONE);
  if (c.compare(a, ZERO) === -1) a = c.sub(b, c.mod(c.mul(a, MINUS_ONE), b));
  var t = ZERO;
  var nt = ONE;
  var r = b;
  var nr = c.mod(a,b);
  while (c.compare(nr, ZERO) !== 0) {
    var q = c.div(r, nr);
    var tmp = nt;
    nt = c.sub(t, c.mul(q, nt));
    t = tmp;

    tmp = nr
    nr = c.sub(r, c.mul(q, nr));
    r = tmp;
  }
  if (c.compare(r, ONE) === 1) return MINUS_ONE;
  if (c.compare(t, ZERO) === -1) t = c.add(t, b);
  return t;
};
