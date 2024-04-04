import React, { } from 'react';
import { Col } from 'react-bootstrap';

import BtnCv from '../../components/btnCv';

interface Component1Props {
  className?: string;
}

const Home: React.FC<Component1Props> = ({ className }) => {

  return (
    <>
      <ul className="bg-animation_cube">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <section className={`mbody mbody-home d-flex ${className ? className : ''}`}>
        <Col lg={5} className="px-0 home-me"></Col>
        <Col md={7} lg={7} className="d-flex flex-column flex-fill ms-md-auto ms-lg-0 justify-content-center name-cont">
          <hgroup className='myName mb-5'>
            <h1>I'm <span className='f-poppins'>Akira Ht</span>,</h1>
            <h2>a frontend developer<br />& website designer</h2>
          </hgroup>
          <BtnCv />
        </Col>
      </section>
    </>
  );
};

export default Home;