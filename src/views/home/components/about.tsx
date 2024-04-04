import React, { useEffect } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

import WorkExp from './block/workExperience'
import BtnCv from '../../components/btnCv';

interface Component1Props {
  className?: string;
}

const About: React.FC<Component1Props> = ({ className }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <section className={`mbody mbody-about ${className ? className : ''}`}>
      <div className="mCont">
        <hgroup className='title'>
          <h1 data-bg='About Me'>About Me</h1>
        </hgroup>
        <Row className="justify-content-md-center flex-md-fill">
          <Col md={10} lg={9} className="d-md-flex">
            <Row className="flex-lg-fill justify-content-md-center">
              <Col md={6} lg={4} className="d-flex justify-content-center mb-md-5">
                <div className="avatar-cont">
                  <div className="avatar-img">
                    <p>
                      <Image fluid src="./images/avatar.jpg" alt="AkiraHt - Lương Hoàng Sơn" />
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={12} lg={8} className="text-justify ps-lg-5">
                <div className="me-overviews mb-5">
                  Hello!<br />
                  I'm <span className='h3 f-poppins'>Lương Hoàng Sơn</span>,<br /><br />
                  
                  I am a <span className='fw-bold'>Frontend Developer & Web Designer.</span>.<br />
                  Combining programming and design skills, I always strive to provide the highest satisfaction for users.<br /><br />
                  
                  Throughout my career, I have worked with a variety of popular technologies and frameworks such as <span>HTML</span>, <span>CSS</span>, and <span>JavaScript</span>, I've leveraged these alongside tools like <span>SASS</span>, <span>jQuery</span>, <span>Pugjs</span> and <span>Bootstrap</span>, staying abreast of emerging trends such as <span>Tailwind CSS</span> and frameworks <span>ReactJS</span> to construct cutting-edge web applications.<br />
                  Furthermore, I possess hands-on experience with platforms like <span>WordPress</span>, <span>Laravel</span>, ..., streamlining development processes and enhancing user interactions.<br /><br />
                  
                  Combined with knowledge of design language and tools like <span>Adobe Photoshop</span>, <span>Illustrator</span>, <span>Figma</span>, ... This enables me to collaborate effectively with clients, offering optimized design solutions tailored to their needs.<br /><br />

                  Moreover, using the <span>Git</span> platform, I efficiently collaborate with colleagues, shortening project completion time quickly and effectively.<br /><br />
                  
                  If you're seeking to discuss ideas or embark on an exciting project together, feel free to reach out to me.<br /><br />
                  Thank you for visiting my website!
                </div>
                <BtnCv />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="me-timeline">
        <div className="mCont">
          <Row className="justify-content-center">
            <Col md={10} lg={9}>
              <hgroup className='title-sub'>
                <h2>Work experience</h2>
              </hgroup>
              <Row className="row">
                <WorkExp />
                <Col lg={5} className='d-none d-lg-block'>
                  <div className="w-50 ms-auto" data-aos="fade-up-left" data-aos-delay="1000">
                    <img src='./images/Asset 2.svg' alt='' />
                  </div>
                  <div className="w-50 ms-5" data-aos="fade-up-left" data-aos-delay="1000">
                    <img src='./images/Asset 1.svg' alt='' />
                  </div>
                  <div className="w-50 ms-auto" data-aos="fade-up-left" data-aos-delay="1000">
                    <img src='./images/Asset 4.svg' alt='' />
                  </div>
                  <div className="w-50 ms-5" data-aos="fade-up-left" data-aos-delay="1000">
                    <img src='./images/Asset 3.svg' alt='' />
                  </div>
                  <div className="w-50 ms-auto" data-aos="fade-up-left" data-aos-delay="1000">
                    <img src='./images/Asset 5.svg' alt='' />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default About;