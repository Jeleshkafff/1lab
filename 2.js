let a = 13.123456789
let b = 2.123
let n = 5
let a1 = Math.round((a - Math.floor(a)) * Math.pow(10,n))
let b1 = Math.round((b - Math.floor(b)) * Math.pow(10,n))
console.log("Числа равны", a === b)
console.log("a1=", a1,"b1=", b1, "a меньше b", a < b)
console.log("a1=", a1,"b1=", b1,"a больше b", a > b)
console.log("a1=", a1,"b1=", b1,"а меньше или равно b", a <= b)
console.log("a1=", a1,"b1=", b1,"a меньше или равно b", a >= b)
console.log("a1=", a1,"b1=", b1,"a не равно b", a != b)