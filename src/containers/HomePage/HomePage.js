import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import SideBar from '../../components/SideBar'
function HomePage() {
    return (
        <Container fluid>
            <Row className="flex-xl-nowrap">
                <Col as={SideBar} sm={12} md={3} xl={2}> </Col>
                <Col className="d-none d-xl-block" xl={2}>TOC</Col>
                <Col
                xs={12}
                md={9}
                xl={8}

                >
                    Content
                </Col>
            </Row>
      </Container>
    );
  }
  
export default HomePage;