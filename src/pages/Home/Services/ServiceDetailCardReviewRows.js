import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const ServiceDetailCardReviewRows = ({ review }) => {
    const { _id, serviceName, reviewer, price, email, phone, message } = review;
    const { user } = useContext(AuthContext);




    return (

        <tr>
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