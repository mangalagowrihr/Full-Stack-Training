let greet =new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Welcome")
    },2000)
})

// console.log(greet)

// setTimeout(() => {
//     console.log(greet)
// },6000)

// instead of above we can use .then method

greet.then(value =>{
    console.log(value)
    return "Welcome Again"
}).then(newValue => {
    console.log(newValue)
})
    


