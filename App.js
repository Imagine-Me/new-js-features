// This require node to run without browser
// install node from following link https://nodejs.org/en/download/
// node node in system variables

//rest 
//rest operator is used to merge

let a = [1,2,3]
let b = [...a,4,5,6]
console.log(b)

//Rest parameter

function add(...args){
    return args[0]+args[1]
}
console.log(add(5,5))

//destructuring
const [c,d] =[1,2]
console.log("c => ",c,"d=>",d)

const {e,f} = { e:1 , f:2 }
console.log("e => ",e,"f=>",f)