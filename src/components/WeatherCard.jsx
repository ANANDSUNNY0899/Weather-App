// function WeatherCard({ data }) {
//     return (
//       <div className="weather-card">
//         <h2>{data.name}, {data.sys.country}</h2>
//         <p>Temperature: {Math.round(data.main.temp)}°C</p>
//         <p>Humidity: {data.main.humidity}%</p>
//         <p>Weather: {data.weather[0].description}</p>
//       </div>
//     );
//   }
  
//   export default WeatherCard;
  


import React from "react";

function WeatherCard({ data }) {
  const { weatherData, forecastData } = data;

  return (
    <div className="bg-gradient-to-br from-blue-500 to-indigo-300 text-white p-6 rounded-3xl shadow-lg w-full max-w-lg">
      {/* 🔥 City Name & Weather Description */}
      <div className="text-center">
        <h2 className="text-3xl font-bold">{weatherData.name}</h2>
        <p className="text-lg mt-1 capitalize">{weatherData.weather[0].description}</p>
      </div>

      {/* 🔥 Main Weather Icon & Temperature */}
      <div className="flex justify-center items-center mt-4">
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt={weatherData.weather[0].description}
          className="w-20 h-20"
        />
        <h3 className="text-5xl font-semibold ml-4">{weatherData.main.temp}°C</h3>
      </div>

      {/* 🔥 Extra Weather Info */}
      <div className="flex justify-between mt-6 text-sm">
        <div className="flex flex-col items-center">
          <p>🔥 Feels Like</p>
          <p className="font-bold">{weatherData.main.feels_like}°C</p>
        </div>
        <div className="flex flex-col items-center">
          <p>💧 Humidity</p>
          <p className="font-bold">{weatherData.main.humidity}%</p>
        </div>
        <div className="flex flex-col items-center">
          <p>💨  Wind</p>
          <p className="font-bold">{weatherData.wind.speed} m/s</p>
        </div>
      </div>

      {/* 🔥 5-Day Forecast */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-3 text-center">5-Day Forecast</h3>
        <div className="flex justify-between overflow-x-auto gap-2">
          {forecastData.list
            .filter((_, index) => index % 8 === 0) // Pick one forecast per day
            .map((forecast, index) => (
              <div
                key={index}
                className="bg-white/20 p-3 rounded-xl flex flex-col items-center shadow-md backdrop-blur-md"
              >
                <p className="text-sm">{new Date(forecast.dt * 1000).toLocaleDateString()}</p>
                <img
                  src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                  alt={forecast.weather[0].description}
                  className="w-12 h-12"
                />
                <p className="font-semibold">{forecast.main.temp}°C</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
