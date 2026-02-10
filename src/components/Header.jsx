import { useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const [isDark, setIsDark] = useState(false)

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`${styles.headerContainer} ${isDark ? styles.dark : ''}`}>
      <div className={styles.headerContent}>
        <div className={styles.headerTop}>
          <div className={styles.logoSection}>
            <img src="/Images/Logo.jpg" alt="Purbottar Vikash Parishad Logo" className={styles.logo} />
            <h1 className={`${styles.logoText} ${isDark ? styles.dark : ''}`}>Purbottar Vikash Parishad</h1>
          </div>
          <button
            onClick={toggleDarkMode}
            className={`${styles.darkModeButton} ${isDark ? styles.dark : ''}`}
            aria-label="Toggle dark mode"
          >
            <span className="material-symbols-outlined">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}