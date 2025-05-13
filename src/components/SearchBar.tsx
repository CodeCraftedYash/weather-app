import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useLocationStore } from '../store/locationStore';
import { CiSearch } from "react-icons/ci";
import { ImCross } from "react-icons/im";
const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState('');
  const { data, loading, error } = useFetch(url);
  const { setLocation } = useLocationStore();
  const [ flag,setFlag ] = useState(false);

  React.useEffect(() => {
  if (data && Array.isArray(data) && data.length > 0) {
    const { lat, lon, display_name } = data[0];
    if (lat && lon && display_name) {
      setLocation(lat, lon, display_name);
       console.log(`Searching for: ${data[0]?.display_name}:not found`);
    }
  }
}, [data, setLocation]);
React.useEffect(() => {
  if (error) {
    setFlag(true);
  }
}, [error]);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = (finalString: string) => {
    if (finalString.trim() !== '') {
      const formattedUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(finalString)}`;
      setUrl(formattedUrl);
    }
    setQuery('');
  };



  return (
    <div className="md:w-[50%] flex items-center space-x-2 p-4 m-auto relative">
      <input
       disabled={loading || flag}
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a city..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        disabled={loading || flag}
        onClick={() => handleSearch(query)}
        className="px-4 py-2 text-white flex flex-nowrap items-center gap-1 bg-blue-500 rounded-md hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:cursor-pointer"
      >
        Search{!loading?<CiSearch className="" />:<ImCross className="text-red-500" />}
      </button>
      {loading&&<div className='absolute left-[50%] translate-x-[-50%] top-[140%]'><div className='w-20 h-20 m-auto rounded-full border-t-4 animate-spin border-green-600 '></div></div>}
    {flag &&
        <div className="absolute left-[50%] translate-x-[-50%] top-2 text-red-500 bg-black p-4 rounded-xl text-center">
            <span className='absolute left-4 bottom-2 font-bold scale-200 animate-pulse'>!</span>
          {error}
          <span className='absolute right-4 bottom-2 font-bold scale-200 animate-pulse'>!</span>
          {flag&&<span className='absolute right-3 top-2 text-white hover:cursor-pointer hover:text-green-500 transition-colors' onClick={()=>setFlag(false)}><ImCross /></span>}
        </div>
    }
    </div>
  );
};

export default SearchBar;
