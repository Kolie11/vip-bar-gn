import { Star, Music, Users } from 'lucide-react'

function HomePage() {
  return (
    <div className='bg-black'>
      <section className='hero'>
        <div className='hero-content'>
          <div className='hero-badge'>
            <span>Luxe Américain</span>
          </div>

          <h1>PRESTIGE</h1>
          <p>L'expérience VIP ultime à Conakry</p>
          <button className='btn-primary'>Réserver une Table</button>
        </div>

        <div className='features'>
          <div className='feature-card'>
            <div className='feature-icon'><Star size={32} /></div>
            <h3>Premium</h3>
            <p>Les meilleurs cocktails et spiritueux du monde.</p>
          </div>

          <div className='feature-card'>
            <div className='feature-icon'><Music size={32} /></div>
            <h3>Ambiance</h3>
            <p>DJ résidents et musique électronique.</p>
          </div>

          <div className='feature-card'>
            <div className='feature-icon'><Users size={32} /></div>
            <h3>Exclusive</h3>
            <p>Événements privés sur demande.</p>
          </div>
        </div>

        <div className='cta-section'>
          <h2>Découvrez nos événements spéciaux</h2>
          <p>Soirées VIP, concerts, lansements produits</p>
          <button className='btn-secondary'>En savoir plus</button>
        </div>
      </section>
    </div>
  )
}

export default HomePage