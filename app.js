// 1
// if(true) {
//     var Name='Ferrari'
   
// }
// console.log(Name)

// 2
// for(var i=0;i<=10;i++){
//     console.log('loop ran')
// }

// console.log(i)

// if(true){
//      var Name="ferrari"
//     if(true){
//         console.log(Name)
       
//     }
// }

// const print=()=>{
//     var Name="Mercedes"
//     if(true){
//         console.log(Name)
//     }
//     return Name
// }

// print()
// 

// let car={
//   name:"C Class",
//   manufacturer:"Mercedes",
//   print:function(){
//      console.log(car.manufacturer,car.name)
//   }
// }

// car.print()


// let obj={
//     h:"hello",
//     w:"world",
//     print:function(){
//         console.log(this);
//         console.log(this.h + this.w);
//         console.log(obj.h);
//     }
// }

// const temp=obj.print("hsfds");
// console.log(temp)




// let car={
//     name:"C Class",
//     manufacturer:"Mercedes",
//     print:function(){
//        console.log(`${this.name} was created by ${this.manufacturer}`)
//     }
//   }
  
//   car.print()




// let car={
//     name:"C Class",
//     manufacturer:"Mercedes",
//     print:() => {
//         console.log(this)
//        console.log(`${car.name} was created by ${car.manufacturer}`)
//     }
//   }
  
//   console.log(Object.keys(car))
//   console.log(Object.values(car))



let car={
    name:"C Class",
    manufacturer:"Mercedes",
    print:() => {
        
       console.log(`${car.name} was created by ${car.manufacturer}`)
    }
  }
  console.log(car)
//   console.log(Object)
//   console.log(Object)
//   console.log(Object.keys(car))
//   console.log(Object.values(car))

// console.log(Object.hasOwnProperty('name'))

console.log(car.hasOwnProperty('name'))


