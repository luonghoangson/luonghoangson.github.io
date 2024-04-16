import React from 'react';
import { Button } from 'react-bootstrap';
import ReactGA from 'react-ga';

const BtnCv = () => {
  function dơwnloadCv() {
    ReactGA.event({
      category: 'User',
      action: 'Clicked Download CV',
      label: 'Download My CV'
    });
    const pdfUrl = 'https://drive.google.com/file/d/1oNOmYMBTe0lnB7GavhiEin08EqIQeAqI/view?usp=sharing';
    window.open(pdfUrl, '_blank');
  }

  return (
    <Button variant="link" onClick={dơwnloadCv} className='btnSty-download'>
      <span>Download my CV </span>
      <i className="fas fa-chevron-right btnSty-download_ic"></i>
    </Button>
  );
};

export default BtnCv;