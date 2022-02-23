import PriceDisplay from "../../components/price-display/price-display";

// ↓ Fausse données (Mokup)
const selectedProduct = {
    name: 'Je sais pas, product name par exemple',
    price: 42.1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent erat lorem, congue a posuere vel, aliquet eu diam. Donec ultrices, ante elementum dignissim placerat, mauris ante pharetra ligula, nec maximus quam velit quis odio.',
    image: 'images/cat.jpg'
};

const ProductDetail = () => {

    return (
        <div>
            <h2>Detail du produit</h2>
            <div>
                <h3>{selectedProduct.name}</h3>
                <p> <PriceDisplay value={selectedProduct.price} /> </p>
                <img src={selectedProduct.image} alt={selectedProduct.name} />
                <h4>Description du produit : </h4>
                <p>{selectedProduct.description}</p>
            </div>
        </div>
    );
}

export default ProductDetail;
