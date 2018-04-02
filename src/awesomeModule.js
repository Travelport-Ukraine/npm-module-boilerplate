/**
 *
 *   aware of usage `export default` for commonjs modules
 *   according to specs of new es6 modules `export default <Statement>`
 *   will be available in commonjs under `require('module').default` name
 *   it will not work as `require('module')`
 */
export function awesomeFunction(a, b) { return a + b; }
