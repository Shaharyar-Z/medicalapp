import React, { useState } from "react";
import Button from "@restart/ui/esm/Button";
import { Col, Container, Modal, Row } from "react-bootstrap";

const TodoSec = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Container className="todo-sec">
        <Row>
          <h1 className="todo-heading">To-Do</h1>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col xs={10} sm={6} md={4}>
            <Modal.Dialog show={show} className="modal-dialog first">
              <Modal.Header className="modal-header" closeButton>
                <Modal.Title>Appointments</Modal.Title>
              </Modal.Header>
              <Modal.Header className="modal-header ">
                <Modal.Title className="date-time">
                  <i
                    style={{ color: "#6FA1FF" }}
                    class="far fa-calendar-alt"
                  ></i>
                  <strong> 07/07/2021</strong>
                  <br />
                  <i style={{ color: "#6FA1FF" }} class="far fa-clock"></i>
                  <strong> 9:00AM</strong>
                </Modal.Title>
              </Modal.Header>

              <Modal.Body className="modal-body">
                <p>
                  Your appointment with John Smithn is confirmed for
                  <strong> Wednesday,July</strong> at <strong>9:00AM</strong>.
                  You can prepare by reviewing your appointment details.
                </p>
              </Modal.Body>

              <Button className="modal-button" variant="primary">
                View appointment details
              </Button>
            </Modal.Dialog>
          </Col>
          <Col xs={10} sm={6} md={4}>
            <Modal.Dialog show={show} className="modal-dialog second">
              <Modal.Header className="modal-header" closeButton>
                <Modal.Title>Doctor's Orders</Modal.Title>
              </Modal.Header>
              <Modal.Header className="modal-header ">
                <Modal.Title className="date-time">
                  <i
                    style={{ color: "#6FA1FF" }}
                    class="far fa-calendar-check"
                  ></i>
                  <strong> Well-Visit Anual Checkup</strong>
                  <br />
                  <i style={{ color: "#6FA1FF" }} class="far fa-clock"></i>
                  <strong> 07/07/2021</strong>
                </Modal.Title>
              </Modal.Header>

              <Modal.Body className="modal-body">
                <div className="d-flex align-items-start">
                  <i
                    style={{ color: "#00AD53" }}
                    class="fas fa-check-circle"
                  ></i>
                  <p>
                    Keep arm alevated and alternate heat and ie for 48 hours
                  </p>
                </div>
                <div className="d-flex align-items-start">
                  <i
                    style={{ color: "#00AD53" }}
                    class="fas fa-check-circle"
                  ></i>
                  <p>
                    Return for suture removal on <strong>10/07/21</strong>. Be
                    careful to keep the area clean to minimize risk of
                    infecti...
                  </p>
                </div>
              </Modal.Body>

              <Button className="modal-button" variant="primary">
                View all Doctor's Orders
              </Button>
            </Modal.Dialog>
          </Col>
          <Col xs={10} sm={6} md={4}>
            <Modal.Dialog show={show} className="modal-dialog third">
              <Modal.Header className="modal-header" closeButton>
                <Modal.Title>Tasks</Modal.Title>
              </Modal.Header>
              <Modal.Header className="modal-header ">
                <Modal.Title className="date-time">
                  <span class="badge-icon">3</span>
                  <strong> Timesensitive tasks to review</strong>
                </Modal.Title>
              </Modal.Header>

              <Modal.Body className="modal-body">
                <div className="d-flex align-items-start">
                  <i
                    style={{ color: "#00AD53" }}
                    class="fas fa-check-circle"
                  ></i>
                  <p>Upload copies of your most recent pa stubs.</p>
                </div>
                <div className="d-flex align-items-start">
                  <i
                    style={{ color: "#00AD53" }}
                    class="fas fa-check-circle"
                  ></i>
                  <p>
                    Your upcoming payment is due on <strong>10/07/2021</strong>
                  </p>
                </div>
                <div className="d-flex align-items-start">
                  <i
                    style={{ color: "#00AD53" }}
                    class="fas fa-check-circle"
                  ></i>
                  <p>Respond to a message from Care Concierge.</p>
                </div>
              </Modal.Body>

              <Button className="modal-button" variant="primary">
                Check My Tasks
              </Button>
            </Modal.Dialog>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TodoSec;
