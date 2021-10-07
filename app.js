const a=document.querySelectorAll('input')[0]
const b=document.querySelectorAll('input')[1]

// const a=document.getElementsByTagName('input')[0]
// const b=document.getElementsByTagName('input')[1]

const add=document.querySelector('#add')
const sub=document.querySelector('#sub')
const multiply=document.querySelector('#multiply')
const resultBox=document.querySelector('.result')

const sum=()=>{
  
}

const product=()=>{
    const result=parseInt(a.value)*parseInt(b.value)
    resultBox.innerHTML=result
}


const calculate=(event,operation)=>{
//    console.log(event.target)
//   if(operation=='add'){
//       console.log('adding')
//   }else if (operation=='multiply'){
//       console.log('multiply')
//   }
switch(operation){
    case "add":
        resultBox.innerHTML=parseInt(a.value)+parseInt(b.value);
        break
    case "multiply":
        resultBox.innerHTML=parseInt(a.value)*parseInt(b.value);
        break
        case "sub":
        resultBox.innerHTML=parseInt(a.value)-parseInt(b.value);
        break
    default:
        resultBox.innerHTML="Not a valid operation"

}
}

add.addEventListener('click',()=>{
    calculate(event,'add')
})

multiply.addEventListener('click',()=>{
  
    calculate(event,'multiply')
})

sub.addEventListener('click',()=>{
  
    calculate(event,'sub')
})