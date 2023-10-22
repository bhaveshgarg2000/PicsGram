import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
const Top = () => {
    return (
        <>
            <Navbar expand="lg" className="title">
                <Container>
                    <Navbar.Brand href="/" style={{ fontSize: "1.9rem" }} className="title text-danger py-4 px-4">PicsGram</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Top
