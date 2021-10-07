var arr=[1,2,3,4,5,6,7,8]
// arr.push(6)
// arr.unshift(6)

// arr.shift()
// console.log(arr)
  
// var new_arr=arr.slice(2,5)

// console.log(new_arr)

// var new_arr=[]

// for(var i=0;i<arr.length;i++){
//     if (arr[i]%2==0) new_arr.push(arr[i])
// }

// console.log(new_arr)

var new_arr=arr.filter((eliment,index)=>{
    if(eliment<100)return true
})

console.log(new_arr)
