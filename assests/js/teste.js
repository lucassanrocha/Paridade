/*var dc = 5142
var df = 5158
var tx = 0.085815718
var variac = 0.47

let justo = (dc*(tx/100)+dc)
let ab = (df*(variac/100)+df) // revisar calculo
let delta = ((df*(0,5/100))/10.)// revisar calculo
let maxima = (ab*(tx/100)+ab+delta) // revisar calculo
let minima = ((ab*(tx/100)+ab)-delta) // revisar calculo

console.log(justo.toPrecision(6))
console.log(maxima.toPrecision(6))
console.log(ab.toPrecision(6))
console.log(minima.toPrecision(6))
console.log(delta) */
var di = 13.714
var vc = 8
var tx = ((1+di)**(1/252)-1)*vc
 console.log(tx)