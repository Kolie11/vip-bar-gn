import { useCallback, useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

function Galerie() {
  const images = [
    'https://images.unsplash.com/photo-1514306688772-0745ae4a4836?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1504674900968-8873db88de97?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1505252585461-04db1267ae5b?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1487667435693-6ca0a9613ae0?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=500&h=500&fit=crop',
  ]

  const [activeIndex, setActiveIndex] = useState(null)
  const isOpen = activeIndex !== null

  const closeLightbox = () => setActiveIndex(null)
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  )
  const showNext = useCallback(
    () => setActiveIndex((i) => (i + 1) % images.length),
    [images.length]
  )

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, showPrev, showNext])

  return (
    <div className='galerie-page'>
      <div className='galerie-container'>
        <h1 className='galerie-title'>GALERIE</h1>

        <div className='galerie-grid'>
          {images.map((img, idx) => (
            <div key={idx} className='gallery-item' onClick={() => setActiveIndex(idx)}>
              <img src={img} alt={`Photo ${idx + 1}`} loading='lazy' />
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className='lightbox-overlay' onClick={closeLightbox}>
          <button className='lightbox-close' onClick={closeLightbox} aria-label='Fermer'>
            <X size={28} />
          </button>

          <button
            className='lightbox-nav lightbox-prev'
            onClick={(e) => { e.stopPropagation(); showPrev() }}
            aria-label='Photo précédente'
          >
            <ChevronLeft size={32} />
          </button>

          <img
            src={images[activeIndex]}
            alt={`Photo ${activeIndex + 1}`}
            className='lightbox-image'
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className='lightbox-nav lightbox-next'
            onClick={(e) => { e.stopPropagation(); showNext() }}
            aria-label='Photo suivante'
          >
            <ChevronRight size={32} />
          </button>

          <p className='lightbox-counter'>{activeIndex + 1} / {images.length}</p>
        </div>
      )}
    </div>
  )
}

export default Galerie
