import React, { useState } from "react";
import "./App.css";
import data from "./sample_data.json";
import Question from "./components/Question";
import NextQuestion from "./components/NextQuestion";

function App() {
  let [QuestionNumber, setCurrentQuestionNumber] = useState(0);
  return (
    //let [QuestionNumber, setcurrentQuestionNumber] = useState
    //let [QuestionNumber, setcurrentQuestionNumber] = useState
    //currentQuestionNumber//currentQuestionNumber =data[0].question.text ;
    // =data[0].question.text ;
    <div className="app">
      <h1 className="title">Trivia!</h1>
      <Question questioner={data[QuestionNumber].question.text} />
      <NextQuestion QuestionNumber={QuestionNumber} />
      <Question questioner={data[QuestionNumber].question.choices} />
    </div>
  );
}

export default App;
