import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const ServiceDetailCardReviewRows = ({ review }) => {
    const { _id, serviceName, reviewer, price, email, photo, message } = review;




    return (

        <tr>
            <td>
                *
            </td>
            <td className=''>{serviceName}</td>
            <td className=''>
                <div className='d-flex'>
                    {<Image style={{ height: '40px' }} roundedCircle src={photo}></Image>}
                    {reviewer}
                </div>
            </td>
            <td className=''>{email}</td>
            <td className=''>{message}</td>
        </tr>

    );
};

export default ServiceDetailCardReviewRows;