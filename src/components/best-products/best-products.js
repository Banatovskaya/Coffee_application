import "./best-products.css"

const BestProducts = (props) => {
    return (
        <div className="best-products about_text-wrap">
            <h1 >
                Our Best
            </h1>
            {props.children}
        </div>
    )

}

export default BestProducts