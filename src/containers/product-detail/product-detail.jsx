import { useSelector } from "react-redux";
import PriceDisplay from "../../components/price-display/price-display";
import style from './product-detail.module.css';

const ProductDetail = () => {

    const selectedProduct = useSelector(s => s.productCategory.selectedProduct)

    if(selectedProduct === null) {
        return (
            <div>
                <h2>Pas de produit selectionné :o</h2>
            </div> 
        )
    }

    return (
        <div>
            <h2>Detail du produit</h2>
            <div className={style.productDetail}>
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
