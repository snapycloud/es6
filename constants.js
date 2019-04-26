// es6 defaine a constant
const PI = 3.141593

// es5 defaine a constant
Object.defineProperty(typeof global === 'object' ? global : window, "PI2", {
  value: 3.141593,
  enumerable: true,
  writable: false,
  configurable: false
})
