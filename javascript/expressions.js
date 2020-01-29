// Expression syntax in JavaScript

// Booleans
true
false

//Logic
!false
true && false
true || false

// Numbers (all one type)
3.14

// Equality
3 === 3.0
3 !== 3.14

// Ordering
3 > 2
3 >=2

// Strings
'hello'
"hello"

// Concatenations
'a' + 'b' === 'ab'

// Arithmematic
3 + 2 === 5
3 - 2 === 1
3 * 2 === 6
3 / 2 === 1.5
3 % 2 === 1
3 ** 2 === 9

// Type Coercion
'3' + 2 === '32'
'3' + true === '3true'
'3' - 2 === 1
3 + true === 4

// Loose Equality
'3' == 3
true == 1
false == 0
false == ''
'' == 0

// Template Strings
'3+2 is ' + 3+2 // this prints 3+2 is 32
'3+2 is ' + (3+2) // this printd 3+2 is 5
`3+2 is ${3+2}` // this prints 3+2 is 5
