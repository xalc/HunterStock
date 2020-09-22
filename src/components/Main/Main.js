import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

import styles from './Header.module.scss';
function Main() {
    return (
        <Container fluid>
            <Row className="flex-xl-nowrap">
                <Col  xs={12} md={3} xl={2}  />
                <Col  className="d-none d-xl-block" xl={2} />
                <Col
                xs={12}
                md={9}
                xl={8}
                as="main"
                id="rb-docs-content"
                className={styles.main}
                >
                </Col>
            </Row>
      </Container>
    );
  }
  
export default Main;