import { useState } from 'react'
import styles from './Gallery.module.css'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    {
      id: 1,
      title: 'Health Camp Initiative',
      src: 'https://images.unsplash.com/photo-1576091160550-112667149b5b?w=500&h=400&fit=crop',
      colSpan: 1,
    },
    {
      id: 2,
      title: 'Education Program',
      src: 'https://images.unsplash.com/photo-1427504494785-cdec707157f0?w=500&h=400&fit=crop',
      colSpan: 1,
    },
    {
      id: 3,
      title: 'Community Gathering',
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      colSpan: 2,
    },
    {
      id: 4,
      title: 'Skill Training Session',
      src: 'https://images.unsplash.com/photo-1516321318423-f06f70d2f4e5?w=600&h=400&fit=crop',
      colSpan: 2,
    },
    {
      id: 5,
      title: 'Agricultural Support',
      src: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&h=400&fit=crop',
      colSpan: 1,
    },
    {
      id: 6,
      title: 'Women Empowerment',
      src: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=500&h=400&fit=crop',
      colSpan: 1,
    },
  ]

  return (
    <div className={styles.galleryContainer}>
      {/* Header */}
      <section className={styles.headerSection}>
        <div className={styles.headerSection}>
          <h1 className={styles.headerTitle}>Photo Gallery</h1>
          <div className={styles.headerUnderline}></div>
          <p className={styles.headerDescription}>
            Glimpses of our community development programs and initiatives
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className={styles.gallerySection}>
        <div className={styles.galleryGrid}>
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={styles.galleryItem}
              onClick={() => setSelectedImage(image)}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.title}
                className={styles.galleryImage}
              />

              {/* Overlay */}
              <div className={styles.galleryItemOverlay}>
                <div>
                  <p className={styles.galleryItemTitle}>{image.title}</p>
                  <p className={styles.galleryItemCaption}>
                    <span className="material-symbols-outlined text-sm">zoom_in</span>
                    Click to view
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className={styles.closeButton}
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className={styles.modalImage}
            />

            {/* Title */}
            <div className={styles.modalInfo}>
              <h2>{selectedImage.title}</h2>
              <p style={{fontSize: '0.875rem', opacity: 0.7, marginTop: '0.5rem'}}>
                <span className="material-symbols-outlined" style={{fontSize: '0.875rem'}}>image</span>
                Click outside to close
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}