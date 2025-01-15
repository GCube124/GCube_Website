import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { House, Compass, Search, BookmarkHeart, InfoCircle, PersonCircle, Boxes } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavigationBar = ({ username }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location.pathname]); // Trigger effect when the pathname changes

  const handleLogout = () => {
    localStorage.removeItem('username');
    navigate('/login');
  };


  const navbarStyle = {
    fontFamily: 'Oswald,sans-serif',
    background: 'transparent', // Transparent background
    boxShadow: '0 4px 30px rgba(0, 0, 0, 1)', // Subtle shadow
    backdropFilter: 'blur(10px)', // Blur effect
    borderBottom: 'none', // Remove border
    zIndex: 10, // Ensure it stays above the content
    padding: '1rem 2rem', // Add padding
  };

  const iconStyle = {
    color: '#ffffff', // White color
    transition: 'transform 0.3s ease, color 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    cursor: 'pointer',
    textDecoration: 'none',
    padding: '0.5rem', // Add padding
  };

  const brandStyle = {
    fontFamily: 'Zen Dots,sans-serif',
    color: '#ffffff', // White color
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.5rem', // Increase font size
  };

  return (
    <div>
      <Navbar expand="lg" style={navbarStyle} className="sticky-top">
        <Container>
          <Navbar.Brand as={Link} to="/" style={brandStyle} className="d-flex align-items-left nav-icon">
            {/* <img
              src={require('../assets/file.png')} // Import the logo image
              alt="Logo"
              style={{
                width: '40px',
                height: '40px',
                marginRight: '10px',
              }}
            /> */}
            G
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="d-flex align-items-center">
              <Nav.Link as={Link} to="/" className="nav-link mx-3" style={iconStyle}>
                <House className=" nav-icon" />
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-link mx-3" style={iconStyle}>
                <InfoCircle className="nav-icon" />
              </Nav.Link>
              <Nav.Link as={Link} to="/games" className="nav-link mx-3" style={{ fontSize: '24px' }}>
              👾
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-link mx-3" style={iconStyle}>
                <Search className="nav-icon" />
              </Nav.Link>
              {/* <Dropdown align="end" className="mx-3">
                <Dropdown.Toggle
                  as={Nav.Link}
                  className="d-flex align-items-center nav-link dropdown-toggle"
                  style={{ padding: 0 }}
                >
                  <PersonCircle className="nav-icon" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.ItemText>{username}</Dropdown.ItemText>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;