import React, { } from 'react';
import { Row, Col } from 'react-bootstrap';

import ProdList from './block/productList'

interface Component1Props {
  className?: string;
}

const Portfolio: React.FC<Component1Props> = ({ className }) => {

  return (
    <section className={`mbody ${className ? className : ''}`}>
      <hgroup className='title'>
        <h1 data-bg='My Portfolio'>My Portfolio</h1>
      </hgroup>
      <Row className="justify-content-md-center flex-md-fill">
        <Col md={12} lg={11} xl={10} xxl={9}>
          <ProdList />
        </Col>
      </Row>
    </section>
  );
};

export default Portfolio;