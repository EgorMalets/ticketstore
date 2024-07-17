import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row, Form, Card } from "react-bootstrap";
import {useParams} from 'react-router-dom'
import { fetchSecEvent } from "../http/eventAPI";
import moment from 'moment'
import {useNavigate} from "react-router-dom"


const Basket = () => {


    return (
        <Container>
            <div style={{fontSize: 26}}>Оформлення замовлення</div>
            <Row>
                <div className="mt-3" style={{display: 'flex'}}>
                    <img src="https://internet-bilet.ua/images/tour_header/size2/tr_1706555506_65b7f87209804.jpg?v=20240129211159"></img>
                    <div style={{marginLeft: 25}}>
                        <div style={{fontSize: 26}}>WELLBOY</div>
                        <div style={{fontSize: 26}}>{moment('08 Jun, 18:00').format('DD MMM, HH:mm')}</div>
                        <div style={{fontSize: 26}}>Місто: Vinnytsia, Локація: Академічний музично-драматичний театр ім. М. Садовського</div>
                        <div style={{fontSize: 26}}>Ціна: 800 грн</div>
                    </div>
                </div>  
            </Row>
            <h2 className="m-auto mt-3">Особисті дані</h2>
            <Form className="d-flex flex-column">
                <Form.Control 
                    className="mt-3"
                    placeholder="Введіть email"
                    required
                />
                <Form.Control 
                    className="mt-3"
                    placeholder="Введіть ім'я"
                    required
                />
                <Form.Control 
                    className="mt-3"
                    placeholder="Введіть прізвище"
                    required
                />
                <Form.Control 
                    className="mt-3"
                    placeholder="Введіть по-батькові"
                    required
                />              
                <Form.Control 
                    className="mt-3"
                    placeholder="Введіть номер телефону"
                    required
                />
                    <Button 
                        variant="outline-success"
                        className="align-self-end mt-3"
                    >
                        Купити квиток
                    </Button>
            </Form>
        </Container>
    )
}


export default Basket;