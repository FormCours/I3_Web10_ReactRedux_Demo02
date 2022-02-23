import PriceDisplay from '../../components/price-display/price-display';
import style from './product-list.module.css';

// ↓ Donnée hardcodé - Mockup (Temporaire !!!)
const products = [
    { id: 1, name: 'Product 1', price: 42},
    { id: 2, name: 'Product 2', price: 3.14},
    { id: 3, name: 'Product 3', price: 1}
]

const ProductListItem = (props) => (
    <li className={style.product}>
        <p>{props.name}</p>
        <p><PriceDisplay value={props.price} /></p>
    </li>
);

const ProductList = () => {

    const productsJSX = products.map(
        item => <ProductListItem {...item} key={item.id} />
    );

    return (
        <div className={style.containerList}>
            <h2>Liste des produits</h2>
            <ul className={style.productList}>
                {productsJSX}
            </ul>
        </div>
    );
}

export default ProductList;