// import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ReviewItem.css';

const ReviewItem = ({product, handleRemoveProduct}) => {
    const {name, img, price, shipping,quantity} = product;
    return (
        <div className="review-item">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-item-details-container">
                <div className="review-item-details">
                    <p className="product-name" title={name}>
                    {name.length > 20 ? name.slice(0, 20) +'...': name }
                    </p>
                    <p>Price :<span className='orange-color'> ${price}</span></p>
                    <p><span>Shipping : ${shipping}</span></p>
                    <p><span>quantity : {quantity}</span></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveProduct(product)} className='delete-button'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;