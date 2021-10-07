// var add=(a=0,b=0)=>{
//     return a+b
// }

// or

// var add=(a=0,b=0)=>a+b
// console.log(add(10,20))

// const greet = Name => 'hi' + Name

// console.log(greet('Prabhakaran'))

// var arr = ['go to the GYM','Eat Food','Clean House']

// for (var i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// var callbackFunction = (element,index) => {
//     console.log(element,index)
// }

// arr.forEach ((element,index) => {
//     console.log(element,index)
// })

var button=document.querySelector('button')
var input=document.querySelector('input')
var list=document.querySelector('ul')

const callbackfunc = (event) =>{
    console.log(input.value)
    // const inputValue=input.value
    // const element=document.createElement('li')
    // const textNode=document.createTextNode(inputValue)
    // element.appendChild(textNode)
    // list.appendChild(element)
}

button.addEventListener('click',callbackfunc)





