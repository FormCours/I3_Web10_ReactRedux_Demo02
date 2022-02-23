import { PRODUCT_SELECTION } from "../actions/product-action";

const initialProductState = {
    products: [
        {
            id: 1,
            name: 'Alf',
            price: 15_000,
            description: 'Une superbe peluche de Alf',
            image: 'images/alf.jpg'
        }, 
        {
            id: 2,
            name: 'Bisounours ♥',
            price: 34.99,
            description: 'Une peluche trop mimi',
            image: 'images/bisounours.jpg'
        },
        {
            id: 3,
            name: 'Le chat',
            price: 27.8,
            description: 'Une peluche d\'un chat rose',
            image: 'images/cat.jpg'
        }
    ],
    selectedProduct: null
}

export const productReducer = (state = initialProductState, action) => {
    console.log(action);
    
    switch(action.type) {
        case PRODUCT_SELECTION : 
            return {
                ...state,
                selectedProduct: state.products.find(p => p.id === action.payload)
            };
        default:
            return state;
    }
}