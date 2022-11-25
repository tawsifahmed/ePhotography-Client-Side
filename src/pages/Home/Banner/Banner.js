import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../../assets/banner1.jpeg'
import img2 from '../../../assets/banner2.jpeg'
import img3 from '../../../assets/banner3.jpeg'


const Banner = () => {
    return (
        <div>
            <h2 className='text-center'>Welcome to e<span className='text-danger'>Photography</span></h2>
            <h3 className='text-center mb-3 fw-light text-dark'>Here, you can find various type of photography services.</h3>
            <Carousel className='mb-5'>
                <Carousel.Item>
                    <div className='d-flex justify-content-center'>
                        <img
                            className="d-block w-50 img-fluid"
                            src={img1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h5>Discover the site</h5>
                            <h6 className='fw-light'>Use lens, chill life!</h6>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='d-flex justify-content-center'>
                        <img
                            className="d-block w-50 img-fluid"
                            src={img2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h5>The painter constructs,</h5>
                            <h6 className='fw-light'>the photographer discloses.</h6>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='d-flex justify-content-center'>
                        <img
                            className="d-block w-50 img-fluid"
                            src={img3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h5>If you can see it,</h5>
                            <h6 className='fw-light'>
                                you can shoot it.
                            </h6>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>

    );
};

export default Banner;