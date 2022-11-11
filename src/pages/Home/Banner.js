import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../../src/assets/banner1.jpeg'
import img2 from '../../../src/assets/banner2.jpeg'
import img3 from '../../../src/assets/banner3.jpeg'


const Banner = () => {
    return (
        <Carousel className='my-5'>
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
                        <h5>Wild but Cute</h5>
                        <h6 className='fw-light'>Discover various creature.</h6>
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
                        <h5>Thrill through wildness</h5>
                        <h6 className='fw-light'>
                            Remove your fear factor!
                        </h6>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>
        </Carousel>

    );
};

export default Banner;