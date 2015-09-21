var test = require('tape');
var url = require('./url.js');

test('url parse', function(assert) {
  var testUrl = 'http://example.com:3000/pathname/?search=test#hash'

  var parser = url(testUrl);

  assert.equal(parser.protocol, 'http:');
});
