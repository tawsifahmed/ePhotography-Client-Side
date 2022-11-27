import React from 'react';
import { Image } from 'react-bootstrap';

const ServiceDetailCardReviewRows = ({ review }) => {
    const { serviceName, reviewer, email, photo, message } = review;




    return (

        <tr>
            <td>
                *
            </td>
            <td className=''>{serviceName}</td>
            <td className=''>
                <div className='d-flex'>
                    <div className='me-1'>
                        {<Image style={{ height: '39px' }} rounded src={photo}></Image>}
                    </div>
                    {reviewer}
                </div>
            </td>
            <td className=''>{email}</td>
            <td className=''>{message}</td>
        </tr>

    );
};

export default ServiceDetailCardReviewRows;