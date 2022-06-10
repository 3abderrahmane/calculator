let divsquare = document.getElementsByClassName('square');

let buttons = document.querySelectorAll('button');


for (let i =0; i < buttons.length; i++){
     buttons[i].addEventListener('click', function(e){
    // event only triger when pressed on buttons
        if(e.target.tagName === 'BUTTON'){
        
            // variable for value

            let valueOutput = document.getElementById('total').innerHTML;   

            // trigered when numbers are clicked
            if(e.target.className === 'square number'){ 
                disable = false;
                document.getElementById('total').innerHTML += e.target.value;  
            }

            // trigered when operators are clicked
            if(e.target.className === 'square operation'){ 
               if(!disable){
                document.getElementById('total').innerHTML += e.target.value;
                disable = true;
               } 
            }
            
            //trigered when dot is clicked
            if(e.target.className === 'square dot'){ 
                if(!disable){
                 //console.log(e.target.value);
                 document.getElementById('total').innerHTML += e.target.value;
                 disable = true;
                }   
            }

             // trigered when number * number is clicked
             if(e.target.className === 'square power'){ 
                 document.getElementById('total').innerHTML *= document.getElementById('total').innerHTML;
            }

             // trigered when root of a number is clicked
            if(e.target.className === 'square root'){ 
                 document.getElementById('total').innerHTML = Math.sqrt(document.getElementById('total').innerHTML);
            }

            // trigered when equality button is clicked
            if(e.target.className === 'square equal'){  
                  document.getElementById('total').innerHTML = eval(valueOutput);
            }

            // trigered when 'Del' button is clicked
            if (e.target.className === "square erase"){
               //document.getElementById('total').innerHTML = "";
               document.getElementById('total').innerHTML = document.getElementById('total').innerHTML.slice(0, -1);
            }

            // trigered when C(clear) is clicked
            if(e.target.className === 'square clear'){  
                document.getElementById('total').innerHTML = "";
           }



        }

    }, false);
}


for(let i = 0; i < divsquare.length; i++){
    divsquare[i].onmouseenter = function(){
        divsquare[i].style.backgroundColor = "white";
    };
    divsquare[i].onmouseleave = function(){
        divsquare[i].style.backgroundColor = "mediumblue";
    };
};









