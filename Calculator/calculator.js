        var todo = document.getElementById("result").value;

         function dis(val) 
         { 
             document.getElementById("result").value+=val 
         } 

         function solve() 
         { 
             let x = document.getElementById("result").value 
             let y = eval(x);
            document.getElementById("result") .value = y 
         } 
           
         function clr() 
         { 
             document.getElementById("result").value = "" 
         } 

         
        todo.addEventListener("keypress",function(event){
            if(event.keyCode === 13){
                event.preventDefault();
                solve();
            }
        })
    