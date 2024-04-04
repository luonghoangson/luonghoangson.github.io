import React, { useState, useEffect } from 'react';
import { Row, Col, Image, Button, Modal } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { items } from './itemsData';

interface Item {
  name: string;
  thumb: string;
  image: string;
  link: string;
  description: string;
}

const ProdList: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
    AOS.refresh();
  }, []);

  const handleItemClick = (item: Item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  return (
    <>
      <Row className="p-list justify-content-center">
        {items.map((item, index) => (
          <Col sm={6} md={6} lg={4} xl={4} xxl={4} key={index} data-aos="zoom-in" data-aos-delay="200">
            <div className="p-items" onClick={() => handleItemClick(item)}>
              <div className="p-items__glass">
                <div className="p-items-body">
                  <h4>{item.name}</h4>
                </div>
                <Image fluid src={item.thumb} alt={item.name} />
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <h3 className='f-poppins text-main m-0'>{selectedItem ? selectedItem.name : ''}</h3>
          {selectedItem && selectedItem.link !== ' ' && ( <Button className='btnSty px-3 py-1 ms-auto' href={selectedItem.link} target='_blank'>View site</Button> )}
        </Modal.Header>
        <Modal.Body className='prod-items'>
          <Image fluid src={selectedItem ? selectedItem.image : ''} alt={selectedItem ? selectedItem.name : ''} />
          <div className='prod-items-desc' dangerouslySetInnerHTML={{ __html: selectedItem ? selectedItem.description : '' }} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProdList;