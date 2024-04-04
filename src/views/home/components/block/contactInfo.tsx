import React, {  } from 'react';
import { Col } from 'react-bootstrap';

import BtnCv from '../../../components/btnCv';

const ContactInfo = () => {
  return (
    <Col md={12} lg={6} xl={5} xxl={5} className='mb-5 mb-md-5 mb-lg-0'>
      <h4 className='mb-5 f-poppins text-main'>Find me here</h4>
      <div className="mb-4"><BtnCv /></div>
      <div className="contact-info mb-3">
        <div className="d-sm-flex">
          <div className="icon">
            <i className="fas fa-map-marker-alt"></i>
            <span className='ms-2'>Address</span>
          </div>
          <p className='ms-4 ms-md-auto text-md-end'>: 154/54/12 Au Duong Lan street,<br />Ward 3, District 8, Ho Chi Minh City</p>
        </div>
        <div className="d-sm-flex">
          <div className="icon">
            <i className="fas fa-envelope"></i>
            <span className='ms-2'>Email</span>
          </div>
          <p className='ms-4 ms-md-auto text-md-end'>: service@akiraht.id.vn<br />sweb1705@gmail.com</p>
        </div>
        <div className="d-sm-flex">
          <div className="icon">
            <i className="fas fa-mobile-alt"></i>
            <span className='ms-2'>Phone</span>
          </div>
          <p className='ms-4 ms-md-auto'>: 084.779.3566</p>
        </div>
      </div>
      <div className="contact-sns d-flex">
        <div className="me-auto">
          <a className='contact-sns-items' href="https://www.facebook.com/akirason.vn" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className='contact-sns-items' href="https://www.instagram.com/akirason.vn/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          {/* <a className='contact-sns-items' href="https://www.linkedin.com/in/akiraht" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a> */}
          <a className='contact-sns-items' href="https://t.me/akira1705" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-telegram-plane"></i>
          </a>
        </div>
      </div>
    </Col>
  );
};

export default ContactInfo;