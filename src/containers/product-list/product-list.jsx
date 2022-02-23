import { useSelector, useDispatch } from 'react-redux';
import PriceDisplay from '../../components/price-display/price-display';
import { selectProduct } from '../../store/actions/product-action';
import style from './product-list.module.css';


const ProductListItem = (props) => (
    <li className={style.product} onClick={() => props.onSelected(props.id)}>
        <p>{props.name}</p>
        <p><PriceDisplay value={props.price} /></p>
    </li>
);

const ProductList = () => {
    const products = useSelector(state => state.productCategory.products)
    const dispatch = useDispatch();

    const productsJSX = products.map(
        item => <ProductListItem {...item} 
                    key={item.id}
                    onSelected={(id) => dispatch(selectProduct(id))} />
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