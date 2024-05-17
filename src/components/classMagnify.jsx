import {
  Col,
  Grid,
  Jumbotron,
  Row
} from 'react-bootstrap';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import ReactSlickIntegration from '../components/ReactSlickIntegration';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/app.css';

// Convert the class component to a function component
const App = () => {
    return (
        <div>
            <Helmet title="React Image Magnify" />
            <Header />
            <Jumbotron>
                <Grid>
                    <Row>
                        <Col sm={12}>
                            {/* You can add any introductory content here */}
                        </Col>
                    </Row>
                </Grid>
            </Jumbotron>
            <Grid>
                <Row>
                    <Col sm={12}>
                        {/* 
                        Pass any necessary props to ReactSlickIntegration component,
                        such as images data, configuration options, etc.
                        */}
                        <ReactSlickIntegration />
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

export default App;
