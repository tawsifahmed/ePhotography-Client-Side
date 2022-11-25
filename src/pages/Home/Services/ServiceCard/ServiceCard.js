import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import './ServiceCard.css'


const ServiceCard = ({ service }) => {

    const { _id, img, title, description, price } = service;
    return (
        <div className='text-justify'>
            <Card className='bg-light border border-white shadow rounded' style={{ width: '18rem', height: '25.4rem' }}>

                <PhotoProvider>
                    <PhotoView variant="top" src={img}>
                        <img src={img} alt="" />
                    </PhotoView>
                </PhotoProvider>
                {/* <Card.Img variant="top" src={img} /> */}
                <Card.Body>

                    <Card.Title className='fs-5 fw-bolder'>{title}</Card.Title>
                    <Card.Text>
                        <p className='descrip'> {description.slice(0, 100)}....</p>
                    </Card.Text>


                    <h6 className='text-success fw-semibold'>Price: ${price}</h6>
                    <Link to={`/services/${_id}`}>
                        <Button variant="primary">View Detail</Button>
                    </Link>

                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceCard;