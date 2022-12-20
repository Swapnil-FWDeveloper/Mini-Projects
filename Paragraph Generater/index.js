

// const input=document.getElementById("input-box")

// Step-1
// let num;
// // use num we will store our value in num 

// const generatePara=()=>{
//      num=(Number(input.value))
//     //   console.log(num)
// }
// and here I have done function call in index.html on button and then we can access the value but all the value type is string so I will rap 
// all the value in number 

// step-2
// Now we will make one paragraphh and I will give class as myPara and we will append in the parent div which is container and when button is clicked
// at that time new para will generated

// const input=document.getElementById("input-box")
// const newcontainer=document.querySelector(".container")
// let num;
// // use num we will store our value in num 
// const generatePara=()=>{
//      num=(Number(input.value))
//     //   console.log(num)

//     const para=document.createElement("p");
//     para.innerText='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae expedita blanditiis ad tempore! Praesentium non voluptates hic, illum amet maiores vel? Aut beatae neque culpa ea excepturi iste corporis nisi?'

//     para.setAttribute("class",'myPara')

//     newcontainer.append(para)
// }

// so first we had done with const para so that we can get all the value in p tag; 2. we have dont para.setAttribute because

// so we are apending all the new paras in newcontainer but we dont want this dummy para so we will create new function
// and inside that we will add logic for new Paragraph

// strp 3

// in this step I will make a function to generate word

const input=document.getElementById("input-box")
const newcontainer=document.querySelector(".container")
let num;
// use num we will store our value in num 
const generatePara=()=>{
     num=(Number(input.value))
    //   console.log(num)

    const para=document.createElement("p");
    para.innerText='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae expedita blanditiis ad tempore! Praesentium non voluptates hic, illum amet maiores vel? Aut beatae neque culpa ea excepturi iste corporis nisi?'

    para.setAttribute("class",'myPara')

    newcontainer.append(para)
}

//////////////////////////////////////////////////////////////////////////////
// const generateWords=(n)=>{
//     let text='';
//     const letter ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      
//     for(let i=0;i<n;i++){
//         text+=letter[i]
//     }
    
//     return text;
// }
// console.log(generateWords(10))
// so what ever we will write in that all the value will be stored in text and function will return text
// so will get data in or an only 10 elements


const generateWords=(n)=>{
    let text='';
    const letter ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      
    for(let i=0;i<n;i++){
        text+=letter[i]
    }
    
    return text;
}
console.log(generateWords(10))
