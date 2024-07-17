import React, { useContext, useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Dropdown, Form, FormControl} from "react-bootstrap";
import { Context } from '../..';
import {createEvent, fetchCategory, fetchEvent} from '../../http/eventAPI'
import { observer } from 'mobx-react-lite';

const CreateEvent = observer(({show, onHide}) => {
    const {event} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [datetime, setDatetime] = useState('')
    const [desc, setDesc] = useState('')
    const [city, setCity] = useState('')
    const [location, setLocation] = useState('')
    const [total, setTotal] = useState('')
    const [file, setFile] = useState(null)


    useEffect(() => {
        fetchCategory().then(data => event.setCategorys(data))
        fetchEvent().then(data => event.setEvents(data.rows))
    }, [])

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addEvent = () => {
        console.log(event.selectedCategory.category_id)
        const formData = new FormData()
        formData.append('event_name', name)
        formData.append('ticketprice', `${price}`)
        console.log(formData.append('eventdatetime', datetime))
        console.log(datetime)
        formData.append('event_description', desc)
        formData.append('event_city', city)
        formData.append('event_location', location)
        formData.append('totalticketquantity', total)
        formData.append('img', file)
        formData.append('categoryCategoryId', event.selectedCategory.category_id)
        createEvent(formData).then(data => onHide())

    }



    return (
        <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Додати подію
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className='mt-3 mb-3'>
                        <Dropdown.Toggle>{event.selectedCategory.category_name || "Виберіть категорію"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {event.categorys.map(category => 
                                <Dropdown.Item onClick={() => event.setSelectedCategory(category)} key={category.category_id}>{category.category_name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control 
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className='mt-3'
                        placeholder='Введіть назву події'
                    />
                    <Form.Control 
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className='mt-3'
                        placeholder='Введіть ціну квитка'
                        type='number'
                    />
                    <Form.Control 
                        value={datetime}
                        onChange={e => setDatetime(e.target.value)}
                        className='mt-3'
                        placeholder='Введіть дату події'
                        type='datetime-local'
                    />
                    <Form.Control 
                        value={desc}
                        onChange={e => setDesc(e.target.value)}
                        className='mt-3'
                        placeholder='Введіть описв події'
                    />
                    <Form.Control 
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        className='mt-3'
                        placeholder='Введіть місто події'
                    />
                    <Form.Control 
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                        className='mt-3'
                        placeholder='Введіть локацію події'
                    />
                    <Form.Control 
                        value={total}
                        onChange={e => setTotal(Number(e.target.value))}
                        className='mt-3'
                        placeholder='Введіть загальну кількість квитків'
                        type='number'
                    />
                    <Form.Control 
                        className='mt-3'
                        type='file'
                        onChange={selectFile}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant='outline-success' onClick= {addEvent}>Додати</Button>
                <Button variant='outline-danger' onClick={onHide}>Зачинити</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateEvent;