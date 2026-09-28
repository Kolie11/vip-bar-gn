import { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className='page-section'>
      <div className='page-container'>
        <h1 className='page-title'>CONTACT</h1>
        <p className='page-subtitle'>Une question ? Contactez-nous</p>

        <div className='contact-grid'>
          <div className='contact-info'>
            <div className='contact-item'>
              <MapPin size={22} />
              <div>
                <h3>Adresse</h3>
                <p>Kaloum, Conakry, Guinée</p>
              </div>
            </div>
            <div className='contact-item'>
              <Phone size={22} />
              <div>
                <h3>Téléphone</h3>
                <p>+224 XXX XXX XXX</p>
              </div>
            </div>
            <div className='contact-item'>
              <Mail size={22} />
              <div>
                <h3>Email</h3>
                <p>contact@prestige.gn</p>
              </div>
            </div>
            <div className='contact-item'>
              <Clock size={22} />
              <div>
                <h3>Horaires</h3>
                <p>Jeudi - Dimanche : 20h00 - 04h00</p>
              </div>
            </div>
          </div>

          <form className='contact-form' onSubmit={handleSubmit}>
            <input
              type='text'
              name='name'
              placeholder='Votre nom'
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Votre email'
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name='message'
              placeholder='Votre message'
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type='submit' className='btn-primary'>Envoyer</button>
            {sent && (
              <p className='form-success'>
                Message envoyé ! Nous vous répondrons rapidement.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
