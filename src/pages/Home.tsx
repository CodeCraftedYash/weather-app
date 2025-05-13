import ContentSection from "../layout/ContentSection"
import InfoSection from "../layout/InfoSection"

function Home() {
  return (
    <main className="min-h-[calc(100dvh-10dvh)]">
        <ContentSection />
        <InfoSection />
    </main>
  )
}

export default Home