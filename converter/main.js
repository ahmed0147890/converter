let num =document.getElementById('num');
let select_from=document.getElementById('select_from');
let select_to =document.getElementById('select_to');
let btn =document.getElementById('btn');
let result=document.querySelector(".result");

//////////////////////////////////////
btn.onclick=function(e){
    e.preventDefault();
 

    if(num.value!=""&& select_to.value!=""){
        if(select_to.value=="..."){
            alert("you must choose any currency")
        }
        if(select_to.value =="Egypt"){
           result.innerHTML=num.value*19.16 +" pound";
        }
        if(select_to.value =="Tunisian"){
           result.innerHTML=num.value*3.30 +" Dinar";
        }
        if(select_to.value =="Canadian"){
           result.innerHTML=num.value*1.36 +" dollar canadian";
        }
        if(select_to.value =="Emirates"){
           result.innerHTML=num.value*3.67 +" dirham";
        }
        if(select_to.value =="Euro"){
           result.innerHTML=num.value*1.03 + "&euro;"
        }
        if(select_to.value =="British"){
           result.innerHTML=num.value*0.92 + " British pound";
        }

    }
    else{
        alert("you must write a number");
    }
}