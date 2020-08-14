var project= document.getElementsByClass(".b1");
var description= document.getElementsByClass(".p1");

var details= ["Implemented Fisher and Perceptron Models for movie ratings dataset and classified them accordingly.ANN was also used to predict movie recommendations.implemented in python"];

function display(x) {
    for(let i=0;i<5;i++){
        project[i].addEventListener(function()
        { 
            if(p1.display=="none"){
                project[i].innerHTML=`${details[i]}`;
            }
            else{
                p1.innerHTML=``;
            }
        }
    )
    }    
}