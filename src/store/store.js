import { combineReducers, createStore } from "redux";

// Importation des reducers qu'on à générer
import { productReducer } from "./reducers/product-reducer";


// On créer une "grosse" variable pour réunir les différents reducers
const reducer = combineReducers({
    productCategory: productReducer 
});

// Création du store, sur base du reducer global
const store = createStore(reducer);

// Exporter le store, qui sera par la suite diffuser dans l'app !!!
export default store;
