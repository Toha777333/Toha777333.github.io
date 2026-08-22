import Hero from './components/Hero'
import Achievements from './components/Achievements'
import FeaturedProjects from './components/FeaturedProjects'
import ProjectArchiveGrid from './components/ProjectArchiveGrid'
import ProjectArchiveHex from './components/ProjectArchiveHex'
import Footer from './components/Footer'
import data from './data/data.json'

function App() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
      <Hero info={data.personalInfo} />
      <Achievements achievements={data.achievements} />
      <FeaturedProjects projects={data.featuredProjects} />
      {/* <ProjectArchiveGrid projects={data.archiveProjects} /> */}
      <ProjectArchiveHex />
      <Footer footerData={data.footerData} />
    </main>
  )
}

export default App
