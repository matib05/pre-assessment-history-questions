import React from 'react';
import { Row,Col } from 'react-bootstrap';

const ScoreBoard = (props) => {
    return (
        <Row className='justify-content-md-center choices-container'>
            <Col md={2}>Number Correct: {props.correct}</Col>
            <Col md={2}>Number Incorrect: {props.incorrect}</Col>
        </Row>
    );
};


export default ScoreBoard;