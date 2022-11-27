import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../../../hooks/useTitle';


const AddService = () => {
    const notify = () => toast("Service successfully added. Check home/services page");
    useTitle('Add Service');

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.serviceName.value;
        const img = form.servicePhotoURL.value;
        const description = form.serviceDetail.value;
        const price = form.servicePrice.value;

        const addedService = {
            title,
            img,
            price,
            description
        }


        fetch('https://a11-server-side.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Service successfully added. Please refresh to see your review.')
                    notify()


                    form.reset();
                }
            })
            .catch(error => console.error(error));

    }






    return (
        <div className='container'>
            <Row>
                <Col lg="4">

                </Col>
                <Col className='border p-4 bg-light' lg="4">
                    <h4 className='text-center text-decoration-underline'>Add a Service</h4>
                    <Form onSubmit={handleAddService} className='mb-3'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Service Name</Form.Label>
                            <Form.Control name="serviceName" type="name" placeholder="Type your service name" required />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Service Photo URL</Form.Label>
                            <Form.Control name="servicePhotoURL" type="text" placeholder="Please enter a valid photo url" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Service Details</Form.Label>
                            <Form.Control name="serviceDetail" type="name" placeholder="Type your service description" required />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Service Price</Form.Label>
                            <Form.Control name="servicePrice" type="name" placeholder="Give a numeric value" required />

                        </Form.Group>


                        <div className='text-center'>
                            <Button onSubmit={notify} o variant="primary" type="submit">
                                Add Service
                            </Button>
                            <ToastContainer />
                        </div>
                        <div className='mt-2'>
                            <Form.Text>
                                Caution: kindly use good quality image urls. For instance, you can find <a href='https://unsplash.com/' target="_blank">here</a> some example.
                            </Form.Text>
                        </div>

                    </Form>
                </Col>

                <Col lg="4">

                </Col>
            </Row>
        </div>
    );
};

export default AddService;