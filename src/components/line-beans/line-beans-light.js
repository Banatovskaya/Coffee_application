import './line-beans.css'
import coffeeImg from './coffee-light.png'

const LineBeans = () => {
    return (
        <div className="line_wrap">
            <div className="line light"></div>
            <img src={coffeeImg} alt="" />
            <div className="line light"></div>
        </div>
    )
}
export default LineBeans