import { useState } from 'react'
import './App.css'


const TriviaQuestions= 
[ {question: "What is the largest planet in our solar system?",
  answer: "Jupiter"},
  {question: "Which country is commonly referred to as the Land of the Rising Sun?",
    answer: "Japan"},
  {question: "Who wrote the famous play 'Romeo and Juliet'?",
   answer: "Shakespeare"},
  {question: "What is the smallest bone in the human body?",
    answer: "The Stapes(in the ear)"},
  {question: "Which artist painted the Mona Lisa?",
  answer: "Leonardo da Vinci"},
  {question: "What is the capital city of Australia?",
  answer: "Canberra"},
  {question: "What is the chemical symbol for the element Gold?",
  answer: "Au"},
  {question: "In which year did the Titanic sink?",
  answer: "1912"},
  {question: "Who wrote the novel '1984'?",
  answer: "George Orwell"},
  {question: "Which planet is known as the Red Planet?",
  answer: "Mars"},
  {question: "What is the largest organ of the human body?",
  answer: "Skin (it puts the lotion)"},
  {question: "Who painted the ceiling of the Sistine Chapel?",
  answer: "Michelangelo"},
  {question: "What is the world's longest river?",
  answer: "The Nile River"},
  {question: "Which gas do plants absorb from the atmosphere?",
  answer: "Carbon dioxide (CO2)"},
  {question: "Who was the first person to step on the moon?",
  answer: "Neil Armstrong"},
  {question: "What is the largest ocean on Earth?",
  answer: "Pacific Ocean"},
  {question: "Who discovered penicillin?",
  answer: "Alexander Fleming"},
  {question: "What is the hardest natural substance on Earth?",
  answer: "Diamond"},
{question: "Which mammal can fly without wings?",
  answer: "Bat"},
  {question: "What is the capital city of Spain?",
  answer: "Madrid"}];

function App(){
 
const[questionIndex, setQuestionIndex]=useState(0);
const [showAnswer, setShowAnswer] = useState(false);

function handleClickNext(){
      setQuestionIndex(()=>(questionIndex + 1))
    }

function handleClickPrev(){
      setQuestionIndex(()=>(questionIndex - 1))
      console.log(questionIndex)}


return(
  <>
        <div className='trivia-card'>
        {TriviaQuestions[questionIndex].question}
        {/* {(currentQuestion.answer)} */}

  </div>
    
  <button onClick={handleClickPrev}>Previous</button>
  <button onClick={handleClickNext}>Next</button>
  {/* <button onClick={handleClickShow}>Show Answer</button> */}
  </>
)}
  
  // function DisplayQuestion(){
//     console.log("Question:" + currentQuestion.question);  
// return(<>
//        <div className='trivia-card'>
//           {(currentQuestion.question)}
//       </div>
//       </>     
// )}

   




  




// )}

// function App() {  
//   const[, setcardShown]=useState(0)    

//   return (
//     <>
//     <div className='main-header'>
//       <h1>It's Trivia Time!</h1>
//         <h2>Click on Trivia Card to Reveal Answer</h2>
//     </div>
//     <DisplayQuestion/>
//     <button 
//       onClick={NextQuestion}>Previous Question
//     </button>
//     <button 
//     onClick={NextQuestion}>Next Question</button>
   
//     </> 
//   )}





    // return(
      // <div className='trivia-card'>
      // {(currentQuestion.question)}
      //  {(currentQuestion.answer)}
  //  </div>
  // )}
//   setQuestion(TriviaQuestions[+ 1])
//   console.log(question)
// }
 
// function handleClickPrev(){
//   setQuestion(TriviaQuestions[- 1].question)
//   console.log(question)




 // setQuestion=(TriviaQuestions[0].question)
// let currentIndex = 0
// const currentQuestion = TriviaQuestions[0].question
// const[question,setQuestion]=useState(currentQuestion)








// setQuestion=(currentIndex + 1)






  // import QuestionAndAnswer from './Question.jsx'
  // const [filteredTrivia, setfilteredTrivia] = useState(TriviaQuestions)
  
 // import DisplayQuestion from './display.jsx';
  // const [flipped, setflipped]=useState(false)
  // function handleClick(){  TriviaQuestions.map((question, index) =>{
  //   console.log("The current iteration is: " + index)
  //   console.log("The current question is: " + question)
  //   return(question + index)
  // })}
    // setflipped(!flipped)
    // console.log(flipped)}

    
    {/* filter TriviaQuestions array by index */}
    {/* {filteredTrivia.map((list, index)=>{ 
      return(
      <QuestionAndAnswer
        key={list.question} 
        question={list.question} 
        answer={list.answer}
        
        />)} */}
        

    
export default App
