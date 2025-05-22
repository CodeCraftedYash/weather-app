import SearchBar from "../components/SearchBar"
import ContentSection from "../layout/ContentSection"
import InfoSection from "../layout/InfoSection"
function Home() {
  return (
    <main className="min-h-[90dvh]">
        <ContentSection />
        <div className="bg-gradient-to-b from-cyan-800 to-blue-200  md:flex-row w-[90%] md:w-[60%] min-h-[50dvh] max-h-[55dvh] border-4 rounded-2xl text-black mx-auto mt-2">
           <div className="w-fit block md:hidden h-fit m-auto my-5"><SearchBar /></div>
           <InfoSection />
        </div>
    </main>
  )
}

export default Home