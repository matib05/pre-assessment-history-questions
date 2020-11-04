import React, {useState} from 'react';
import { Alert, Container} from 'react-bootstrap';
import Question from '../Components/Question';
import Choices from '../Components/Choices';
import ScoreBoard from '../Components/ScoreBoard';
import {decodeHTML} from '../Utils';


const QuestionScreen = (props) => {
    const [showAlert, setShowAlert] = useState(false);
    const [variant, setVariant] = useState('danger');

    const showAlertHandler = variant => {
        setVariant(variant);
        setShowAlert(true);
        props.incrementCounter(variant);
    }

    const handleNextQuestion = () => {
        setShowAlert(false);
        props.nextQuestion();
    }

    return (
        <Container fluid>
            {showAlert && <Alert className="mt-3" variant={variant}>
                                {variant ==='danger' ? `Incorrect! The correct answer is:  ${decodeHTML(props.correctAnswer)}` : 'Correct'}{' '}
                                <br/>
                                <Alert.Link onClick={handleNextQuestion} variant="light">Next Question</Alert.Link>
                            </Alert>}
            <Question question={props.question} questionIndex={props.questionIndex}/>
            <Choices answers={props.answers} 
                    correctAnswer={props.correctAnswer}
                    showAlert={showAlertHandler}/>
            <ScoreBoard
                correct={props.numberCorrect}
                incorrect={props.numberIncorrect}/>
        </Container>
    );
};


export default QuestionScreen;