import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import SideNav from './components/SideNav'
import Stations from './pages/stations'
import { Container, Col, Row } from 'react-bootstrap';

const App = () => {
  const [message, setMessage] = useState('');

  fetch('/.netlify/functions/ping/')
    .then(res => res.json())
    .then(json => setMessage(json.text));

  return (
    <BrowserRouter>
      <Header />
      <Container fluid>
        <Row className="site">
          <Col sm={4} md={3} xl={2} className="side-nav">
            <SideNav />
          </Col>
          
          <Col className="site-content">
            <Switch>
              <Route exact path='/'>
                <h1>Hi 807.band!</h1>
                <p>ping? {message}</p>
              </Route>
              <Route exact path='/stations'>
                <Stations/>
              </Route>
            </Switch>
          </Col>
          
          <Col lg={2} className="page-nav">
            haha sidebar go brrr
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
};

export default App;
