import {Container, Row, Col} from 'react-bootstrap';
import './about.css'
import imgAbout from './forYouPleasure.jpg'
import LineBeans from '../line-beans/line-beans';

// this section layout with bootstrap Grid system for just for my studying
//it will be better using flex or persents

const About = () => {
return (
    <section className="about">
        <Container >
            <Row>
                <Col xl={{span:4, offset:2}} lg={{span:5, offset:1}} md={{span:6, offset:0}} sm={{span:5, offset:0}} xs={{span:8, offset:2}}>
                  <div className="about_img">
                      <img src={imgAbout} alt="cup of coffee"  />
                  </div>
                     
                   
                </Col>
                <Col xl={{span:4, offset: 0}} lg={{span:5, offset:0}} md={{span:6, offset:0}}  sm={{span:7, offset:0}} xs={{span:10, offset:1}}>
                    <div className="about_text-wrap">
                         <h1>About our goods</h1>
                        <LineBeans />
                        <div className="about_text">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            <p></p>
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions.
                            As greatly removed calling pleased improve an. Last ask him cold feel 
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.
                        </div>
                    </div>
                </Col>
            </Row>
        <div className="about_line"></div>

            
        </Container>
    </section>
)
}

export default About;