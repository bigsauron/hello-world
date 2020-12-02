import React from 'react';
import { useTitle } from '../../../hooks';
const Home = () => {
  useTitle('Home');

  return (
    <>
      Hello world!
    </>
  );
};

Home.displayName = 'Home';
export default Home;
