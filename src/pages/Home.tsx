import SearchBar from "../components/SearchBar"
import ContentSection from "../layout/ContentSection"
import InfoSection from "../layout/InfoSection"
function Home() {
  return (
    <main className="h-[90dvh] overflow-hidden">
        <ContentSection />
        <div className="bg-gradient-to-b from-cyan-800 to-blue-200  md:flex-row w-[80dvw] md:w-[50vw] border-4 rounded-2xl text-black mx-auto mt-2
        h-[43dvh] overflow-hidden
        ">
           <div className="w-fit block md:hidden h-fit m-auto my-2"><SearchBar /></div>
           <InfoSection />
        </div>
    </main>
  )
}

export default Home