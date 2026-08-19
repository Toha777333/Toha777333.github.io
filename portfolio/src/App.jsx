import Hero from './components/Hero'
import Achievements from './components/Achievements'
import FeaturedProjects from './components/FeaturedProjects'
import ArchiveProjects from './components/ArchiveProjects'
import Footer from './components/Footer'
import data from './data/data.json'

function App() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
      <Hero info={data.personalInfo} />
      <Achievements achievements={data.achievements} />
      <FeaturedProjects projects={data.featuredProjects} />
      <ArchiveProjects projects={data.archiveProjects} />
      <Footer info={data.personalInfo} />
    </main>
  )
}

export default App
