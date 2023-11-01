import React from 'react';
import styles from '../../styles/components/weather_info_minimal.module.scss'
import axios from "axios";
import {removeCity, setData, typeCity, typeData} from "../../redux/slices/weatherSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/rtk-hooks";
import deleteBtn from "../../assets/images/del.svg";


type TMinWeatherProps = {
    id: string,
    cityName: string,
    data: typeData,
    item: typeCity,
    deleteLocation: boolean,
    setSizeSliders: React.Dispatch<React.SetStateAction<boolean>>,
    sizeSliders: boolean
}
const WeatherInfoMinimal: React.FC<TMinWeatherProps> = ({
                                                            id,
                                                            cityName,
                                                            data,
                                                            item,
                                                            setSizeSliders,
                                                            sizeSliders
                                                        }) => {
    const weatherDescription: string = data.weather[0].description

    const dispatch = useAppDispatch()

    const deleteLocation = useAppSelector(state => state.weather.deleteLocation)

    React.useEffect(() => {
        const getWeather = async () => {
            try {
                const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=660873f3eb5e415177c22f423405686b`)
                const weatherData = weather.data
                dispatch(setData(weatherData))
                console.log(weatherData)
            } catch (error) {
                console.error(error)
            }
        }
        // getWeather()
    }, [])
    const weatherIconSwitch = (weatherDescription: string) => {
        const currentTime = new Date().getTime() / 1000;
        if (currentTime >= data.sys.sunrise && currentTime <= data.sys.sunset) {
            switch (weatherDescription) {
                case 'clear sky':
                    return 'https://raw.githubusercontent.com/st-ermilov/weather/main/sun.svg'
                case 'few clouds':
                    return 'https://raw.githubusercontent.com/st-ermilov/weather/main/few_clouds_day.svg'
                case 'scattered clouds':
                    return 'https://raw.githubusercontent.com/st-ermilov/weather/main/cloud.svg'
                case 'broken clouds':
                    return 'https://raw.githubusercontent.com/st-ermilov/weather/main/cloud.svg'
                case 'overcast clouds':
                    return 'https://raw.githubusercontent.com/st-ermilov/weather/main/cloud.svg'
                case 'shower rain':
                    return 'https://raw.githubusercontent.com/st-ermilov/weather/main/shower_rain.svg'
                case 'rain' || 'light rain' || 'moderate rain' || 'heavy intensity rain' || 'very heavy rain'
                || 'extreme rain' || 'freezing rain' || 'light intensity shower rain' || 'shower rain'
                || 'heavy intensity shower rain' || 'ragged shower rain':
                    return 'https://raw.githubusercontent.com/st-ermilov/weather/main/shower_rain.svg'
                case 'light intensity drizzle' || 'drizzle' || 'heavy intensity drizzle'
                || 'light intensity drizzle rain' || 'drizzle rain' || 'heavy intensity drizzle rain'
                || 'shower rain and drizzle' || 'heavy shower rain and drizzle' || 'shower drizzle':
                    return 'https://raw.githubusercontent.com/st-ermilov/weather/main/shower_rain.svg'
                case 'thunderstorm' || 'thunderstorm with light rain' || 'thunderstorm with rain'
                || 'thunderstorm with heavy rain' || 'light thunderstorm' || 'heavy thunderstorm'
                || 'ragged thunderstorm' || 'thunderstorm with light drizzle' || 'thunderstorm with drizzle'
                || 'thunderstorm with heavy drizzle':
                    return 'https://raw.githubusercontent.com/st-ermilov/weather/main/thunderstorm.svg'
                case 'snow' || 'light snow' || 'heavy snow' || 'sleet' || 'light shower sleet' || 'shower sleet'
                || 'light rain and snow' || 'rain and snow' || 'light shower snow'
                || 'shower snow' || 'heavy shower snow':
                    return 'https://raw.githubusercontent.com/st-ermilov/weather/main/snow.svg'
                case 'mist' || 'smoke' || 'haze' || 'sand/dust whirls' || 'fog'
                || 'sand' || 'dust' || 'volcanic ash' || 'squalls' || 'tornado':
                    return 'https://raw.githubusercontent.com/st-ermilov/weather/main/mist.svg'
                default:
                    return 'https://raw.githubusercontent.com/st-ermilov/weather/main/sun.svg'
            }
        } else {
            switch (weatherDescription) {
                case 'clear sky':
                    return 'https://raw.githubusercontent.com/st-ermilov/weather/main/moon.svg'
                case 'few clouds':
                    return 'https://raw.githubusercontent.com/st-ermilov/weather/main/few_clouds_night.svg'
                case 'scattered clouds':
                    return 'https://raw.githubusercontent.com/st-ermilov/weather/main/few_clouds_night.svg'
                case 'broken clouds':
                    return 'https://raw.githubusercontent.com/st-ermilov/weather/main/few_clouds_night.svg'
                case 'overcast clouds':
                    return 'https://raw.githubusercontent.com/st-ermilov/weather/main/few_clouds_night.svg'
                case 'shower rain':
                    return 'https://raw.githubusercontent.com/st-ermilov/weather/main/shower_rain.svg'
                case 'rain' || 'light rain' || 'moderate rain' || 'heavy intensity rain' || 'very heavy rain'
                || 'extreme rain' || 'freezing rain' || 'light intensity shower rain' || 'shower rain'
                || 'heavy intensity shower rain' || 'ragged shower rain':
                    return 'https://raw.githubusercontent.com/st-ermilov/weather/main/shower_rain.svg'
                case 'light intensity drizzle' || 'drizzle' || 'heavy intensity drizzle'
                || 'light intensity drizzle rain' || 'drizzle rain' || 'heavy intensity drizzle rain'
                || 'shower rain and drizzle' || 'heavy shower rain and drizzle' || 'shower drizzle':
                    return 'https://raw.githubusercontent.com/st-ermilov/weather/main/shower_rain.svg'
                case 'thunderstorm' || 'thunderstorm with light rain' || 'thunderstorm with rain'
                || 'thunderstorm with heavy rain' || 'light thunderstorm' || 'heavy thunderstorm'
                || 'ragged thunderstorm' || 'thunderstorm with light drizzle' || 'thunderstorm with drizzle'
                || '\tthunderstorm with heavy drizzle':
                    return 'https://raw.githubusercontent.com/st-ermilov/weather/main/thunderstorm.svg'
                case 'snow' || 'light snow' || 'heavy snow' || 'sleet' || 'light shower sleet' || 'shower sleet'
                || 'light rain and snow' || 'rain and snow' || 'light shower snow'
                || 'shower snow' || 'heavy shower snow':
                    return 'https://raw.githubusercontent.com/st-ermilov/weather/main/snow.svg'
                case 'mist' || 'smoke' || 'haze' || 'sand/dust whirls' || 'fog'
                || 'sand' || 'dust' || 'volcanic ash' || 'squalls' || 'tornado':
                    return 'https://raw.githubusercontent.com/st-ermilov/weather/main/mist.svg'
                default:
                    return 'https://raw.githubusercontent.com/st-ermilov/weather/main/sun.svg'
            }
        }

    }
    return (
        <div className={styles.container}>
            <h2 className={styles.city_name}>{cityName}</h2>
            <h3>{Math.round(data.main.temp - 273.15)}<sup>o</sup></h3>
            <img src={weatherIconSwitch(weatherDescription)} alt={weatherDescription} className={styles.weather_img}/>
            <img src={deleteBtn} alt="delete_location"
                 className={deleteLocation ? styles.delete_location : styles.delete_location_show}
                 onClick={(e) => {
                     dispatch(removeCity(item))
                     setSizeSliders(!sizeSliders)
                 }}/>
        </div>)
}

export default WeatherInfoMinimal