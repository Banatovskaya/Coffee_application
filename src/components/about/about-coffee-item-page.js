import './about-coffee.css'
import LineBeans from '../line-beans/line-beans';

const AboutCoffeeItemPage = ({data}) => {
    const {country,description, price, img} = data
    return (
        <section className="about-coffee">
            <div className="container" >
                <div className="about-coffee_img">
                    <img src={`../${img}`} alt="coffee-фото"  />
                </div>
                <div className="about-coffee_text-wrap">
                    <h1>About it</h1>
                    <LineBeans />
                    <div className="about-coffee_text">
                        <div><b>Country: </b>{country}</div>
                        <p></p>
                        <b>Description: </b> <span>{description}</span>
                        <p></p>
                        <div><b>Price: </b><b className="about_price">{price}$</b></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutCoffeeItemPage;