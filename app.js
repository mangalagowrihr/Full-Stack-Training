// 1
// let response = fetch('https://jsonplaceholder.typicode.com/users')
// console.log(response)

// setTimeout(() => {
//     const data=response
//     console.log(data)
// },2000)


// 2
// let response = fetch('https://jsonplaceholder.typicode.com/users').then(res =>{
//     let parsedData=res.json()
//     console.log(parsedData)
//     return (parsedData)
// }).then(data => {console.log(data)})


//  or same output with less code
let response = fetch('https://jsonplaceholder.typicode.com/users').then(res =>res.json()).then(data => {
    console.log(data)
})
   

