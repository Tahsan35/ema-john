import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
    //get data
    const productData = await fetch('products.json');
    const products = await productData.json();
    //get cart
    const savedCart = getStoredCart();
    const initialCart = []
    for (const id in savedCart) {
        const addedProduct = products.find(product => product.id === id);
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }

    }
    return { products, initialCart };
}