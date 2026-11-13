let quizSection = document.querySelector(".quiz-screen")
let welcomeBtm =  document.querySelector(".start-button")
let WelcomeScreen = document.querySelector(".welcome-screen")   
let quationContainer = document.querySelector(".question-area")
let optionContainer = document.querySelector(".options-container")
let nextButton = document.querySelector(".next-button")
let qutionScore = document.querySelector(".question-number")
let ScoreScreen = document.querySelector(".score")
let resultScreen = document.querySelector(".result-screen")
let playAgainBtn = document.querySelector(".restart-button")
let resultScore = document.querySelector(".final-score")   
let score = 0;
let qutionN = 1;
let currentquation = 0

let myQuestions = [
    {
       question : "Who is the Prime Minister?",
       options : ["Narendra modi","rahul gandhi","sunita","amit shah"],
       correctAnswer : 0
    },
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        correctAnswer: 1
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 1
    },
    {
        question: "Which language runs in the browser?",
        options: ["Python", "Java", "JavaScript", "C++"],
        correctAnswer: 2
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<div>", "<a>", "<p>", "<img>"],
        correctAnswer: 1
    }
];



function alertt (){
    alert("wrong answer! try again")
    
}


function createQuiz(qution,option1,option2,option3,option4){
    

    let h2 = document.createElement("h2")
    h2.classList.add("question")
    h2.textContent = qution
    quationContainer.prepend(h2)

    let button1 = document.createElement("button")
    button1.classList.add("option")
    let span1 = document.createElement("span")
    span1.classList.add("option-letter")
      span1.textContent = `A`
      button1.append(span1,option1)
    optionContainer.appendChild(button1)
    


    let button2 = document.createElement("button")
    button2.classList.add("option")
    let span2 = document.createElement("span")
    span2.classList.add("option-letter")
      span2.textContent = `B`
        button2.append(span2,option2)
    optionContainer.appendChild(button2)


    let button3 = document.createElement("button")
    button3.classList.add("option")
    let span3 = document.createElement("span")
    span3.classList.add("option-letter")
      span3.textContent = `C`
           button3.append(span3,option3)
    optionContainer.appendChild(button3)



    let button4 = document.createElement("button")
    button4.classList.add("option")
    let span4 = document.createElement("span")
    span4.classList.add("option-letter")
      span4.textContent = `D`
      button4.append(span4,option4)
    optionContainer.appendChild(button4)
    



    let allOptions = document.querySelectorAll(".option")
    allOptions.forEach((optionn , index )=>{
    optionn.addEventListener("click",()=>{
    let correctIndex = myQuestions[currentquation].correctAnswer
    let correctOption = allOptions[correctIndex]

    if(index === correctIndex){
       optionn.classList.add("correct")
       score += 1
       ScoreScreen.textContent = `SCORE: ${score}/5`
    }else{
        alertt()
        optionn.classList.add("wrong")
        correctOption.classList.add("correct")   
    
          }
    
       })
   })

}

welcomeBtm.addEventListener("click", function() {
WelcomeScreen.style.display = "none"
quizSection.classList.remove("hidden") 
  
  createQuiz( 
        myQuestions[currentquation].question,
        myQuestions[currentquation].options[0],
        myQuestions[currentquation].options[1],
        myQuestions[currentquation].options[2],
        myQuestions[currentquation].options[3],
    )
})


nextButton.addEventListener("click", function() {
    h2 = document.querySelector(".question")
    button1 = document.querySelector(".option")
    button2 = document.querySelector(".option:nth-child(2)")
    button3 = document.querySelector(".option:nth-child(3)")
    button4 = document.querySelector(".option:nth-child(4)")

    h2.remove()
    button1.remove()
    button2.remove()        
    button3.remove()
    button4.remove()

    currentquation += 1
    qutionN += 1
    qutionScore.textContent = ` ${qutionN}/5`
    
    
     if(currentquation === myQuestions.length -0 ){
       quizSection.classList.add("hidden")
       resultScreen.classList.remove("hidden")
       resultScore.textContent = ` ${score}/5`
         }else{
         createQuiz( 
        myQuestions[currentquation].question,
        myQuestions[currentquation].options[0],
        myQuestions[currentquation].options[1],
        myQuestions[currentquation].options[2],
        myQuestions[currentquation].options[3],
    )
         }

})

playAgainBtn.addEventListener("click", function() {
    WelcomeScreen.style.display = "flex"
    resultScreen.classList.add("hidden")
    score = 0;
    qutionN = 1;
    currentquation = 0
    ScoreScreen.textContent = `SCORE: 0/5`
    qutionScore.textContent = `0/5`
    console.log("complate captain") 
})
