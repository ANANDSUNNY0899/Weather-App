// import { useState } from "react";

// function SearchBar({ onSearch }) {
//   const [city, setCity] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (city.trim() !== "") {
//       onSearch(city);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="search-bar">
//       <input
//         type="text"
//         placeholder="Enter city name..."
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// }

// export default SearchBar;



import { useState } from "react";
import { Search } from "lucide-react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      onSearch(city);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center mt-4">
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="px-4 py-2 w-64 border border-green-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-300 text-black text-lg"
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md">
        <Search size={20} />
      </button>
    </form>
  );
}

export default SearchBar;
