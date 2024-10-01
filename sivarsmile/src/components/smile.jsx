import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Card, Button, Row, Col} from 'react-bootstrap';

const NavLinks = styled(Nav.Link)`
    font-family: 'Cursive', sans-serif;
    color: #654840;
    font-size: 2.1rem;
    // padding: 0.1rem;
    &:hover {
        color: #FF5733;
        background-color: #654840;
        border-radius: 100px;
    }
`;

const StyledNavbarCollapse = styled(Navbar.Collapse)`
    @media (max-width: 768px) {
        transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
        overflow: hidden;
        max-height: ${({ isexpanded }) => (isexpanded ? '500px' : '0')};
        opacity: ${({ isexpanded }) => (isexpanded ? '1' : '0')};
        visibility: ${({ isexpanded }) => (isexpanded ? 'visible' : 'hidden')};
    }
`;

const ResponsiveNavbar = () => {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <Navbar collapseOnSelect bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/" style={{ marginRight: 'auto' }}>
                    <img src="/otrologo2sivar.png" alt="Logo Sivar" width="100px" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
                <StyledNavbarCollapse id="basic-navbar-nav" isexpanded={expanded.toString()}>
                    <Nav className="me-auto">
                        <NavLinks href="/">Inicio</NavLinks>
                        <NavLinks href="/Docs">Docs</NavLinks>
                        <NavLinks href="/contact">Contact</NavLinks>
                        
                    </Nav>
                        
                    <Nav>
                    <NavLinks href="/Mint NOW!" style={{ marginLeft: '10px', textTransform: 'uppercase', fontWeight: 'bold', padding: '0.5rem 2rem', alignContent: 'flex-end' }}>Mint NOW!</NavLinks>
                    </Nav>
                </StyledNavbarCollapse>
            </Container>
        </Navbar>
    );
};


const MainContent = () => {
    return (
        <Container style={{ padding: '2rem'}}>
            <Row className="mb-4">
                <Col>
                    <Card>
                        <Card.Body>
                            <Row className="align-items-center">
                                <Col xs="auto">
                                    <Card.Img src="/volcanoweb.png" style={{ width: '100px', height: 'auto' }} />
                                </Col>
                                <Col>
                                    <Card.Text style={{ fontSize: '1.2rem', color: '#333' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </Card.Text>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col>
                    <Card>
                        <Card.Body>
                            <Row className="align-items-center">
                                <Col xs="auto">
                                    <Card.Img src="/aboutnft.png" style={{ width: '100px', height: 'auto' }} />
                                </Col>
                                <Col>
                                    <Card.Text style={{ fontSize: '1.2rem', color: '#333' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </Card.Text>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col>
                    <Card>
                        <Card.Body>
                            <Row className="align-items-center">
                                <Col xs="auto">
                                    <Card.Img src="/ayudaabout.png" style={{ width: '100px', height: 'auto' }} />
                                </Col>
                                <Col>
                                    <Card.Text style={{ fontSize: '1.2rem', color: '#333' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </Card.Text>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col>
                    <Card>
                        <Card.Body>
                            <Row className="align-items-center">
                                <Col xs="auto">
                                    <Card.Img src="/letrasivarweb2.png" style={{ width: '100px', height: 'auto' }} />
                                </Col>
                                <Col>
                                    <Button style={{ backgroundColor: '#FF5733', border: 'none', color: 'white', padding: '1rem 2rem', fontSize: '1.5rem', borderRadius: '10px', cursor: 'pointer' }}>
                                        MINT NOW!
                                    </Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export { ResponsiveNavbar, MainContent };