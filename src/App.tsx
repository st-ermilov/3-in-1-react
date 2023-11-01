import React from "react";
import './styles/App.css'
import TodoPage from "./pages/TodoPage";
import MainPage from "./pages/MainPage";
import {Route, Routes} from "react-router-dom";
import WeatherPage from "./pages/WeatherPage";
import ExchangePage from "./pages/ExchangePage";


const App: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/todo' element={<TodoPage/>}/>
                <Route path='/weather' element={<WeatherPage/>}/>
                <Route path='/exchange' element={<ExchangePage/>}/>
            </Routes>
        </>
    )
}
export default App
