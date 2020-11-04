import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/Header';
import QuestionScreen from './Screens/QuestionScreen';
import {shuffle} from './Utils';

const App = () => {

  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [numberCorrect, setNumberCorrect] = useState(0);
  const [numberIncorrect, setNumberIncorrect] = useState(0);

  useEffect(() => {
      function fetchQuestionData() {
        axios.get('https://opentdb.com/api.php?amount=10').then(questionData => {
          setQuestions(questionData.data.results);
        });
      }
      fetchQuestionData()
  }, []);

  const getAnswers = () => {
    if (questions[questionIndex]) {
      let choices = questions[questionIndex].incorrect_answers;
      choices.push(questions[questionIndex].correct_answer);
      choices = shuffle(choices);
      choices = [...new Set(choices)];
      return choices
    }
  }

  const increment = (variant) => {
    variant === 'danger' ? setNumberIncorrect(numberIncorrect+1) : setNumberCorrect(numberCorrect+1);
  }

  return (
    <div className="App">
      <Header />
      <QuestionScreen 
        questionIndex={questionIndex}
        question={questions[questionIndex] && questions[questionIndex].question} 
        answers={getAnswers()} 
        correctAnswer={questions[questionIndex] && questions[questionIndex].correct_answer}
        nextQuestion={() => setQuestionIndex(questionIndex+1)}
        incrementCounter={increment}
        numberIncorrect={numberIncorrect}
        numberCorrect={numberCorrect}/>
    </div>
  );
}

export default App;
