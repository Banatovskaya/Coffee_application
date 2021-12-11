import './line-beans.css'
import coffeeImg from './coffee.png'

const LineBeans = () => {
    return (
        <div className="line_wrap">
            <div className="line"></div>
            <img src={coffeeImg} alt="" />
            <div className="line"></div>
        </div>
    )
}
export default LineBeans