import {Container, Row, Col} from 'react-bootstrap';
import './about.css'
import imgAbout from './coffee.jpg'
import LineBeans from '../line-beans/line-beans';

// this section layout with bootstrap Grid system for just for my studying
//it will be better using flex or persents

const AboutCoffeeItemPage = ({data}) => {
    
    const {country,description, price} = data
    
   
return (
    <section className="about">
        <Container >
            <Row>
                <Col xl={{span:5, offset:1}} lg={{span:5, offset:1}} md={{span:6, offset:0}} sm={{span:4, offset:0}} xs={{span:8, offset:2}}>
                  <div className="about_img coffee">
                      <img src={imgAbout} alt="coffee-фото"  />
                  </div>
                     
                   
                </Col>
                <Col xl={{span:5, offset: 0}} lg={{span:5, offset:1}} md={{span:6, offset:0}}  sm={{span:7, offset:1}} xs={{span:10, offset:1}}>
                    <div className="about_text-wrap coffee">
                         <h1>About it</h1>
                        <LineBeans />
                       
                        <div className="about_text coffee">
                            <div><b>Country: </b>{country}</div>
                            <p></p>
                            <b>Description: </b> <span>{description}</span>
                            <p></p>
                            <div><b>Price: </b><b className="about_price">{price}$</b></div>
                        </div>
                       
                    </div>
                </Col>
            </Row>

            
        </Container>
    </section>
)
}

export default AboutCoffeeItemPage;