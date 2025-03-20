const questions=[
    {//1
        'que': 'Which of the following is a markup language?',
        'a':'HTML',
        'b':'CSS',
        'c':'JavaScript',
        'd':'PHP',
        'correct':'a',
    },
    {//2
        'que': "What year was JavaScript launched?",
        'a':"1996",
        'b':"1995",
        'c':"1994",
        'd':"none of then above",
        'correct':"b",
    },
    {//3
        'que': "What does CSS stand for?",
        'a':"Hypertext Markup Language",
        'b':"Cascading Style Sheet",
        'c':"Jason object Notation",
        'd':"Helicopter Terminates Motorboats Lamborginis",
        'correct':"b",
    },
    {//4
        'que': "Who is making the Web standards?",
        'a':"Mozilla",
        'b':"Google",
        'c':"Microsoft",
        'd':"The World Web Consortium",
        'correct':"d",
    },
    {//5
        'que': "How do you call a function named myFunction?",
        'a':"call function myFunction()",
        'b':"call  myFunction()",
        'c':"myFunction()",
        'd':"call_myFunction()",
        'correct':"c",
    },
    {//6
        'que': "Where in an HTML document is the correct place to refer to an external style sheet?",
        'a':"In the <body> section",
        'b':"At the end of the document",
        'c':"In the <head> section",
        'd':"In the <script> section",
        'correct':"c",
    },
    {//7
        'que': "Which HTML attribute is used to define inline styles?",
        'a':"font",
        'b':"style",
        'c':"styles",
        'd':"class",
        'correct':"b",
    },    
    {//8
        'que': "Inside which HTML element do we put the JavaScript?",
        'a':"<js>",
        'b':"javascript",
        'c':"scripting",
        'd':"script",
        'correct':"d",
    },
    {//9
        'que': "How to write an IF statement in JavaScript?",
        'a':"if i = 5 then",
        'b':"if(i==5)",
        'c':"if i==5 then",
        'd':"if i = 5",
        'correct':"b",
    },   
    {//10
        'que': "Choose the correct HTML element for the largest heading:",
        'a':"<heading>",
        'b':"<head>",
        'c':"h6",
        'd':"h1",
        
        'correct':"d",
    }, 
]

let index=0;
let total =questions.length;
let right=0,
    wrong=0;
const quesBox=document.getElementById("quesBox"); 
const optionInputs =document.querySelectorAll('.options'); 
const loadQuestion=()=>{
    if(index===total){
        return endQuiz()
    }
    reset();
    const data=questions[index]
    console.log(data);
    quesBox.innerText=`${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3  ].nextElementSibling.innerText=data.d;
}
const submitQuiz=()=>{
    const data=questions[index]
    const ans =getAnswer();
    console.log(ans,data.correct);
    if(ans==data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return ;
}

const getAnswer=()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
                answer=input.value;
            }
        }
    )
    return answer;
}

const reset=()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}   

const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
    <div style="text-align:center">
        <h3> Thank you for playing the quiz</h3>
        <h2> ${right}/${total} are correct</h2>
    </div>
    `
}

loadQuestion();