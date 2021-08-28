const option1=document.getElementById("option1");
const option2=document.getElementById("option2");
const option3=document.getElementById("option3");
const audio=document.getElementById("myaudio");

let answer=0;


function generate_equation(){
    let num1=Math.floor(Math.random()*13);
    let num2=Math.floor(Math.random()*13);
    let dummyans1=Math.floor(Math.random()*13);
    let dummyans2=Math.floor(Math.random()*13);

    let allAnswers=[];
    let switchAnswer=[];

    answer=num1*num2;
     
    document.getElementById("num1").innerHTML=num1;
    document.getElementById("num2").innerHTML=num2;

    allAnswers=[answer,dummyans1,dummyans2];

    for(i=allAnswers.length;i--;){
        switchAnswer.push(allAnswers.splice(Math.floor(Math.random()*(i+1)),1)[0]);
    }

    option1.innerHTML=switchAnswer[0];
    option2.innerHTML=switchAnswer[1];
    option3.innerHTML=switchAnswer[2];
    

}

option1.addEventListener("click",function(){
    if(option1.innerHTML==answer){
        generate_equation();
    }
    else{
        audio.play();
    }
});

option2.addEventListener("click",function(){
    if(option2.innerHTML==answer){
        generate_equation();
    }
    else{
        audio.play();
    }
});

option3.addEventListener("click",function(){
    if(option3.innerHTML==answer){
        generate_equation();
    }
    else{
        audio.play();
    }
});

generate_equation();