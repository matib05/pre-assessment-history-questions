import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {decodeHTML} from '../Utils';

const Question = ({question, questionIndex}) => {
    console.log(questionIndex);
    return (
        <Row className="question-container">
            <Col >
                {
                    question && questionIndex <  10 ?
                        <h3>Question {questionIndex+1}/10: {decodeHTML(question)}</h3>
                    :
                        <h3>That's it!</h3>
                }
            </Col>
        </Row>

    );
};


export default Question;