import { Link } from 'react-router-dom';
import styles from '../../pages/Services.module.css';

export default function AwarenessService() {
  const service = {
    icon: 'agriculture',
    title: 'AWARENESS MEETINGS',
    description: 'Organic farming training, modern agricultural techniques, soil testing, and assistance with quality seeds and tools.',
    color: 'from-amber-500 to-orange-500',
  };

  return (
    <div className={styles.serviceCard}>
      {/* Color Bar */}
      <div style={{ background: `linear-gradient(to right, rgb(217, 119, 6), rgb(234, 88, 12))` }} className={styles.serviceColorBar}></div>
      
      {/* Content */}
      <div className={styles.serviceContent}>
        {/* Icon */}
        <div className={styles.serviceIcon} style={{ background: `linear-gradient(135deg, rgb(217, 119, 6), rgb(234, 88, 12))` }}>
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
        <Link to="/services/awareness" className={styles.serviceLink}>
          Learn More
          <span className="material-symbols-outlined text-lg">
            arrow_forward
          </span>
        </Link>
      </div>
    </div>
  );
}
