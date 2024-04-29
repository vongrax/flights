import React, {useEffect, useState} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import {useDispatch} from "react-redux";
import {FlightActions} from "../../store/actions/action";
import {useHistory} from "react-router";
import './FlightForm.css'
import {Flights} from "../../store/reducer/types";

interface FlightFormProps {
    data?: Flights;
}

export type formStateType = {
    flightNumber: string,
    airline: string,
    departureCity: string,
    arrivalCity: string,
    aircraftType: string,
    departureTime: string,
    arrivalTime: string,
    actualDepartureTime: string,
    actualArrivalTime: string,
    status: string,
    comment: string,
}

const FlightForm: React.FC<FlightFormProps> = ({data}) => {

    const [formState, setFormState] = useState<formStateType>({
        flightNumber: '',
        airline: '',
        departureCity: '',
        arrivalCity: '',
        aircraftType: '',
        departureTime: '',
        arrivalTime: '',
        actualDepartureTime: '',
        actualArrivalTime: '',
        status: '',
        comment: '',
    });

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({...formState, [event.currentTarget.name]: event.currentTarget.value});
    };

    useEffect(() => {
        if (data) {
            setFormState({...data});
        }
    }, [data])


    const dispatch = useDispatch()
    const history = useHistory()


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(FlightActions.createFlightRequest(formState))
        history.push('/admin')
    }

    const handleCanceled = () => {
        history.push('/admin')
    }

    const edit = () => {
        dispatch(FlightActions.editFlightRequest(formState))
        history.push('/admin')
    }

    const handleDelete = () => {
        dispatch(FlightActions.deleteFlightRequest(formState))
        history.push('/admin')
    }

    return (
        <Form onSubmit={handleSubmit} className='mt-5'>
            <FormGroup row>
                <Label for="flightNumber" sm={3}>Номер рейса</Label>
                <Col sm={9}>
                    <Input type="text" name="flightNumber" id="flightNumber"
                           placeholder="Номер рейса" value={formState.flightNumber} onChange={onChange} required/>
                </Col>
            </FormGroup>
            <FormGroup row className='mt-2'>
                <Label for="airline" sm={3}>Авиакомпания</Label>
                <Col sm={9}>
                    <Input type="text" name="airline" id="airline" placeholder="Авиакомпания"
                           value={formState.airline} onChange={onChange} required
                    />
                </Col>
            </FormGroup>
            <FormGroup row className='mt-2'>
                <Label for="departureCity" sm={3}>Город вылета</Label>
                <Col sm={9}>
                    <Input type="text" name="departureCity" id="departureCity"
                           placeholder="Город вылета" value={formState.departureCity} onChange={onChange} required/>
                </Col>
            </FormGroup>
            <FormGroup row className='mt-2'>
                <Label for="arrivalCity" sm={3}>Город прилёта</Label>
                <Col sm={9}>
                    <Input type="text" name="arrivalCity" id="arrivalCity"
                           placeholder="Город прилёта" value={formState.arrivalCity} onChange={onChange} required/>
                </Col>
            </FormGroup>
            <FormGroup row className='mt-2'>
                <Label for="aircraftType" sm={3}>Тип самолёта</Label>
                <Col sm={9}>
                    <Input type="text" name="aircraftType" id="aircraftType"
                           placeholder="Тип самолёта" value={formState.aircraftType} onChange={onChange} required/>
                </Col>
            </FormGroup>
            <FormGroup row className='mt-2'>
                <Label for="departureTime" sm={3}>Ожидаемое время вылета</Label>
                <Col sm={9}>
                    <Input type="text" name="departureTime" id="departureTime"
                           placeholder="Ожидаемое время вылета" value={formState.departureTime} onChange={onChange}
                           required/>
                </Col>
            </FormGroup>
            <FormGroup row className='mt-2'>
                <Label for="arrivalTime" sm={3}>Ожидаемое время прилета</Label>
                <Col sm={9}>
                    <Input type="text" name="arrivalTime" id="arrivalTime"
                           placeholder="Ожидаемое время прилета" value={formState.arrivalTime} onChange={onChange}
                           required/>
                </Col>
            </FormGroup>
            <FormGroup row className='mt-2'>
                <Label for="actualDepartureTime" sm={3}>Фактическое время вылета</Label>
                <Col sm={9}>
                    <Input type="text" name="actualDepartureTime" id="actualDepartureTime"
                           placeholder="Фактическое время вылета" value={formState.actualDepartureTime}
                           onChange={onChange}/>
                </Col>
            </FormGroup>
            <FormGroup row className='mt-2'>
                <Label for="actualArrivalTime" sm={3}>Фактическое время прилёта</Label>
                <Col sm={9}>
                    <Input type="text" name="actualArrivalTime" id="actualArrivalTime"
                           placeholder="Фактическое время прилёта" value={formState.actualArrivalTime}
                           onChange={onChange}/>
                </Col>
            </FormGroup>
            <FormGroup row className='mt-2'>
                <Label for="status" sm={3}>Статус</Label>
                <Col sm={9}>
                    <Input type="select" name="status" id="status" value={formState.status} onChange={onChange}>
                        <option>вылетел</option>
                        <option>приземлился</option>
                        <option>идет посадка</option>
                        <option>задержан</option>
                        <option>отменён</option>
                    </Input>
                </Col>
            </FormGroup>
            <FormGroup row className='mt-2'>
                <Label for="comment" sm={3}>Комментарий</Label>
                <Col sm={9}>
                    <Input type="textarea" name="comment" id="comment" value={formState.comment} onChange={onChange}/>
                </Col>
            </FormGroup>

            {data ? <div className='controls'>
                <div className='del'>
                    <Button color="danger" onClick={handleDelete}>Удалить</Button>
                </div>
                <div className='buttons'>
                    <Button color="primary" onClick={edit}>Сохранить</Button>
                    <Button color="secondary" onClick={handleCanceled}>Отменить</Button>
                </div>
            </div> : <div className='controls'>
                <div className='buttons'>
                    <Button color="primary" type='submit'>Создать</Button>
                    <Button color="secondary" onClick={handleCanceled}>Отменить</Button>
                </div>
            </div>}
        </Form>
    );
};

export default FlightForm;