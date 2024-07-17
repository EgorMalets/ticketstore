import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateCategory from "../components/modals/CreateCategory";
import CreateEvent from "../components/modals/CreateEvent";

const Admin = () => {
    const [eventVisible, setEventVisible] = useState(false)
    const [categoryVisible, setCategoryVisible] = useState(false)
    const [deleteEvent, setDeleteEvent] = useState(false)

    return (
        <Container className="d-flex flex-column ">
            <Button variant={"outline-dark"} className="mt-4 p-2" onClick={() => setCategoryVisible(true)}>Додати категорію</Button>
            <Button variant={"outline-dark"} className="mt-4 p-2" onClick={() => setEventVisible(true)}>Додати подію</Button>
            <Button variant={"outline-dark"} className="mt-4 p-2" onClick={() => setDeleteEvent(true)}>Видалити подію</Button>
            <CreateCategory show={categoryVisible} onHide={() => setCategoryVisible(false)}/>
            <CreateEvent show={eventVisible} onHide={() => setEventVisible(false)}/>
            <CreateEvent show={deleteEvent} onHide={() => setDeleteEvent(false)}/>
        </Container>

        
    )
}

export default Admin;