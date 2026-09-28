import { Award, Wine, Calendar, Users } from 'lucide-react'

function About() {
  return (
    <div className='page-section'>
      <div className='page-container'>
        <h1 className='page-title'>À PROPOS</h1>
        <p className='page-subtitle'>L'histoire de Prestige</p>

        <div className='about-story'>
          <p>
            Né à Conakry, Prestige VIP Bar est plus qu'un simple bar : c'est une expérience.
            Depuis notre ouverture, nous offrons à notre clientèle un cadre élégant, une
            ambiance électrique et un service irréprochable, dignes des plus grandes
            adresses internationales.
          </p>
          <p>
            Notre équipe de mixologues concocte des cocktails signature avec des spiritueux
            premium, tandis que nos DJ résidents animent chaque soirée jusqu'au bout de la nuit.
            Que ce soit pour une soirée entre amis ou un événement privé, Prestige vous garantit
            un service à la hauteur de vos attentes.
          </p>
        </div>

        <div className='stats-grid'>
          <div className='stat-card'>
            <Award size={28} />
            <h3>5+</h3>
            <p>Années d'expérience</p>
          </div>
          <div className='stat-card'>
            <Wine size={28} />
            <h3>50+</h3>
            <p>Cocktails signature</p>
          </div>
          <div className='stat-card'>
            <Calendar size={28} />
            <h3>100+</h3>
            <p>Événements organisés</p>
          </div>
          <div className='stat-card'>
            <Users size={28} />
            <h3>200</h3>
            <p>Capacité d'accueil</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
