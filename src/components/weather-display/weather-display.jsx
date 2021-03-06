// Le composant obtient via les props :
// le nom, la temperature, la description et l'icon

const WeatherDisplay = ({name, temp, desc, icon}) => (
    <div>
        <p>Météo de la region de {name}</p>
        <p>Temperature : {temp} °c</p>
        <img src={icon} alt={desc} />
    </div>
);

export default WeatherDisplay;