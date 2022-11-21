import React from 'react';

const ServiceDetailCardReviewRows = ({ review }) => {
    const { _id, serviceName, reviewer, price, email, phone, message } = review;




    return (

        <tr className=''>
            <td>
                *
            </td>
            <td className=''>{serviceName}</td>
            <td className=''>{reviewer}</td>
            <td className=''>{email}</td>
            <td className=''>{message}</td>
        </tr>

    );
};

export default ServiceDetailCardReviewRows;