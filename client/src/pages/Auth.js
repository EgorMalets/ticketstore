import React, { useContext, useState } from "react";
import {Button, Card, Container, Form} from "react-bootstrap";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { Link, useLocation, useNavigate } from "react-router-dom";  
import { registration, login } from "../http/userApi";
import { observer } from 'mobx-react-lite'
import { Context } from "..";

const Auth = observer(() => {

    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [middle_name, setMiddlename] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')

    const click = async () => {
        try {
            let data;
            if(isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password, name, surname, middle_name, country, city);
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message )
        }
        
    }

    return (
        <Container 

            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
        {isLogin ?
        <Card style={{width: 600}} className="p-5">
            <h2 className="m-auto">Авторизація</h2>
            <Form className="d-flex flex-column">
                <Form.Control 
                    className="mt-3"
                    placeholder="Введіть email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Form.Control 
                    className="mt-3"
                    placeholder="Введіть пароль"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                />
                        <div style={{display: "flex", marginTop: "5px"}}>
                        Немає облікового запису? <Link style={{marginLeft: "5px"}} to={REGISTRATION_ROUTE}>Зареєструйся!</Link>
                        </div>
                    <Button 
                        variant="outline-success"
                        className="align-self-end"
                        onClick={click}
                    >
                        Увійти
                    </Button>
            </Form>
        </Card>
        :
        <Card style={{width: 600}} className="p-5">
            <h2 className="m-auto">Реєстрація</h2>
            <Form className="d-flex flex-column">
                <Form.Control 
                    className="mt-3"
                    placeholder="Введіть email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <Form.Control 
                    className="mt-3"
                    placeholder="Введіть пароль"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    required
                />
                <Form.Control 
                    className="mt-3"
                    placeholder="Введіть ім'я"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <Form.Control 
                    className="mt-3"
                    placeholder="Введіть прізвище"
                    value={surname}
                    onChange={e => setSurname(e.target.value)}
                    required
                />
                <Form.Control 
                    className="mt-3"
                    placeholder="Введіть по-батькові"
                    value={middle_name}
                    onChange={e => setMiddlename(e.target.value)}
                    required
                />
                <Form.Control 
                    className="mt-3"
                    placeholder="Введіть країну"
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                    required
                />
                <Form.Control 
                    className="mt-3"
                    placeholder="Введіть місто"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    required
                />

                        <div style={{display: "flex", marginTop: "5px"}}>
                        Є аккаунт? <Link to={LOGIN_ROUTE} style={{marginLeft: "5px"}}>Увійдіть!</Link>
                        </div>
                    <Button 
                        variant="outline-success"
                        className="align-self-end"
                        onClick={click}
                    >
                        Реєстрація
                    </Button>
            </Form>
        </Card>
        }
        </Container>
    )
})

export default Auth;