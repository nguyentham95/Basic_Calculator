let input = document.querySelector(".input");
let items = Array.from(document.querySelectorAll(".item"));
items.forEach(function(btn){
    btn.addEventListener("click", function(){
        if (input.innerHTML=="0"){
            input.innerHTML ="";
        }
        if(btn.innerHTML=="AC"){
        input.innerHTML ="0";
        } 
        else if(btn.innerHTML == "DEL"){
            let arrText = Array.from(input.innerHTML);//TU STRING SANG ARRAY
            arrText.splice(arrText.length-1,1);//XOA KY TU CUOI
            if(arrText.length != 0){
                input.innerHTML = arrText.join("");

            }
            else {
                input.innerHTML ="0";
            }

        }
        else if(btn.innerHTML == "="){
            input.innerHTML = eval(input.innerHTML);

        } 
        else {
            input.innerHTML += btn.innerHTML;
        }
            
    })
})