import React, { useState } from 'react';
import oldBar from '../../assets/images/oldBar.png';
import oldBarAo from '../../assets/images/oldBarAo.png';
import shield1 from '../../assets/images/shield1.png';
import tacticalK from '../../assets/images/tacticalK.png';
import truck from '../../assets/images/truck.png';
import maskm from '../../assets/images/maskm.png';
import maskSide from '../../assets/images/maskSide.png';
import maskall from '../../assets/images/maskall.png';
import shield from '../../assets/images/shield.png';
import { Container, Row, Col, Card, Button, NavDropdown, Modal } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import { SocialIcon } from 'react-social-icons';


function Portfolio() {
  const [lgShow, setLgShow] = useState(false);
  const [lgShow1, setLgShow1] = useState(false);
  const [lgShow2, setLgShow2] = useState(false);
    return (
        <Container fluid>
            <Row>

      <div>
      <>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Mask of Malice
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          Model of a mask. 
          Blender was used to model, uv, and texture the objects. 
          Painting was done in photoshop.

          </p>
          <Card.Img src={maskall} className="rounded" alt="Card image" />
          <a href="https://react-bootstrap.github.io/components/modal/"></a>
        
        </Modal.Body>
      </Modal>
    </>
        </div>
        <div>
      <>
      <Modal
        size="lg"
        show={lgShow1}
        onHide={() => setLgShow1(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Old 20th Century bar
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          Model of a old 20 Centrury bar at night time. 
          Maya was used to model, uv, and texture the objects. 
          Painting was done in photoshop. 
          

          </p>
          <Card.Img src={oldBar} className="rounded" alt="Card image" />
          <a href="https://react-bootstrap.github.io/components/modal/"></a>
        
        </Modal.Body>
      </Modal>
    </>
        </div>

        <div>
      <>
      <Modal
        size="lg"
        show={lgShow2}
        onHide={() => setLgShow2(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            3D Riot Shield
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          Model of a crowd control shield. 
          Blender was used to model, uv, and texture the objects. 
          Painting was done in Adobe photoshop.

          </p>
          <Card.Img src={shield1} className="rounded" alt="Card image" />
          <a href="https://react-bootstrap.github.io/components/modal/"></a>
        
        </Modal.Body>
      </Modal>
    </>
        </div>
        <h2 class="middle_text"> Welcome to my portfolio</h2>
        <p class="top-p"> Here is a collection of objects modeled using various Industry 3D softwares</p>
        <NavDropdown.Divider />
        <Col>
      <CardGroup>
        <Card className="bg-dark text-white shadow-lg" style={{ color: "#000", width: "auto"}}>
          <Card.Img  variant="top" src={maskm} className="rounded"
          alt="Card image" />
          <Card.Body>
            <Card.Title>Mask of Malice</Card.Title>
            <Card.Text>
            This mask was modeled in Blender. Zbrush was used to add more details. {' '}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button variant="outline-primary" size="sm" onClick={() => setLgShow(true)}>View here</Button>{' '}
            
            </Card.Footer>
        
        </Card>

        <Card className="bg-dark text-white shadow-lg" style={{ color: "#000", width: "auto" }}>
          <Card.Img  src={oldBarAo} className="rounded"
          alt="Card image"/>
          <Card.Body>
            <Card.Title>Old Bar</Card.Title>
            <Card.Text>
            Utilizing my 3D knowledge to build complicated scenes.
           
            {' '}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button variant="outline-primary" size="sm" onClick={() => setLgShow1(true)}>View here</Button>{' '}
            
          </Card.Footer>
        </Card>

        <Card className="bg-dark text-white shadow-lg" style={{ color: "#000", width: "auto" }}>
          <Card.Img src={shield} className="rounded" 
          alt="Card image" />
          <Card.Body>
            <Card.Title>Riot Shield</Card.Title>
            <Card.Text>
              A shield modeled in Blender.
              
            </Card.Text>
            </Card.Body>
        <Card.Footer>
          <Button variant="outline-primary" size="sm" onClick={() => setLgShow2(true)}>View here</Button>{' '}
          
        </Card.Footer>
        </Card>
      </CardGroup>
      <br />
      <NavDropdown.Divider />
      <br />
      <h2 class="middle_text"> Industry software used on all projects</h2>
      <p class="mid-p">Software used include Maya, Blander, nuke, fusion, Adobe After effects, Adobe Photoshop and Zbrush.</p>

      <CardGroup>
        <Card className="bg-dark text-white shadow-lg" style={{ color: "#000", width: "auto"}}>
          <Card.Img  src={truck} className="rounded"
          alt="Card image" />
          <Card.Body>
            <Card.Title>Military Truck</Card.Title>
            <Card.Text>
            This 3D military truck model was designed, modeled, textured in Maya 3D software.
            {' '}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button variant="outline-primary" size="sm">View here</Button>{' '}
            
            </Card.Footer>
        
        </Card>

        <Card className="bg-dark text-white shadow-lg" style={{ color: "#000", width: "auto" }}>
          <Card.Img  src={maskSide} className="rounded"
          alt="Card image"/>
          <Card.Body>
            <Card.Title>3D Model</Card.Title>
            <Card.Text>
            3D face mask.
            modeled, Uv, and textured in Blender.
            Sculpted and added details using ZBrush{' '}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button variant="outline-primary" size="sm">View here</Button>{' '}
            
          </Card.Footer>
        </Card>

        <Card className="bg-dark text-white shadow-lg" style={{ color: "#000", width: "auto" }}>
          <Card.Img src={tacticalK} className="rounded" 
          alt="Card image" />
          <Card.Body>
            <Card.Title>Tactical Knife </Card.Title>
            <Card.Text>
              Tactical knife 3D model. Modeled, uv, and textured using Maya 3D software.
 
            </Card.Text>
            </Card.Body>
        <Card.Footer>
          <Button variant="outline-primary" size="sm">View here</Button>{' '}
          
        </Card.Footer>
        </Card>
      </CardGroup>
      </Col>
      
      </Row>
      <br />
    <NavDropdown.Divider />
    <br />  
    <Container fluid>
    <Row>
    <Col>
    <SocialIcon url="https://github.com/ColinNebula" network="github" className="icon" />
    <SocialIcon url="https://www.linkedin.com/in/colin-nebula-07176022/" network="linkedin" className="icon" />
    <SocialIcon url="mailto:colinnebula@gmail.com" network="mailto" bgColor="#ff5a01" />
    </Col>
    </Row>
    </Container>
    </Container>

    );
  }
  

export default Portfolio;
