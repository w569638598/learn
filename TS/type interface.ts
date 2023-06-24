// interface A {
//     T1: string
// }
// interface B {
//     T2: number
// }
// interface C extends A, B {
//     T3: boolean
// }


type A = {
    T1: string
}
type B = {
    T2: number
}
type C = {
    T3: boolean
} & A & B;