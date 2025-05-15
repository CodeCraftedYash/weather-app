import { useLocationStore } from "../store/locationStore";
import InformationCardItem from "../ui/InformationCardItem";

function LocationDataLayout() {
  const { latitude, longitude, cityName } = useLocationStore();
  const cityAndCountry = cityName?.split(',') || [];

  const entries = [
    { title: "City", value: cityAndCountry[0] },
    { title: "Country", value: cityAndCountry[cityAndCountry.length - 1] },
    { title: "Latitude", value: latitude?.toString() },
    { title: "Longitude", value: longitude?.toString() },
    { title: "Location", value: cityName || "" },
  ];

  return (
    <div className="w-[90%] h-fit p-2 bg-linear-90 from-blue-600 via-blue-400 to-blue-300 border-4 rounded-xl flex flex-col gap-2 font-bold m-auto">
      {entries.map(({ title, value }) => (
        <InformationCardItem key={title} title={title} value={value} />
      ))}
    </div>
  );
}

export default LocationDataLayout;
