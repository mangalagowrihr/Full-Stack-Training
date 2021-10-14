// const button = document.querySelector('button')
// const input =document.querySelector('input')
// const div =document.querySelector('div')

// div.innerHTML = localStorage.getItem('InputValue')

// button.addEventListener('click',(req,res)=>{
//     localStorage.setItem('InputValue',[1,2,3,4,5])
//     div.innerHTML=input.value
// })


// Local Storage
// 1
// console.log(localStorage)


// 2. To SetItem
// localStorage.setItem('InputValue',"Something")

// 3.To GetItem
// console.log(localStorage.getItem("InputValue"))


// 4
const button = document.querySelector('button')
const input =document.querySelector('input')
const div =document.querySelector('div')

const arr=[1,2,3,4,5]


localStorage.setItem('val',JSON.stringify(arr))

console.log(JSON.parse(localStorage.getItem('val')))

