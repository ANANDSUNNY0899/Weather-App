// import { useState } from "react";
// import { fetchWeather } from "./APIcall";
// import SearchBar from "./Components/SearchBar";
// import WeatherCard from "./Components/WeatherCard";
// import Loader from "./Components/Loader";
// import ErrorMessage from "./Components/ErrorMessage";




// // function App() {
// //   const [weather, setWeather] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState("");

// //   const handleSearch = async (city) => {
// //     setLoading(true);
// //     setError("");
// //     setWeather(null); // Clear previous data

// //     try {
// //       const data = await fetchWeather(city);
// //       setWeather(data);
// //     } catch (err) {
// //       setError(err.message);
// //     }

// //     setLoading(false);
// //   };

// //   return (
// //     <div className="app-container">
// //       <h1>Weather Dashboard</h1>
// //       <SearchBar onSearch={handleSearch} />
// //       {loading && <Loader />}
// //       {error && <ErrorMessage message={error} />}
// //       {weather && <WeatherCard data={weather} />}
// //     </div>
// //   );
// // }

// // export default App;


// // function App() {
// //   const [weather, setWeather] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState("");

// //   const handleSearch = async (city) => {
// //     setLoading(true);
// //     setError("");
// //     setWeather(null);

// //     try {
// //       const data = await fetchWeather(city);
// //       setWeather(data);
// //     } catch (err) {
// //       setError(err.message);
// //     }

// //     setLoading(false);
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
// //       <h1 className="text-3xl font-bold text-blue-600 mb-4">Weather Dashboard 🌍</h1>
// //       <SearchBar onSearch={handleSearch} />
// //       {loading && <Loader />}
// //       {error && <ErrorMessage message={error} />}
// //       {weather && <WeatherCard data={weather} />}
// //     </div>
// //   );
// // }

// // export default App;


// // function App() {
// //   const [weather, setWeather] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState("");

// //   const handleSearch = async (city) => {
// //     setLoading(true);
// //     setError("");
// //     setWeather(null);

// //     try {
// //       const data = await fetchWeather(city);
// //       setWeather(data);
// //     } catch (err) {
// //       setError(err.message);
// //     }

// //     setLoading(false);
// //   };

// //   return (
// //     // <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 flex flex-col items-center justify-center p-4">
// //     //   <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
// //       <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 to-indigo-100 flex flex-col items-center justify-center p-4">
// //   <div className="bg-white rounded-2xl shadow-xl p-8 w-full h-full flex-grow max-w-4xl">

// //         <h1 className="text-3xl font-semibold text-blue-700 mb-6 text-center">
// //           Weather Dashboard ☀️
// //         </h1>
// //         <SearchBar onSearch={handleSearch} />
// //         {loading && (
// //           <div className="flex justify-center mt-6">
// //             <Loader />
// //           </div>
// //         )}
// //         {error && (
// //           <div className="mt-6">
// //             <ErrorMessage message={error} />
// //           </div>
// //         )}
// //         {weather && (
// //           <div className="mt-6">
// //             <WeatherCard data={weather} />
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;



// function App() {
//   const [weather, setWeather] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [searchHistory, setSearchHistory] = useState([]); 

//   const handleSearch = async (city) => {
//     setLoading(true);
//     setError("");
//     setWeather(null);

//     try {
//       const data = await fetchWeather(city);
//       setWeather(data);
//       setSearchHistory((prev) => {
//         const updatedHistory = [city, ...prev.filter((c) => c !== city)].slice(0, 5);
//         return updatedHistory;
//       });
//     } catch (err) {
//       setError(err.message);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="relative min-h-screen flex flex-col items-center justify-center">
//       <video
//         autoPlay
//         loop
//         muted
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       >
//         <source src="/video.mp4" type="video/mp4" />
//       </video>

//       <div className="relative bg-white bg-opacity-80 backdrop-blur-md rounded-2xl shadow-xl p-8 w-full max-w-md z-10">
//       <div className="flex justify-end w-full">
//   {/* Refresh Button */}
//   <button
//     className="mt-2 px-4 py-2 bg-green-100 rounded"
//     onClick={() => weather && handleSearch(weather.weatherData.name)}
//   >
//     🔄
//   </button>
// </div>



//         <h1 className="text-3xl font-semibold text-blue-700 mb-6 text-center">
//         ☀️Weather Dashboard
//         </h1>
//         <SearchBar onSearch={handleSearch} />


//         {/* 🔥 Refresh Button */}



        

//         {/* 🔥 Show recent search history */}
//         {searchHistory.length > 0 && (
//           <div className="mt-4 p-2 bg-gray-100 rounded-lg">
//             <h2 className="text-sm font-semibold mb-2">Recent Searches:</h2>
//             <div className="flex gap-2 flex-wrap">
//               {searchHistory.map((city, index) => (
//                 <button
//                   key={index}
//                   className="px-2 py-1 bg-blue-500 text-white text-sm rounded"
//                   onClick={() => handleSearch(city)}
//                 >
//                   {city}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {loading && <Loader />}
//         {error && <ErrorMessage message={error} />}
//         {weather && <WeatherCard data={weather} />}
//       </div>
//     </div>

    

//   );
// }

// export default App;





// import { useState } from "react";
// import { motion } from "framer-motion";
// import { fetchWeather } from "./APIcall";
// import SearchBar from "./Components/SearchBar";
// import WeatherCard from "./Components/WeatherCard";
// import Loader from "./Components/Loader";
// import ErrorMessage from "./Components/ErrorMessage";
// import { RefreshCw } from "lucide-react";

// function App() {
//   const [weather, setWeather] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [searchHistory, setSearchHistory] = useState([]);

//   const handleSearch = async (city) => {
//     setLoading(true);
//     setError("");
//     setWeather(null);

//     try {
//       const data = await fetchWeather(city);
//       setWeather(data);
//       setSearchHistory((prev) => {
//         const updatedHistory = [city, ...prev.filter((c) => c !== city)].slice(0, 5);
//         return updatedHistory;
//       });
//     } catch (err) {
//       setError(err.message);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="relative min-h-screen flex flex-col items-center justify-center">
//       {/* Background Video */}
//       <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
//         <source src="/video.mp4" type="video/mp4" />
//       </video>

//       {/* Animated Card */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="relative bg-white bg-opacity-80 backdrop-blur-md rounded-2xl shadow-xl p-8 w-full max-w-md z-10"
//       >
//         {/* Refresh Button */}
//         <div className="flex justify-end w-full">
//           <button
//             className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-all"
//             onClick={() => weather && handleSearch(weather.weatherData.name)}
//           >
//             <RefreshCw size={20} />
//           </button>
//         </div>

//         <h1 className="text-3xl font-semibold text-blue-700 mb-6 text-center">
//           ☀️ Weather Dashboard
//         </h1>

//         <SearchBar onSearch={handleSearch} />

//         {/* Recent Search History */}
//         {searchHistory.length > 0 && (
//           <div className="mt-4 p-2 bg-gray-100 rounded-lg">
//             <h2 className="text-sm text-blue-500 font-semibold mb-2">Recent Searches:</h2>
//             <div className="flex gap-2 flex-wrap">
//               {searchHistory.map((city, index) => (
//                 <button
//                   key={index}
//                   className="px-2 py-1 bg-blue-500 text-white text-sm rounded"
//                   onClick={() => handleSearch(city)}
//                 >
//                   {city}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {loading && <Loader />}
//         {error && <ErrorMessage message={error} />}
//         {weather && <WeatherCard data={weather} />}
//       </motion.div>
//     </div>
//   );
// }

// export default App;






import { useState, useEffect } from "react";
import { fetchWeather } from "./APIcall";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import { Moon, Sun, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import SearchBar from "./components/SearchBar";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Apply theme
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleSearch = async (city) => {
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const data = await fetchWeather(city);
      setWeather(data);
      setSearchHistory((prev) => {
        const updatedHistory = [city, ...prev.filter((c) => c !== city)].slice(0, 5);
        return updatedHistory;
      });
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className={`relative min-h-screen flex flex-col items-center justify-center ${darkMode ? "bg-gray-900" : "bg-gray-10"}`}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Weather Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-white dark:bg-gray-800 dark:text-white bg-opacity-80 backdrop-blur-md rounded-2xl shadow-xl p-8 w-full max-w-md z-10"
      >
        {/* Theme Toggle and Refresh Button */}
        <div className="flex justify-between w-full mb-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
          >
            {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
          </button>

          <button
            className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-700 transition"
            onClick={() => weather && handleSearch(weather.weatherData.name)}
          >
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>

        <h1 className="text-3xl font-semibold text-blue-700 dark:text-blue-300 mb-6 text-center">
          ☀️ Weather Dashboard
        </h1>

        <SearchBar onSearch={handleSearch} />

        {/* Recent Search History */}
        {searchHistory.length > 0 && (
          <div className="mt-4 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h2 className="text-sm text-black font-semibold mb-2">Recent Searches:</h2>
            <div className="flex gap-2 flex-wrap">
              {searchHistory.map((city, index) => (
                <button
                  key={index}
                  className="px-2 py-1 bg-blue-500 text-white text-sm rounded"
                  onClick={() => handleSearch(city)}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        )}

        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}
        {weather && <WeatherCard data={weather} />}
      </motion.div>
    </div>
  );
}

export default App;
