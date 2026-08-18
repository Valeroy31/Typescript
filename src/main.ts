type One = string
type Two = string | number
type Three = 'hello'

//convert to more or less specific
let a: One = 'hello'
let b = a as Two //assignment of a to a less specific type
let c = a as Three //assignment of a to a more specific type