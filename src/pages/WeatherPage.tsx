import React from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/rtk-hooks";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from '../styles/pages/weather.module.scss'
import {setCities, setCity, setDeleteLocation} from "../redux/slices/weatherSlice";
import WeatherInfoMinimal from "../components/Weather/WeatherInfoMinimal";
import WeatherInfo from "../components/Weather/WeatherInfo";
import {Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperRef, SwiperSlide} from 'swiper/react';
import BackButton from "../components/Common/BackButton";
import {motion} from 'framer-motion';

const WeatherPage = () => {
    const dispatch = useAppDispatch()

    const {cities, city} = useAppSelector(state => state.weather)
    const [open, setOpen] = React.useState(false)
    const [sizeSliders, setSizeSliders] = React.useState(true)

    const deleteLocation = useAppSelector(state => state.weather.deleteLocation)

    const inputRef = React.useRef<HTMLInputElement>(null)
    const swiperRef = React.useRef<SwiperRef>(null)
    const smallSwiperRef = React.useRef<SwiperRef>(null)

    const addCity = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        const newCity = {...city, id: new Date().getTime().toString()}
        dispatch(setCities([...cities, newCity]))
        dispatch(setCity({...city, name: ''}))
        setOpen(!open)
    }


    return (
        <>
            <div className={open ? styles.modal_container_active : styles.modal_container}>
                <div className={styles.modal_form}>
                    <form className={styles.weather_form}>
                        <input ref={inputRef}
                               type="text"
                               placeholder='Choose a city...'
                               value={city.name}
                               onChange={
                                   (e) =>
                                       dispatch(setCity({...city, name: e.target.value}))
                               }/>
                        <button type='submit' onClick={(e) => {
                            addCity(e)
                        }}>Add city
                        </button>
                        <button type='button' className={styles.clear} onClick={() => {
                            dispatch(setCity({...city, name: ''}))
                        }}>Clear
                        </button>
                    </form>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.back_btn_container}><BackButton/></div>
                <h1>Weather</h1>
                <div className={styles.btns_container}>
                    <h4 className={styles.modal_open_btn} onClick={() => {
                        setOpen(!open)
                    }}>Add location</h4>
                    <h4 className={styles.remove_btn} onClick={() => {
                        dispatch(setDeleteLocation(!deleteLocation))
                        console.log(deleteLocation)
                    }}>Remove location</h4>
                </div>
                <div className={sizeSliders ? styles.small_slider : styles.small_slider_inactive}>
                    <Swiper
                        ref={smallSwiperRef}
                        direction={"vertical"}
                        slidesPerView={cities.length}
                        modules={[Navigation, Pagination]}
                        pagination={{clickable: true}}
                        onClick={(swiper, event) => {
                            if (swiperRef.current && smallSwiperRef.current) {
                                swiperRef.current.swiper.slideTo(smallSwiperRef.current.swiper.clickedIndex)
                                setSizeSliders(!sizeSliders)
                            }
                        }
                        }>
                        {cities.map((item, index) =>
                            <SwiperSlide
                                key={item.id + index}
                                onClick={() => {
                                }}
                            >
                                <motion.div
                                    initial={{opacity: 0, x: -100}}
                                    animate={{opacity: 1, x: 0}}
                                    exit={{opacity: 0, x: -100}}
                                    transition={{delay: 0, duration: 0.5}}
                                >
                                    <WeatherInfoMinimal
                                        key={item.id}
                                        cityName={item.name}
                                        data={item.data}
                                        id={city.id}
                                        item={item}
                                        deleteLocation={deleteLocation}
                                        sizeSliders={sizeSliders}
                                        setSizeSliders={setSizeSliders}
                                    />
                                </motion.div>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
                <div className={sizeSliders! ? styles.slider : styles.slider_active}>
                    <Swiper
                        ref={swiperRef}
                        spaceBetween={1}
                        slidesPerView={1}
                        modules={[Navigation, Pagination]}
                        pagination={{clickable: true}}
                    >
                        {
                            cities.map((item, index) => <SwiperSlide key={item.id + index}>
                                <WeatherInfo key={item.id}
                                             cityName={item.name}
                                             data={item.data}
                                             id={city.id}
                                />
                            </SwiperSlide>)
                        }
                    </Swiper>
                    <button className={styles.back_to_small}
                            onClick={() => setSizeSliders(!sizeSliders)}
                    >Back
                    </button>
                </div>
            </div>
        </>
    );
};

export default WeatherPage;

