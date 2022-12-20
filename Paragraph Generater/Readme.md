   
   Output link => https://effulgent-sable-382379.netlify.app/


   
    box-sizing: border-box -> it will not allow the div/box to spread outside like
    lets say there are three box and you want them in a same row and at same heiht and widht and you got the output as one box is bigger than other and all threea re uneven then you have to use box-sizing border box it will arrange the all the 3 boxes in a same line.





Debug the code properly I have explained everything in detail step by step



// const input=document.getElementById("input-box")

// Step-1
// let num;
// // use num I will store our value in num 

// const generatePara=()=>{
//      num=(Number(input.value))
//     //   console.log(num)
// }
// and here I have done function call in index.html on button and then I can access the value but all the value type is string so I will rap 
// all the value in number 

// step-2
// Now I will make one paragraphh and I will give class as myPara and I will append in the parent div which is container and when button is clicked
// at that time new para will generated

// const input=document.getElementById("input-box")
// const newcontainer=document.querySelector(".container")
// let num;
// // use num I will store our value in num 
// const generatePara=()=>{
//      num=(Number(input.value))
//     //   console.log(num)

//     const para=document.createElement("p");
//     para.innerText='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae expedita blanditiis ad tempore! Praesentium non voluptates hic, illum amet maiores vel? Aut beatae neque culpa ea excepturi iste corporis nisi?'

//     para.setAttribute("class",'myPara')

//     newcontainer.append(para)
// }

// so first I had done with const para so that I can get all the value in p tag; 2. I have dont para.setAttribute because

// so I are apending all the new paras in newcontainer but I dont want this dummy para so I will create new function
// and inside that I will add logic for new Paragraph

// strp 3

// in this step I will make a function to generate word

// const input=document.getElementById("input-box")
// const newcontainer=document.querySelector(".container")
// let num;
// // use num I will store our value in num 
// const generatePara=()=>{
//      num=(Number(input.value))
//     //   console.log(num)

//     const para=document.createElement("p");
    
//     para.innerText='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae expedita blanditiis ad tempore! Praesentium non voluptates hic, illum amet maiores vel? Aut beatae neque culpa ea excepturi iste corporis nisi?'

//     para.setAttribute("class",'myPara')

//     newcontainer.append(para)
// }

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
// so what ever I will write in that all the value will be stored in text and function will return text
// so will get data in or an only 10 elements

/////////////////////////////////////////////////////////////////////
// but I want random value so I will se Math.random and I dont decimal vale so for that I will use *10 
// and to start value from 0 I will use toFixed(0) and pass random as a element of a letters
// so now once I refresh the page I are getting random vlaues/ elements of a letters of letters till 10 coz we are passing 10 and loop will run till 10 i.e n=10 
// const generateWords=(n)=>{
//     let text='';
//     const letter ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      
//     for(let i=0;i<n;i++){
//         let random=(Math.random()*10).toFixed(0)
//         text+=letter[random]
//     }
    
//     return text;
// }
// console.log(generateWords(10))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// but we want elements till 26 coz there are 26 alphabets 
// so can do letter.length-1 because inding start from 0 and it will prevent code form undefined
// then also we will get undefined because of BODMAS rule it is multiplying and then substracting and we want first substraction and 
// then multiplication
// getting -0 so for that we will add brackets and now we will not get undefined

// const generateWords=(n)=>{
//     let text='';
//     const letter ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     for(let i=0;i<n;i++){
//         let random=(Math.random()*(letter.length-1)).toFixed(0)
//         text+=letter[random]
//         console.log(random)
//     }
//     return text;
// }
// console.log(generateWords(10))

//////////////////////////////////////////////////////////////////////////////////////////////////

//now we will generate the string by calling generateWords in generatePara because we want to call the function once button is clicked
//  and we will generate random letters
// now we will run one more loop inside the generatePara function so that we can randomly generate string

// const input=document.getElementById("input-box")
// const newcontainer=document.querySelector(".container")
// let num;
// // use num I will store our value in num 
// const generatePara=()=>{
//      num=(Number(input.value))
//     //   console.log(num)

//     const para=document.createElement("p");
//     generateWords()
//     para.innerText='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae expedita blanditiis ad tempore! Praesentium non voluptates hic, illum amet maiores vel? Aut beatae neque culpa ea excepturi iste corporis nisi?'

//     para.setAttribute("class",'myPara')

//     newcontainer.append(para)
// }

// const generateWords=(n)=>{
//     let text='';
//     const letter ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     for(let i=0;i<n;i++){
//         let random=(Math.random()*(letter.length-1)).toFixed(0)
//         text+=letter[random]
//         console.log(random)
//     }
//     return text;
// }
// console.log(generateWords(10))

///////////////////////////////////////////////////////////////////////////////////////////////////////

// const input=document.getElementById("input-box")
// const newcontainer=document.querySelector(".container")
// let num;
// // use num I will store our value in num 
// const generatePara=()=>{
//      num=(Number(input.value))
//     //   console.log(num)

//     const para=document.createElement("p");
//     let data=''
//     // generateWords()
//     for(let i=0;i<10;i++){
//         const randomNumbers=(Math.random()*15-1).toFixed(0)
//         data+=generateWords(randomNumbers)+" "
        
//     }
//     // console.log(data)
//     // we will get the data or random paragraph but in boweser
//     para.innerText='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae expedita blanditiis ad tempore! Praesentium non voluptates hic, illum amet maiores vel? Aut beatae neque culpa ea excepturi iste corporis nisi?'

//     para.setAttribute("class",'myPara')

//     newcontainer.append(para)
// }

// const generateWords=(n)=>{
//     let text='';
//     const letter ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     for(let i=0;i<n;i++){
//         let random=(Math.random()*(letter.length-1)).toFixed(0)
//         text+=letter[random]
//         console.log(random)
//     }
//     return text;
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// so we dont want data in browser console we want data in our page so we will pass data insed of para in generatePara
// const input=document.getElementById("input-box")
// const newcontainer=document.querySelector(".container")
// let num;
// // use num I will store our value in num 
// const generatePara=()=>{
//      num=(Number(input.value))
//     //   console.log(num)

//     const para=document.createElement("p");
//     let data=''
//     // generateWords()
//     for(let i=0;i<10;i++){
//         const randomNumbers=(Math.random()*15-1).toFixed(0)
//         data+=generateWords(randomNumbers)+" "
        
//     }
//     console.log(data) 
//     para.innerText='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae expedita blanditiis ad tempore! Praesentium non voluptates hic, illum amet maiores vel? Aut beatae neque culpa ea excepturi iste corporis nisi?'

//     para.setAttribute("class",'myPara')

//     newcontainer.append(data)
// }

// const generateWords=(n)=>{
//     let text='';
//     const letter ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     for(let i=0;i<n;i++){
//         let random=(Math.random()*(letter.length-1)).toFixed(0)
//         text+=letter[random]
//         // console.log(random)
//     }
//     return text;
// }
 // Now we can see data in our page but now in a manner we want 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  const input=document.getElementById("input-box")
// const newcontainer=document.querySelector(".container")
// let num;
// // use num I will store our value in num 
// const generatePara=()=>{
//      num=(Number(input.value))
//     //   console.log(num)

//     const para=document.createElement("p"); 
//     let data=''
//     // generateWords()

//     // but we dont want data only of 10 elemts in a Para and we wnat data according to number so we will pass num and loop will run till num
//     for(let i=0;i<num;i++){
//         const randomNumbers=(Math.random()*15-1).toFixed(0)
//         // data+=generateWords(randomNumbers)+" "
//         // if we want data in lowercase
//         data+=generateWords(randomNumbers).toLowerCase()+" "
        
//     }
//     // console.log(data) 
//     // so we will give data inted of hard code
//     para.innerText=data

//     para.setAttribute("class",'myPara')

//     newcontainer.append(para)
// }

// const generateWords=(n)=>{
//     let text='';
//     const letter ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     for(let i=0;i<n;i++){
//         let random=(Math.random()*(letter.length-1)).toFixed(0)
//         text+=letter[random]
//         // console.log(random)
//     }
//     return text;
// }
