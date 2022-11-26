import React from 'react';
import useTitle from '../../hooks/useTitle';

const PageError = () => {
    useTitle('404')
    return (
        <div className="text-center mt-3 fs-2"><h1>Ops!</h1>
            <h1>404, page not found.</h1></div>
    );
};

export default PageError;