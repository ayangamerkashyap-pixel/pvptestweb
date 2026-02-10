import { Outlet } from 'react-router-dom'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import styles from './Layout.module.css'

export default function Layout() {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.layoutHeader}>
        <Header />
      </div>
      <div className={styles.layoutNavbar}>
        <Navbar />
      </div>
      <main className={styles.layoutMain}>
        <div className={styles.mainContent}>
          <Outlet />
        </div>
      </main>
      <div className={styles.layoutFooter}>
        <Footer />
      </div>
    </div>
  )
}