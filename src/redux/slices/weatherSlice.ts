import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type typeClouds = {
    all: number
}
type typeCoord = {
    lon: number,
    lat: number
}
type typeMain = {
    feels_like: number,
    grnd_level: number,
    humidity: number,
    pressure: number,
    sea_level: number,
    temp: number,
    temp_max: number,
    temp_min: number
}
type typeSys = {
    country: string,
    id: number,
    sunrise: number
    sunset: number,
    type: number
}
type typeWeather = {
    id: number,
    main: string,
    description: string,
}
type typeWind = {
    deg: number,
    gust: number,
    speed: number
}
export type typeData = {
    base: string,
    clouds: typeClouds,
    cod: number,
    coord: typeCoord,
    dt: number,
    id: number,
    main: typeMain,
    name: string,
    sys: typeSys,
    timezone: number,
    visibility: number,
    weather: typeWeather[],
    wind: typeWind
}

export type typeCity = {
    id: string,
    name: string,
    data: typeData
}

type typeInitialState = {
    cities: typeCity[],
    city: typeCity,
    deleteLocation: boolean
}

const initialState: typeInitialState = {
    cities: [],
    city: {
        id: new Date().getTime().toString(),
        name: '',
        data: {
            base: '',
            clouds: {
                all: 0
            },
            cod: 0,
            coord: {
                lon: 0,
                lat: 0
            },
            dt: 0,
            id: 0,
            main: {
                feels_like: 0,
                grnd_level: 0,
                humidity: 0,
                pressure: 0,
                sea_level: 0,
                temp: 0,
                temp_max: 0,
                temp_min: 0
            },
            name: '',
            sys: {
                country: '',
                id: 0,
                sunrise: 0,
                sunset: 0,
                type: 0
            },
            timezone: 0,
            visibility: 0,
            weather: [{
                id: 0,
                main: '',
                description: ''
            }],
            wind: {
                deg: 0,
                gust: 0,
                speed: 0,
            }
        },
    },
    deleteLocation: false
}


const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setCity: (state, action: PayloadAction<typeCity>) => {
            state.city = action.payload
        },
        removeCity: (state, action: PayloadAction<typeCity>) => {
            state.cities = state.cities.filter((item) => item.id !== action.payload.id)
        },

        setCities: (state, action: PayloadAction<typeCity[]>) => {
            state.cities = action.payload
        },

        setData: (state, action: PayloadAction<typeData>) => {
            const findCity = state.cities.find(item => item.name === action.payload.name);

            if (findCity) {
                findCity.data = action.payload;
            }
        },

        setDeleteLocation: (state, action: PayloadAction<boolean>) => {
            state.deleteLocation = action.payload
        }


    }
})

export const {
    setCity,
    setCities,
    setData,
    removeCity,
    setDeleteLocation
} = weatherSlice.actions

export default weatherSlice.reducer