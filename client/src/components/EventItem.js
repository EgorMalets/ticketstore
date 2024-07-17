import React, { useContext } from "react";
import { Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image"
import {useNavigate} from "react-router-dom"
import { EVENT_ROUTE } from "../utils/consts";
import moment from 'moment'

const EventItem = ({event}) => {
    const navigate = useNavigate()
    return (
        <Col md = {4} className="mt-5" onClick={() => navigate(EVENT_ROUTE + '/' + event.event_id)}>
            <Card style={{width: 210, cursor: "pointer", marginLeft: 90}} border={"light"}>
                <Image width={210} height={304} src={process.env.REACT_APP_API_URL + event.img}></Image>
                <div className="justify-content-between align-items-center">
                    <div>{event.event_name}</div>
                    <div>{moment(event.eventdatetime).format('DD MMM, HH:mm')}</div>
                </div>
            </Card>
        </Col>
    );
};

export default EventItem;