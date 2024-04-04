import React, { useState } from 'react';
import { Row, Col, Form, FloatingLabel, Button, Modal } from 'react-bootstrap';
import ReCAPTCHA from 'react-google-recaptcha';
import ReactGA from 'react-ga';

import ContactInfo from './block/contactInfo';

interface Component1Props {
  className?: string;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

interface EmailData {
  from: string;
  to: string;
  subject: string;
  body: string;
}

async function sendEmail(emailData: EmailData) {
  const apiKey = '4D3C76987D009646A542B6D937590AA37E03D9A9792805BB5A6AC95CC4BF609699655712AB3BA408191A4846AFF08671';
  const apiUrl = 'https://api.elasticemail.com/v2/email/send';

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        apiKey: apiKey,
        ...emailData,
      }).toString(),
    });

    const responseData = await response.json();
    console.log('Email sent:', responseData);
    return responseData;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

const Contact: React.FC<Component1Props> = ({ className, setIsLoading }) => {
  const [validated, setValidated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalTks, setShowModalTks] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false || !captchaValue) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setShowModal(true);
      event.preventDefault();
    }
    setValidated(true);
  };

  const handleConfirm = async () => {
    try {
      setIsLoading(true);
      const emailBody = `
        Hi <b>${formData.name}</b>!!<br />
        Thank you for contact me with these information.<br /><br />
        <table>
          <tr>
            <td><b>Name:</b></td>
            <td>${formData.name}</td>
          </tr>
          <tr>
            <td><b>Phone:</b></td>
            <td>${formData.phone}</td>
          </tr>
          <tr>
            <td><b>Email:</b></td>
            <td>${formData.email}</td>
          </tr>
          <tr>
            <td><b>Subject:</b></td>
            <td>${formData.subject}</td>
          </tr>
          <tr>
            <td><b>Message:</b></td>
            <td style="white-space: break-spaces;">${formData.message}</td>
          </tr>
        </table><br />
        If the information is wrong, please contact me with the following information<br /><br />
        ========================================================<br />
        <h3 style="color: #3b9dff; margin-bottom: 0;">Akira Ht | LUONG HOANG SON</h3>
        Website Designer | Frontend Developer<br /><br />
        <table>
          <tr>
            <td><b>Website:</b></td>
            <td><a href="https://akiraht.id.vn/" target="_blank">https://akiraht.id.vn/</a></td>
          </tr>
          <tr>
            <td><b>Phone:</b></td>
            <td>084.779.3566</td>
          </tr>
          <tr>
            <td style="vertical-align: top;"><b>Email:</b></td>
            <td>service@akiraht.id.vn<br/>sweb1705@gmail.com</td>
          </tr>
        </table>
        ========================================================<br />
      `;

      const emailData: EmailData = {
        from: '"AkiraHt" <service@akiraht.id.vn>',
        to: `${formData.email}, service@akiraht.id.vn, sweb1705@gmail.com`,
        subject: 'Thank you for contact',
        body: emailBody,
      };

      await sendEmail(emailData);

      setShowModal(false);
      setCaptchaValue(null);
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
      });

      ReactGA.event({
        category: 'User',
        action: 'Submitted Contact Form',
        label: 'Contact Me'
      });

      console.log('Email sent successfully');
      setValidated(false);
      setIsLoading(false);
      setShowModalTks(true);
    } catch (error) {
      console.error('Error sending email:', error);
      setIsLoading(false);
    }
  };

  return (
    <section className={`mbody ${className ? className : ''}`}>
      <hgroup className='title'>
        <h1 data-bg='Contact Me'>Contact Me</h1>
      </hgroup>
      <Row className="justify-content-md-center flex-md-fill">
        <Col md={8} lg={10} xl={9} xxl={8}>
          <Row>
            <ContactInfo />
            <Col md={12} lg={6} xl={6} className='pb-5 pb-md-0 offset-lg-0 offset-xl-1'>
              <Form className='contact-form' noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-4">
                  <Form.Group as={Col} md="6" className="mb-4 mb-md-0">
                    <FloatingLabel controlId="name" label="Name">
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter your name.
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Form.Group>
                  <Form.Group as={Col} md="6">
                    <FloatingLabel controlId="phone" label="Phone">
                      <Form.Control
                        type="number"
                        placeholder="Phone"
                        name="phone"
                        inputMode="numeric"
                        style={{ appearance: 'textfield' }}
                        value={formData.phone}
                        onChange={handleChange}
                        required />
                      <Form.Control.Feedback type="invalid">
                        Please enter your phone.
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Form.Group>
                </Row>
                <Row className="mb-4">
                  <Form.Group as={Col} md="12">
                    <FloatingLabel controlId="email" label="Email address">
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required />
                      <Form.Control.Feedback type="invalid">
                        Please enter your email.
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Form.Group>
                </Row>
                <Row className="mb-4">
                  <Form.Group as={Col} md="12">
                    <FloatingLabel controlId="subject" label="Subject">
                      <Form.Control
                        type="text"
                        placeholder="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required />
                      <Form.Control.Feedback type="invalid">
                        Please enter the subject.
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Form.Group>
                </Row>
                <Row className="mb-4">
                  <Form.Group as={Col} md="12">
                    <FloatingLabel controlId="message" label="Comments">
                      <Form.Control
                        as="textarea"
                        placeholder="Comments"
                        name="message"
                        style={{ height: '8rem', resize: 'none' }}
                        value={formData.message}
                        onChange={handleChange}
                        required />
                      <Form.Control.Feedback type="invalid">
                        Please enter your comments.
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Form.Group>
                </Row>
                <ReCAPTCHA
                  sitekey="6LfnoJ4pAAAAAGJOjCj_Hh6_onbKprqTF8wH0j1r"
                  onChange={handleCaptchaChange}
                />
                <Button className='btnSty mt-4' type="submit">Submit form</Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Confirm your information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='confirm-infos'>
          <dl>
            <dt>Your name:</dt>
            <dd>{formData.name}</dd>
          </dl>
          <dl>
            <dt>Phone:</dt>
            <dd>{formData.phone}</dd>
          </dl>
          <dl>
            <dt>Email:</dt>
            <dd>{formData.email}</dd>
          </dl>
          <dl>
            <dt>Subject:</dt>
            <dd>{formData.subject}</dd>
          </dl>
          <dl>
            <dt>Messenger:</dt>
            <dd className='break-spaces'>{formData.message}</dd>
          </dl>
        </Modal.Body>
        <Modal.Footer>
          <Button className='btnSty' onClick={() => setShowModal(false)}>Close</Button>
          <Button className='btnSty' onClick={handleConfirm}>OK</Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={showModalTks}
        onHide={() => setShowModalTks(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className='p-4'>
          <div className="ic-check-eff">
            <div className="ic-check-bg">
              <svg viewBox="0 0 65 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 25L27.3077 44L58.5 7" stroke="white" stroke-width="13" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div className="ic-check-shadow"></div>
          </div>
          <h2 className='f-poppins text-main text-center'>Thank you for contacting me</h2>
          <p className='text-center m-0'>I Will Contact You Soon</p>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Contact;