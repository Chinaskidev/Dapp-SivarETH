import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';



/* esta parte es la de arriba y quiero alinear el logo a la izquierda y el boton de mint
que vaya mas a la derecha. */
const NavContainer = styled.nav`
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

   
    .logo {
        margin-right: auto;
    }

    .nav-links {
        display: flex;
        justify-content: center;
        flex-grow: 1;

        a {
            margin: 0 1rem;
            padding: 0.5rem 2rem;
        }
    }

    .mint-button {
        margin-left: 10px;
        text-transform: uppercase;
        font-weight: bold;
        padding: 0.5rem 5rem;
    }
`;
const NavLinks = styled(Nav.Link)`
    font-family: 'Cursive', sans-serif;
    color: #654840;
    font-size: 2.1rem;
    padding: 0.1rem;
    &:hover {
        color: #FF5733;
        background-color: #654840;
        border-radius: 100px;
        
    }
`;


/* esta parte es la de abajo */


const MainSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
`;

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    &:nth-child(odd) {
        flex-direction: row;
    }

    &:nth-child(even) {
        flex-direction: row-reverse;
    }
`;

const Logo = styled.img`
    width: 100px;
    height: auto;
    margin: 0 1rem;
`;

const Text = styled.p`
    font-size: 1.2rem;
    color: #333;
    margin: 0 1rem;
`;

const ButtonMint = styled.button`
    background-color: #FF5733;
    border: none;
    color: white;
    padding: 1rem 2rem;
    font-size: 1.5rem;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        background-color: #C70039;
    }
`;

const StyledNavbarCollapse = styled(Navbar.Collapse)`
    @media (max-width: 768px) {
        transition: max-height 0.5s ease-in-out;
        overflow: hidden;
        max-height: ${({ isexpanded }) => (isexpanded ? '500px' : '0')};
    }
`;

const ResponsiveNavbar = () => {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/" className="logo">
                    <img src="/otrologo2sivar.png" alt="Logo Sivar" width="150" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
                <StyledNavbarCollapse id="basic-navbar-nav" isexpanded={expanded.toString()}>
                    <NavContainer>
                        <div className="nav-links">
                            <NavLinks href="/">Inicio</NavLinks>
                            <NavLinks href="/Docs">Docs</NavLinks>
                            <NavLinks href="/contact">Contact</NavLinks>
                        </div>
                        <NavLinks href="/Mint NOW!" className="mint-button">Mint NOW!</NavLinks>
                    </NavContainer>
                </StyledNavbarCollapse>
            </Container>
        </Navbar>
    );
};

const MainContent = () => {
    return (
        <MainSection>
            <FlexContainer>
                <Logo src="/volcanoweb.png" alt="Logo 1" />
                <Text>Texto al lado del primer logo</Text>
            </FlexContainer>
            <FlexContainer>
                <Logo src="/aboutnft.png" alt="Logo 2" />
                <Text>Texto al lado del segundo logo</Text>
            </FlexContainer>
            <FlexContainer>
                <Logo src="/ayudaabout.png" alt="Logo 3" />
                <Text>Texto al lado del tercer logo</Text>
            </FlexContainer>
            <div>
                <Logo src="/letrasivarweb2.png" alt="Mint Logo" />
                <ButtonMint>MINT NOW!</ButtonMint>
            </div>
        </MainSection>
    );
};

export { ResponsiveNavbar, MainContent };