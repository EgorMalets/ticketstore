import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import {useParams} from 'react-router-dom'
import { fetchOneEvent } from "../http/eventAPI";
import moment from 'moment'
import { BASKET_ROUTE } from '../utils/consts'
import {useNavigate} from "react-router-dom"

const EventPage = () => {

    const [event, setEvent] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneEvent(id).then(data => setEvent(data))
    },[])

    const navigate = useNavigate();

    return (
        <Container>
            <Row>
                <Col md={4} className="mt-5">
                    <Image width={280} height={404} src={process.env.REACT_APP_API_URL + event.img} />
                </Col>
                <Col md={5} className="mt-5">
                    <div>
                        <div style={{fontSize: 26}}>{event.event_name}</div>
                        <div style={{fontSize: 26}}>{moment(event.eventdatetime).format('DD MMM, HH:mm')}</div>
                        <div style={{fontSize: 26}}>Місто: {event.event_city}, Локація: {event.event_location}</div>
                    </div>
                </Col>  
                <Col md={3} className="mt-5" style={{paddingLeft: 100}}>
                    <div>
                        <div style={{fontSize: 26}}>Ціна: {event.ticketprice} грн</div>
                        <div><Button style={{fontSize: 26}} className="mt-2" variant="outline-warning" onClick={() => navigate(BASKET_ROUTE)} >Купити квиток</Button></div>
                    </div>
                </Col> 
                <div style={{fontSize: 26, marginTop: 30}}>{event.event_description}</div>
            </Row>
        </Container>
    )
}

export default EventPage;