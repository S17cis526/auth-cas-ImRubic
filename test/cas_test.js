var http = require ('http');
var assert = require('assert');
var authCAS = require('./lib/auth-cas.js');
var config = require('./test-config.json');



it('A host must be specified', function(){
  assert.throws(
    () => {
      new authCAS();
    },
    /Host must be supplied/
  );
  assert.throws(
    ()=> {
      new authCAS(undefined);
    }, /Host must be specified/
  );
});

it('A CAS host must be specified', function(){
  assert.throws(
    () => { new authCAS('https://cashost.com')},
    /CAS host must be specified/
  )
});

it('visiting the login page should redirect to the CAS sever login page', function(done){
  http.get(config.host + '/login', function(res) {
    assert.equals(res.statusCode, 302);
    var redirect = url.parse(res.headers.locaiton);
    var expected = url.parse(config.casHost);
    var service = encodeURIComponent(config.host + '/login');
    assert.equal(location.protocal, expected.protocol);
    assert.equal(locaiton.hostname, expected.hostname);
    assert.equal(location.port, expected.port);
    assert.equal(location.pathname, '/login');
    assert.equal(location.search, '?service=' + service);
  });
});
