

     const input=document.getElementById("input-box")
     const newcontainer=document.querySelector(".container")
     let num;
     const generatePara=()=>{
          num=(Number(input.value))
         //   console.log(num)
         const para=document.createElement("p"); 
         let data=''
         // generateWords()
         for(let i=0;i<num;i++){
             const randomNumbers=(Math.random()*15-1).toFixed(0)
             data+=generateWords(randomNumbers).toLowerCase()+" "
         }
    
         para.innerText=data
     
         para.setAttribute("class",'myPara')
     
         newcontainer.append(para)
     }
     
     const generateWords=(n)=>{
         let text='';
         const letter ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
         for(let i=0;i<n;i++){
             let random=(Math.random()*(letter.length-1)).toFixed(0)
             text+=letter[random]
             // console.log(random)
         }
         return text;
     }
