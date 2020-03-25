/**
 * @param {Mixed} val
 * @return {Boolean}
 */

const empty = value => {
  
  // If value is null on undefined:
  if (value == null) return true;

  // By types:
  if ('boolean' == typeof value) return !value;
  if ('number' == typeof value) return value === 0;
  if ('string' == typeof value) return value === '0' || value.length === 0;
  if ('function' == typeof value) return value.length === 0;
  
  // Empty arrays:
  if (Array.isArray(value)) return value.length === 0;
  
  // Error with empty message:
  if (value instanceof Error) return value.message === '';
  
  // Empty objects:
  if (value.toString == Object.prototype.toString) {
    switch (value.toString()) {

      case '[object File]':
      case '[object Map]':
      case '[object Set]': {
        return value.size === 0
      }
      case '[object Object]': {
        for (let key in value) {
          if (Object.prototype.hasOwnProperty.call(value, key)) return false
        }

        return true
      }
    }
  }

  // Everything else...
  return false
}

/**
 * @type {Function}
 */

module.exports = empty;
