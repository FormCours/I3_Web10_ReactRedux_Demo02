import axios from "axios";

// Les types d'actions possible (Géré par le reducer)
export const WEATHER_LOADING = 'weather/loading';
export const WEATHER_RESULT = 'weather/result';
export const WEATHER_ERROR = 'weather/error';


// Méthode pour créer les objets actions
export const loadingWeather = () => ({
    type: WEATHER_LOADING
});

export const errorWeather = (message) => ({
    type: WEATHER_ERROR,
    payload: message
});

export const resultWeather = (result) => ({
    type: WEATHER_RESULT,
    payload: {
        name: result.name,
        temp: result.main.temp,
        desc: result.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`
    }
})

// Méthode pour rechercher la météo via axios (necessite Redux-thunk)
export const searchWeather = (city) => {

    // Envoie d'une fonction qui sera traité via Redux-Thunk
    return (dispatch) => {
        //   ↑ La variable "dispatch" permet à Redux-Thunk de déclancher des actions

        // Test de garde
        if (!city) {
            // Déclenche l'action 'ERROR'
            dispatch(errorWeather('Ville recherché non défini !'));
            return;
        }
       
        // Déclenche l'action 'LOADING'
        dispatch(loadingWeather());                  

        // Envoie de la requete AJAX
        axios.get('http://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: city,
                appid: 'c3fa448b20d4333b499f552522c429d3',
                units: 'metric',
                lang: 'fr'
            }
        }).then(response => {
            // Déclenche l'action 'RESULT'
            dispatch(resultWeather(response.data));     

        }).catch(error => {
            // Déclenche l'action 'ERROR'
            const message = (error.response && error.response.status === 404) ? 'Ville non trouvé' : 'Requete échoué :(';
            dispatch(errorWeather(message));      
        })
    }
}