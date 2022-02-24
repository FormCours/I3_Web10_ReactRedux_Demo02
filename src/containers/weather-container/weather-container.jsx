import { useSelector, useDispatch } from "react-redux";
import ErrorScreen from "../../components/error-screen/error-screen";
import LoadingScreen from "../../components/loading-screen/loading-screen";
import SearchBar from "../../components/search-bar/search-bar";
import WeatherDisplay from "../../components/weather-display/weather-display";
import { searchWeather } from "../../store/actions/weather-action";

const WeatherContainer = () => {

    // Lien avec le store (via les hooks de React-redux)
    const dispatch = useDispatch();
    const {data, errorMessage, isLoading} = useSelector(state => state.weatherCategory);

    const handleSearch = (city) => {
        // Envoyer l'action qui permet de faire la requete AJAX
        dispatch(searchWeather(city));
    }

    return (
        <div>
            <h2>Recherche la météo</h2>
            <SearchBar onResult={handleSearch} />
            {isLoading ? (
                <LoadingScreen />
            ): errorMessage ? (
                <ErrorScreen message={errorMessage} />
            ) : data != null && (
                <WeatherDisplay {...data} />
            )}
        </div>
    )
}

export default WeatherContainer;