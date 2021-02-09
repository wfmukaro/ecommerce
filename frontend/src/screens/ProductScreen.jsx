import './ProductScreen.css'
const ProductScreen = () => {
    return (
        <div className="productscreen">
            <div className="productscreen__left">
                <div className="left__image">
                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="product name"/>

                </div>
                <div className="left__info">
                    <p className="left__name">Product 1</p>
                    <p className="left__price">Price: R499.99</p>
                    <p className="left__desc">
                    Description: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, perspiciatis aspernatur eaque voluptatem ipsum ullam maxime expedita. Adipisci eos, expedita minus est dicta alias voluptatem, a esse, inventore ipsam earum?
                    </p>
                </div>
            </div>
            <div className="productscreen__right">
                <div className="right__info">
                    <p className="price">
                        Price: <span>R499.99</span>
                    </p>
                    <p className="status">
                        Status: <span>In Stock</span>
                    </p>
                    <p>
                        Qty
                        <select value="1">1</select>
                        <select value="2">2</select>
                        <select value="3">3</select>
                        <select value="4">4</select>
                    </p>
                    <p>
                        <button type="button">Add to Cart</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen
