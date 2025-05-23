import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useLocationStore } from '../store/locationStore';
import { CiSearch } from "react-icons/ci";
import { ImCross } from "react-icons/im";
import Loading from '../ui/Loading';
import Error from '../ui/Error';
const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState('');
  const { data, loading, error, setError } = useFetch(url);
  const { setLocation } = useLocationStore();
  const [ flag,setFlag ] = useState(false);

  React.useEffect(() => {
  if (data && Array.isArray(data) && data.length > 0) {
    const { lat, lon, display_name } = data[0];
    if (lat && lon && display_name) {
      setLocation(lat, lon, display_name);
      setFlag(false);
    }
  }
}, [data, setLocation]);
React.useEffect(() => {
  if(data && Array.isArray(data) && data.length === 0){
    setFlag(true);
    setError("city not found , please search again");
  }
  else if (error) {
    setFlag(true);
  }
}, [error,data]);

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
    <div className="w-[100%] flex items-center  space-x-2 px-4 m-auto relative ">
      <input
       disabled={loading || flag}
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a city..."
        className="bg-white/90 w-full px-4 py-2 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        disabled={loading || flag}
        onClick={() => handleSearch(query)}
        className="px-4 border-2 rounded-xl py-2 text-white flex flex-nowrap items-center gap-1  bg-blue-500 hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 hover:cursor-pointer"
      >
        Search{!loading?<CiSearch className="" />:<ImCross className="text-red-500" />}
      </button>
      {loading&&<div className='absolute left-1/2 -translate-x-1/2 top-10'><Loading /></div>}
      {flag && <Error error={error} setFlag={setFlag} />}
    </div>
  );
};

export default SearchBar;
