import React from 'react';
import { Button, Row, Col} from 'react-bootstrap';
import {decodeHTML} from '../Utils';

const Choices = ({answers, correctAnswer, showAlert}) => {

    const buttonOnClickHandler = event => {
        if(event.target.value === decodeHTML(correctAnswer)) {
            showAlert('success');
        } else {
            showAlert('danger');
        }
    }

    return (
        <Row className='justify-content-md-center choices-container'>
            {answers && answers.map((answer, index) => (
                        <Col md={2} key={index}>
                            <Button 
                                variant="outline-info" 
                                size="lg" 
                                block 
                                value={decodeHTML(answer)} 
                                onClick={buttonOnClickHandler}>{decodeHTML(answer)}</Button>
                        </Col>
                    ))
            }
        </Row>
    );
};


export default Choices;