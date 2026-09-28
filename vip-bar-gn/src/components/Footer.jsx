import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import { InstagramIcon, FacebookIcon } from './SocialIcons'

function Footer() {
  return (
    <footer className='site-footer'>
      <div className='footer-container'>
        <div className='footer-brand'>
          <h2>PRESTIGE</h2>
          <p>L'expérience VIP ultime à Conakry.</p>
          <div className='footer-socials'>
            <a href='#' aria-label='Instagram'><InstagramIcon size={18} /></a>
            <a href='#' aria-label='Facebook'><FacebookIcon size={18} /></a>
            <a href='#' aria-label='WhatsApp'><MessageCircle size={18} /></a>
          </div>
        </div>

        <div className='footer-links'>
          <h3>Navigation</h3>
          <Link to='/'>Accueil</Link>
          <Link to='/galerie'>Galerie</Link>
          <Link to='/about'>À Propos</Link>
          <Link to='/contact'>Contact</Link>
        </div>

        <div className='footer-contact'>
          <h3>Contact</h3>
          <p>+224 XXX XXX XXX</p>
          <p>contact@prestige.gn</p>
          <p>Conakry, Guinée</p>
          <Link to='/reservation' className='footer-cta'>Réserver une Table</Link>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>© 2026 Prestige VIP Bar. Tous droits réservés.</p>
      </div>
    </footer>
  )
}

export default Footer
