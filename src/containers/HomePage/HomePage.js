import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import SideBar from '../../components/SideBar'

function TestPage() {
    return <div><h2> Test</h2></div>
}
function HellotPage() {
    return <div><h2> Hello</h2></div>
}
function HomePage() {
    let { path } = useRouteMatch();
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
                        <Switch>
                            <Route exact path={`${path}`}>
                                <HellotPage></HellotPage>
                            </Route>
                            <Route exact path={`${path}/hello`}>
                                <HellotPage></HellotPage>
                            </Route>
                            <Route path={`${path}/test`}>
                                <TestPage />
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
    );
  }
  
export default HomePage;