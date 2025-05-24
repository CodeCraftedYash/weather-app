function About() {
  return (
    <div className="text-lg min-h-[calc(100dvh-15dvh)] font-bold ">
      <div className="custom-gradient h-full w-[90%] md:w-[60%] border-2 rounded-xl mx-auto mt-4 p-6">
      <p>I developed this responsive weather application using React.js and Tailwind CSS, deploying it via Vercel for optimal performance. The app fetches real-time weather data from the Open-Meteo API, providing hourly forecasts for temperature, precipitation, and wind speed. For geolocation, it utilizes the Nominatim API from OpenStreetMap to convert user-inputted city names into geographic coordinates. The application leverages Axios for efficient API requests, Zustand for state management, and Chart.js (via react-chartjs-2) to visualize weather trends. Designed with a mobile-first approach, it ensures a seamless user experience across all screen sizes
        </p>
        </div>
      </div>
  )
}

export default About