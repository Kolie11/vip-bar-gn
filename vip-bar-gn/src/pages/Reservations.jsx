import { useState } from 'react'

function Reservations() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: 2,
    occasion: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className='page-section'>
        <div className='page-container reservation-success'>
          <h1 className='page-title'>MERCI !</h1>
          <p className='page-subtitle'>
            Votre demande de réservation pour {form.guests} personne(s) le {form.date} à{' '}
            {form.time} a bien été reçue. Notre équipe vous contactera pour la confirmer.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className='page-section'>
      <div className='page-container'>
        <h1 className='page-title'>RÉSERVATIONS</h1>
        <p className='page-subtitle'>Réservez votre table VIP</p>

        <form className='reservation-form' onSubmit={handleSubmit}>
          <div className='form-row'>
            <input
              type='text'
              name='name'
              placeholder='Nom complet'
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type='tel'
              name='phone'
              placeholder='Téléphone'
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type='email'
            name='email'
            placeholder='Email'
            value={form.email}
            onChange={handleChange}
            required
          />

          <div className='form-row'>
            <input
              type='date'
              name='date'
              value={form.date}
              onChange={handleChange}
              required
            />
            <input
              type='time'
              name='time'
              value={form.time}
              onChange={handleChange}
              required
            />
            <input
              type='number'
              name='guests'
              min={1}
              max={20}
              placeholder='Personnes'
              value={form.guests}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name='occasion'
            placeholder="Occasion spéciale / demande particulière (facultatif)"
            rows={4}
            value={form.occasion}
            onChange={handleChange}
          />

          <button type='submit' className='btn-primary reservation-submit'>
            Confirmer la Réservation
          </button>
        </form>
      </div>
    </div>
  )
}

export default Reservations
