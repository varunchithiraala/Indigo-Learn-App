import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './index.css';

const Form = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="form-container">
      <h3 className="form-heading">Aspiring to be an ACCA? Get in touch with us!</h3>
      <form onSubmit={handleSubmit} className="form">
        <input className="form-input" type="text" placeholder="Phone Number" required />
        <input className="form-input" type="email" placeholder="Email ID" required />
        <select required className="form-select">
          <option>Current Qualification</option>
          <option value="graduation">Pursuing Graduation</option>
          <option value="graduated">Graduated</option>
          <option value="semi-qualified">Semi-Qualified CA/CMA/CS</option>
          <option value="qualified">Qualified CA/CMA/CS</option>
        </select>
        <select required className="form-select">
          <option>Information to</option>
          <option value="whatsapp">WhatsApp</option>
          <option value="email">Email</option>
          <option value="call">Call</option>
          <option value="text">Text Message</option>
        </select>
        <button type="submit" className="btn btn-violet">Request Call Back</button>
      </form>
      <Modal show={modalOpen} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your request has been received. We will call you back shortly.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleModalClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Form;
