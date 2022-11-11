import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const ServiceCard = ({ service }) => {

    const { _id, img, title, description, price } = service;
    return (
        <div className='text-justify'>
            <Card style={{ width: '18rem' }}>

                <PhotoProvider>
                    <PhotoView variant="top" src={img}>
                        <img src={img} alt="" />
                    </PhotoView>
                </PhotoProvider>
                {/* <Card.Img variant="top" src={img} /> */}
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 100)}
                    </Card.Text>
                    <h6 className='text-success'>Price: ${price}</h6>
                    <Link to={`/services/${_id}`}>
                        <Button variant="primary">View Detail</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceCard;