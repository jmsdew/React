import { useEffect, useState } from "react"


const WeatherContainer = () => {

  const API_KEY = '207a52923e0d2e1ca4acea1ce48628fc';
  const [position, setPosition] = useState({});
  const [cityName, setCityName] = useState('');
  const [weather, setWeather] = useState({});
  const [wind, setWind] = useState({});

  // 사용자의 위치 정보를 받아오는 함수
  const getPosition = () => {
    return (
      new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((currentPosition) => {
          /*             console.log(currentPosition);
                      console.log(currentPosition.coords.longitude);
                      console.log(currentPosition.coords.latitude);
           */
          setPosition({
            longitude: currentPosition.coords.longitude,
            latitude: currentPosition.coords.latitude
          });
          resolve(currentPosition.coords);
        });
      })
    )
  }

  const getWeather = (coords) => {
      return (
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}&lang=en`)
        .then(response => response.json())
      )
  }

  useEffect(() => {
      async function setWeatherState(){
        const currentPosition = await getPosition();
        const result = await getWeather(currentPosition);

          setCityName(result.name);
          setWeather(result.weather[0]);
          setWind(result.wind);
      }
      
      setWeatherState();
   
  },[])


  return (
    <>
      <h3>오늘의 날씨</h3>
      <h4>{`경도 : ${position.longitude} 위도 : ${position.latitude}`}</h4>
      <h4>{`조회 도시 : ${cityName}`}</h4>
      <h4>{`날씨 : ${weather.main} 날씨 설명 : ${weather.description}`}</h4>
      <h4>{`풍향  : ${wind.deg}도 풍속 : ${wind.speed}m/s`}</h4>

    </>
  )

}
export default WeatherContainer;