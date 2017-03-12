
module.exports = safeJsonStringify;

function safeJsonStringify(d, cb, space) {
  var cache = [];
  d = JSON.stringify(d, function(key, value) {
    if(typeof value === 'object' && value !== null) {
      if(cache.indexOf(value) !== -1) {
        return '[*circular]';
      }
      cache.push(value);
    }
    if(cb != null) return cb(value);
    return value;
  }, space);
  cache = null;
  return d;
}
