// let Name = new Promise((resolve,reject) => {
//     setTimeout(() =>{
//         resolve('Gowri')
//     },3000)
// })
// console.log(Name)
// setTimeout(() => {
//     console.log(Name)
// },4000)

let Name = new Promise((resolve,reject) => {
    setTimeout(() =>{
        resolve('Gowri')
    },3000)
})

Name.then(name => {console.log(name)})