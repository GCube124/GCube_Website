import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from '../components/navbar';
import './register.css';

import backgroundImage from '../assets/3_back.jpeg'; 

const Closed = () => {
  return (
      <div style={{ minHeight: '100vh', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
        <div style={{ position: 'sticky', top: 0, zIndex: 100 }}>
          <NavigationBar username="JohnDoe" />
        </div>
        <Container fluid className="py-5">
          <Row className="justify-content-center">
            <Col md={6} className="text-center">
              <h1 className="display-4" style={{
                  fontFamily: 'Zen Dots',
                  fontSize: '4vw',
                  fontWeight: 'bolder',
                  color: 'rgb(255, 0, 0)', // Red color for closed registrations
                  textShadow: '0 0 15px rgb(0, 0, 0)',
                  textAlign: 'center', 
                  marginBottom: '5vh',
              }}>Registrations Closed</h1>
              <p className="lead text-white">Thank you for your interest. Registrations are closed for now.</p>
            </Col>
          </Row>
        </Container>
      </div>
  );
};

export default Closed;
