let string = "";
let buttons = document.querySelectorAll(".btn");
let count = 0;
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML == '='){
           
            string = eval(string);
            document.querySelector('input').value = string;

        }else if(e.target.innerHTML == 'AC'){
           
            string = "";
            document.querySelector('input').value = string;
           
        }
        else if(e.target.innerHTML == "CL"){
          
            string = string.substring(0,string.length-1);
            document.querySelector('input').value = string;
        }

        else if(e.target.innerHTML == '%'){
           
            let number = +string;
             number = number/100;
             string = String(number);
            document.querySelector('input').value = string;
        }
        else{
            count++;
            string = string+ e.target.innerHTML;
            document.querySelector('input').value = string;
        }
       
    })
})

