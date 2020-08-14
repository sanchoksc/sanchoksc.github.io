var project= document.getElementsByClassName("b1");
var description= document.getElementsByClassName("p1");

var details= ["Implemented Fisher and Perceptron Models for movie ratings dataset and classified them accordingly.ANN was also used to predict movie recommendations.implemented in python",
"Bulit an application which records various parameters,schedules appointments and updates them in the databaseDesigned for medical center of our campus,Flask and SQL were used.",
"Implemented IBM Alignment model for pairing words of two languages(English & German),Phrase based extraction was used.NLTK module was used,implemented in python",
"Built a spam mail classifier based on bayesian model.80% accuracy was achieved.Implemented in python",
"Built an automatic quiz generator from a set of questions for each user,depending on their categories,similar to an online test.implemented in java,swing was used for graphical interface",
"Bible was taken as the dataset and verses from bible which matched with the query were returned.Built using vector space model concept.implemented in python"];

for(let i=0;i<6;i++){
    project[i].addEventListener("click",function()
        { 
            if(description[i].innerText==""){
                description[i].innerHTML=`${details[i]}`;
            }
            else{
                description[i].innerHTML=``;
            }
        }
    )
}    