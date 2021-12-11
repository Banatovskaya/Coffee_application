import './about.css'
import imgAbout from './forYouPleasure.jpg'
import LineBeans from '../line-beans/line-beans';

// this section layout with bootstrap Grid system for just for my studying
//it will be better using flex or persents

const AboutCoffeeHouse = () => {
return (
    <section className="about">
        <div className='container' >
            
                    <div className="about_text-wrap coffee-house">
                         <h1>About Us</h1>
                        <LineBeans />
                        <div className="about_text coffee-house">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.
                            <p></p>
                            Now residence dashwoods she excellent you. Shade being under his bed her, Much
                            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                            horrible but confined day end marriage. Eagerness furniture set preserved far
                            recommend. Did even but nor are most gave hope. Secure active living depend son
                            repair day ladies now.
                        </div>
                    </div>
                
     
            
        </div>
    </section>
)
}

export default AboutCoffeeHouse;