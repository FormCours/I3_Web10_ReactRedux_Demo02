import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import reduxThunk from 'redux-thunk';

// Importation des reducers qu'on à générer
import { productReducer } from "./reducers/product-reducer";
import { weatherReducer } from "./reducers/weather-reducer";

// On créer une "grosse" variable pour réunir les différents reducers
const reducer = combineReducers({
    productCategory: productReducer,
    weatherCategory: weatherReducer
});

// Création du store, sur base du reducer global
// => Ajout du middleware "redux-thunk"
const store = createStore(reducer, applyMiddleware(reduxThunk));

// Création du store en prenant en compte le "ReduxDev Tools"
//const store = createStore(reducer, compose(applyMiddleware(reduxThunk), 
//    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

// Exporter le store, qui sera par la suite diffuser dans l'app !!!
export default store;
