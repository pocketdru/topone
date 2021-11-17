import React, { useState } from "react";
import emailjs from 'emailjs-com';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "./style.css";

export default function QuoteEmail() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_752idno', 'template_f0mcw4u', e.target, 'user_Qv5eynQ9bFuznSm26mu6r')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      handleShow();
      e.target.reset();
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section id="email" animation="false">
      <div className="container pt-4 pb-5">
        <div className="row">
          <div className="col-md-12">
            <h5 className="card-title mt-5 mb-5">REQUEST A QUICK QUOTE</h5>
          </div>
          <div className="col-md-12">
        <form className="contact-form needs-validation pb-4" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number"/>
          <div className="form-row">
          <div className="form-group col-md-4">     
            <label>Your Name</label>
            <input type="text" name="from_name" className="form-control" required/>
          </div>
          <div className="form-group col-md-4">
            <label>Your Email</label>
            <input type="email" name="from_email" className="form-control" required/>
          </div>
          <div className="form-group col-md-4">
            <label>Your phone number</label>
            <input type="tel" name="phone" className="form-control" placeholder="optional"/>
          </div>
          </div>
          <div className="form-group">
            <label>Year, make, model of the car, and note all the modifications if any.</label>
            <textarea name="message" required/>
          </div>
          <input type="submit" value="SEND MESSAGE" className="btn d-block mx-auto pl-4 pr-4 pt-3 pb-3" variant="primary" />
        </form>
        </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} animation="false">
        <Modal.Header closeButton>
          <Modal.Title>Your quote is on the way!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank you for request. You will get your personalized shipping quote within one hour. If requested after business hours we will get back to you the following business day. </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Got it!
          </Button>
        </Modal.Footer>
      </Modal>

    </section>
  );
}