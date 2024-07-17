import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Form, FormControl} from "react-bootstrap";
import { createCategory } from '../../http/eventAPI';

const CreateCategory = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const addType = () => {
        createCategory({category_name: value}).then(data => setValue(''))
        onHide()
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
                Додати категорію
                </Modal.Title>
            </Modal.Header>
            <Modal.Body> 
                <Form>
                    <FormControl 
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={'Введіть назву категорії'}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant='outline-success' onClick= {addType}>Додати</Button>
                <Button variant='outline-danger' onClick={onHide}>Зачинити</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateCategory;