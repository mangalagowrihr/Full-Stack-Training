// 1
// fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(data => {console.log(data)})


// 2
// const table = document.querySelector('table')
// console.log(table)
// fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(data => {
  
//     data.forEach(user =>{
//         let newRow = document.createElement('tr')
//         let dataID = document.createElement('td')
//         let dataIDtextNode = document.createTextNode(user.id)
//         dataID.appendChild(dataIDtextNode)
//         newRow.appendChild(dataID)

//         table.appendChild(newRow)
//     })
// })


// 3
// const table = document.querySelector('table')
// console.log(table)

// const createRow = (user)=>{
// let newRow = document.createElement('tr')
//         let element =`
//         <td>${user.id}</td>
//         <td>${user.name}</td>
//         <td>${user.email}</td>
//         <td>${user.username}</td>`
//         newRow.innerHTML = element
//         return newRow
// }

// fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(data => {
  
//     console.log(data)
//     data.forEach(user =>{
        
//         table.appendChild(createRow(user))
//     })
// })

// 4

// fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(data => {
  
//     console.log(data)
//     data.forEach(user =>{
        
//         console.log(data)
//     })
// })


const fetchData = async() =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    console.log(response)
    const data = await response.json()
    console.log(data)

}
fetchData()