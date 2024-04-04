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
    const pdfUrl = 'https://drive.google.com/file/d/1I3tlMKn9DAVL4AAr16W3Vbl3V-EQUyb4/view?usp=sharing';
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