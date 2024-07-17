import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import CategoryBar from "../components/CategoryBar"
import EventList from "../components/EventList";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import {fetchCategory, fetchEvent} from '../http/eventAPI'
import Pages from "../components/Pages";

const Shop = observer(() => {

    const {event} = useContext(Context)

    useEffect(() => {
        fetchCategory().then(data => event.setCategorys(data))
        fetchEvent(null, null, 1, 2).then(data => {
            event.setEvents(data.rows)
            event.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchEvent(event.selectedCategory.category_id, event.page, 6).then(data => {
            event.setEvents(data.rows)
            event.setTotalCount(data.count)
        })
    }, [event.page, event.selectedCategory])

    return (
        <Container>
            <Row>
                <Col md={3}>
                    <CategoryBar />
                </Col>
                <Col md={9}>
                    <EventList />
                    <Pages/>
                </Col>
            </Row>
        </Container>
    )
})

export default Shop;