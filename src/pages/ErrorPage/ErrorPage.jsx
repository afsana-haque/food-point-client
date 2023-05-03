import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError();
    return (
        <section className='d-flex align-items-center justify-content-center py-5 mt-5'>
          <div className=' text-center text-danger'>
            <h2>
              <span >Error</span> {status || 404}
            </h2>
            <p className='fw-semibold'>
              {error?.message}
            </p>
            <Link
              to='/'
              className='px-5 py-3 font-semibold rounded '
            >
              Back to homepage
            </Link>
        </div>
      </section>
    );
};

export default ErrorPage;