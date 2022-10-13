import {Navbar, Container, Nav} from "react-bootstrap" 

const NavigationBar = () => {
    return (
    <div>
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand href="/">MOVIEHUB</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#trending">TRENDING</Nav.Link>
                    <Nav.Link href="#serialtv">SERIAL TV</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
    )
}
export default NavigationBar
