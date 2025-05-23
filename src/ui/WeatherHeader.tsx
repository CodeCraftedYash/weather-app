import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Button from "../components/Button";
import type { filter } from "../types/weatherDataType";

interface WeatherHeaderProps {
  date: string;
  setDate: (value: string) => void;
  filter: "Temperature" | "Precipitation" | "Wind Speed";
  setFilter: (value: WeatherHeaderProps["filter"]) => void;
}


function WeatherHeader({ date, setDate, filter, setFilter}: WeatherHeaderProps) {
  const [open , setOpen] = useState(false);
  const [previousValue, setPreviousValue] = useState(0);
  const options = [
    {label:"Today" , value:0},
    {label:"Tomorrow" , value:1},
    {label:"Day after" , value:2},
  ]
  const filters:filter[]=["Temperature","Precipitation","Wind Speed"];

  const handleDateClick = (val:number)=> {
    if(previousValue < val){
    const temp = `${parseInt(date.split("|")[0]) + (val - previousValue)}|${date.split("|")[1]}`;
    setDate(temp);
    }
    else if(previousValue > val){
    const temp = `${parseInt(date.split("|")[0]) - (previousValue - val)}|${date.split("|")[1]}`;
    setDate(temp);
    }
    setPreviousValue(val);
  }

  const filterBaseClass = "p-1 pt-0 rounded-xl hover:scale-105 box-border whitespace-nowrap border-2";

  return (
    <div className="w-full flex flex-nowrap items-center justify-between">

      <div className="relative inline-block text-left">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="bg-white box-border border-2 p-2 rounded-xl flex items-center gap-1"
        >
          <span className="font-bold text-[0.6rem] whitespace-nowrap w-10">
            {options.find(opt => opt.value === previousValue)?.label}
          </span>
          <FaAngleDown className="text-[0.6rem]" />
        </button>

        {open && (
          <div className="absolute mt-2 bg-white border rounded-xl shadow z-10 min-w-max">
            {options.map(({ label, value }) => (
              <div
                key={label}
                onClick={() => {
                  handleDateClick(value)
                  setOpen(false);
                }}
                className={`px-4 py-2 cursor-pointer hover:bg-gray-200 text-[0.6rem] border-y border-black ${
                  previousValue === value ? "bg-green-300 font-semibold border-green-500" : ""
                }`}
              >
                {label}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="ml-2 flex flex-nowrap gap-2 whitespace-nowrap overflow-x-scroll p-1 bg-gradient-to-r from-blue-700 to-blue-400 via-blue-500 rounded-2xl">
        {filters.map( (item)  => (
          <Button
            key={item}
            label={item}
            onClick={() => setFilter(item)}
            classNm={`${ filter === item ? "bg-green-300 text-black " : "bg-white"} ${filterBaseClass}`}
          />
        ))}
      </div>
    </div>
  );
}

export default WeatherHeader;
