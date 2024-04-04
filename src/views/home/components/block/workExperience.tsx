
import React, {  } from 'react';
import { Col } from 'react-bootstrap';

import { effectScroll } from '../../../../assets/lib/main.js';

const WorkExp = () => {
  effectScroll();

  return (
    <Col lg={7}>
      <ul className='me-timeline-list'>
        <li className="list-items">
          <div className="list-items-body">
            <p className='list-items_y'>05/2018 - PRESENT</p>
            <h4 className='list-items_p'>FREELANCER</h4>
            <h5 className='list-items_p2'>FRONT-END DEVELOPMENT</h5>
            <div className='list-items_d'>
              <ul>
                <li>Make ui/ux from photoshop, illustrator, figma, suppor modify design for client</li>
                <li>Build and Setup hosting, domain website with wordpress framework</li>
                <li>Working with:
                  <ul>
                    <li>HTML/CSS/SCSS, Bootstrap, Tailwindcss</li>
                    <li>Javascript, Jquery</li>
                    <li>Pugjs</li>
                    <li>Reactjs, NextJS</li>
                    <li>Laravel</li>
                    <li>Wordpress</li>
                    <li>Git</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="list-items">
          <div className="list-items-body">
            <p className='list-items_y'>05/2015 - 05/2018</p>
            <h4 className='list-items_p'>JAVISOF Company</h4>
            <h5 className='list-items_p2'>FRONT-END DEVELOPMENT</h5>
            <div className='list-items_d'>
              <ul>
                <li>Make ui/ux for company projects</li>
                <li>Use Photoshop, Illustrator for company projects</li>
              </ul>
            </div>
          </div>
        </li>
        <li className="list-items">
          <div className="list-items-body">
            <p className='list-items_y'>12/2013 - 05/2015</p>
            <h4 className='list-items_p'>FASHION STAR Company</h4>
            <h5 className='list-items_p2'>FRONT-END DEVELOPMENT</h5>
            <div className='list-items_d'>
              <ul>
                <li>Make ui/ux for company projects</li>
              </ul>
            </div>
          </div>
        </li>
        <li className="list-items">
          <div className="list-items-body">
            <p className='list-items_y'>02/2012 - 05/2013</p>
            <h4 className='list-items_p'>GREENSUN VN Company</h4>
            <h5 className='list-items_p2'>FRONT-END DEVELOPMENT (Collaborators)</h5>
            <div className='list-items_d'>
              <ul>
                <li>Intern make UI/UX</li>
                <li>Intern design layout with illustrator</li>
              </ul>
            </div>
          </div>
        </li>
        <li className="list-items">
          <div className="list-items-body">
            <p className='list-items_y'>11/2009 - 08/2011</p>
            <h4 className='list-items_p'>AIA VietNam Company - Manulife VietNam Company</h4>
            <h5 className='list-items_p2'>DESIGNER (Part-time Employee)</h5>
            <div className='list-items_d'>
              <ul>
                <li>Design layout, brochure, leaflet, banner, standee</li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </Col>
  );
};

export default WorkExp;