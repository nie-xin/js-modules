var test = require('tape');
var url = require('./url.js');

test('url parse', function(assert) {
  var testUrl = 'http://example.com:3000/pathname/?search=test#hash'

  var parser = url(testUrl);

  assert.equal(parser.protocol, 'http:');
  assert.equal(parser.hostname, 'example.com');
  assert.equal(parser.port, '3000');
  assert.equal(parser.pathname, '/pathname/');
  assert.equal(parser.search, '?search=test');
  assert.equal(parser.hash, '#hash');
  assert.equal(parser.host, 'example.com:3000');
});
