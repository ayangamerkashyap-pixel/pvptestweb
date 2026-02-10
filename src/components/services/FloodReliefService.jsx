import { Link } from 'react-router-dom';
import styles from '../../pages/Services.module.css';

export default function FloodReliefService() {
  const service = {
    icon: 'home',
    title: 'FLOOD RELIEF PROGRAM',
    description: 'Support for construction of houses, sanitation facilities, water supply systems, and community infrastructure development.',
    color: 'from-purple-500 to-pink-500',
  };

  return (
    <div className={styles.serviceCard}>
      {/* Color Bar */}
      <div style={{ background: `linear-gradient(to right, rgb(147, 51, 234), rgb(236, 72, 153))` }} className={styles.serviceColorBar}></div>
      
      {/* Content */}
      <div className={styles.serviceContent}>
        {/* Icon */}
        <div className={styles.serviceIcon} style={{ background: `linear-gradient(135deg, rgb(147, 51, 234), rgb(236, 72, 153))` }}>
          <span className="material-symbols-outlined">
            {service.icon}
          </span>
        </div>
        
        {/* Title & Description */}
        <h3 className={styles.serviceTitle}>
          {service.title}
        </h3>
        <p className={styles.serviceDescription}>
          {service.description}
        </p>
        
        {/* Link */}
        <Link to="/services/flood-relief" className={styles.serviceLink}>
          Learn More
          <span className="material-symbols-outlined text-lg">
            arrow_forward
          </span>
        </Link>
      </div>
    </div>
  );
}
