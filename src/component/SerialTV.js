import {Card, Container, Row, Col, Image} from "react-bootstrap"

import st4Image from "../assets/Image/SerialTV/st4.jpg"
import sxfImage from "../assets/Image/SerialTV/sxf.jpg"
import shImage from "../assets/Image/SerialTV/Shehulk.jpg"
import hgImage from "../assets/Image/SerialTV/hg.jpg"
import chuckyImage from "../assets/Image/SerialTV/chucky.jpg"
import tbImage from "../assets/Image/SerialTV/tb.jpg"

const SerialTV = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="titleTrending">Serial TV</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="serialtv">
                        <Card className="text-dark movieImage">
                        <Image src={hgImage} alt="Jurassic World" width="100%" height="auto"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white text-center">
                                <Card.Title className="text-center">House of the Dragon</Card.Title>
                                
                                <Card.Text className="text-center">Jun 01, 2022</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="text-dark movieImage">
                        <Image src={shImage} alt="Jurassic World" width="100%" height="auto"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white text-center">
                                <Card.Title className="text-center">She-Hulk : Attorney at law</Card.Title>
                                
                                <Card.Text className="text-center">Jun 01, 2022</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="text-dark movieImage">
                        <Image src={sxfImage} alt="Jurassic World" width="100%" height="auto"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white text-center">
                                <Card.Title className="text-center">Spy X Family</Card.Title>
                                
                                <Card.Text className="text-center">Jun 01, 2022</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="text-dark movieImage">
                        <Image src={chuckyImage} alt="Jurassic World" width="100%" height="auto"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white text-center">
                                <Card.Title className="text-center">CHUCKY</Card.Title>
                                
                                <Card.Text className="text-center">Jun 01, 2022</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="text-dark movieImage">
                        <Image src={st4Image} alt="Jurassic World" width="100%" height="auto"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white text-center">
                                <Card.Title className="text-center">Stranger Things 4</Card.Title>
                                
                                <Card.Text className="text-center">Jun 01, 2022</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="text-dark movieImage">
                        <Image src={tbImage} alt="Jurassic World" width="100%" height="auto"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white text-center">
                                <Card.Title className="text-center">The Boys</Card.Title>
                                
                                <Card.Text className="text-center">Jun 01, 2022</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SerialTV