import './Cart.css';
const Cart = ({cart}) => {
    // console.log(cart)
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const pd of cart) {
        total = total + pd.price * pd.quantity;
        shipping = shipping + pd.shipping;
        quantity = quantity + pd.quantity;
    };
    const tax = parseFloat((total* 10/100).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className="cart">
            <h4>Order Summary</h4>
            <p>Selected Item : {quantity}</p>
            <p>Total price : ${total}</p>
            <p>Total shipping : ${shipping}</p>
            <p>Tax : ${tax}</p>
            <h5>Grand Total : ${grandTotal}</h5>
        </div>
    );
};

export default Cart;