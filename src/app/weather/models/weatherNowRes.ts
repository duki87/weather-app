export interface WeatherNowRes {
    location: {
        coordinates: {
            lat: number,
            lon: number
        },
        country: string,
        city: string
    };
    weather: {
        temp: number,
        temp_max: number,
        temp_min: number,
        humidity: number,
        pressure: number,
        wind_speed: number,
        description: string,
        icon: string,
        visibility: number
    };
    datetime: {
        now: number,
        sunrise: number,
        sunset: number
    };
}

export function CreateWeatherNowRes(data) {
    let res = {
        location: {
            coordinates: { lat: data.coord.lat, lon: data.coord.lon},
            country: data.sys.country,
            city: data.name
        },
        weather: {
            temp: data.main.temp,
            temp_max: data.main.temp_max,
            temp_min: data.main.temp_min,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            wind_speed: data.wind.speed,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
            visibility: data.visibility
        },
        datetime: {
            now: data.dt,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset
        }
    }
    return res;
}