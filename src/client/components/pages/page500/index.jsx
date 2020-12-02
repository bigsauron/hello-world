import React from 'react';
import { Link } from 'react-router-dom';

import { useTitle } from '../../../hooks';

const Page400 = () => {
  useTitle('500 Error');

  return (
    <>
      <p className="text-center lead">
        Sorry, we can&apos;t process your request at the moment. We apologize for the inconvenience.
      </p>
      <p className="text-center text-monospace font-weight-light">
        <small>
          Error code: 500
        </small>
      </p>
      <Link className="btn btn-outline-light btn-block mt-5" to="/">
        Back to Home Screen
      </Link>
    </>
  );
};

Page400.displayName = 'Page400';
export default Page400;
