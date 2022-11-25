import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:1000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mt-5 container mb-5'>
            <div>
                <h3 className='text-decoration-underline mb-4 text-center'>My Services</h3>
            </div>
            <div className='row row-cols-xl-4 row-cols-md-3 row-cols-1 gap-3 d-flex justify-content-center'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}>

                    </ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;