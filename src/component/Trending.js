import {Card, Container, Row, Col, Image} from "react-bootstrap"

import jwImage from "../assets/Image/Trending/jw.jpg"
import ThorImage from "../assets/Image/Trending/Thor.jpg"
import tpImage from "../assets/Image/Trending/topgun.jpg"
import morbiusImage from "../assets/Image/Trending/morbius.jpg"
import sonic2Image from "../assets/Image/Trending/sonic 2.jpg"
import jjkImage from "../assets/Image/Trending/JJK 0.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="titleTrending">Trending Movies</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="trending">
                        <Card className="text-dark movieImage">
                        <Image src={jwImage} alt="Jurassic World" width="100%" height="auto"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white text-center">
                                <Card.Title className="text-center">Jurassic World Dominion</Card.Title>
                                
                                <Card.Text className="text-center">Jun 01, 2022</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="text-dark movieImage">
                        <Image src={ThorImage} alt="Jurassic World" width="100%" height="auto"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white text-center">
                                <Card.Title className="text-center">Thor : Love & Thunder</Card.Title>
                                
                                <Card.Text className="text-center">Jul 06, 2022</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="text-dark movieImage">
                        <Image src={tpImage} alt="Jurassic World" width="100%" height="auto"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white text-center">
                                <Card.Title className="text-center">Top Gun: Maverick</Card.Title>
                                
                                <Card.Text className="text-center">May 24, 2022</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="text-dark movieImage">
                        <Image src={morbiusImage} alt="Jurassic World" width="100%" height="auto"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white text-center">
                                <Card.Title className="text-center">Morbius</Card.Title>
                                
                                <Card.Text className="text-center">Jun 01, 2022</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="text-dark movieImage">
                        <Image src={sonic2Image} alt="Jurassic World" width="100%" height="auto"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white text-center">
                                <Card.Title className="text-center">Sonic the Hedgehog 2</Card.Title>
                                
                                <Card.Text className="text-center">Jun 01, 2022</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="text-dark movieImage">
                        <Image src={jjkImage} alt="Jurassic World" width="100%" height="auto"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white text-center">
                                <Card.Title className="text-center">Jujutsu Kaisen 0</Card.Title>
                                
                            </div>
                        </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Trending