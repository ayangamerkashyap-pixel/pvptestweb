import { Link } from 'react-router-dom';
import styles from '../../pages/Services.module.css';

export default function EmbroideryTrainingService() {
  const service = {
    icon: 'business_center',
    title: 'EMBROIDERY TRAINING',
    description: 'Vocational training, microfinance assistance, self-employment programs, and market linkage support for sustainable income.',
    color: 'from-green-500 to-emerald-500',
  };

  return (
    <div className={styles.serviceCard}>
      {/* Color Bar */}
      <div style={{ background: `linear-gradient(to right, rgb(34, 197, 94), rgb(16, 185, 129))` }} className={styles.serviceColorBar}></div>
      
      {/* Content */}
      <div className={styles.serviceContent}>
        {/* Icon */}
        <div className={styles.serviceIcon} style={{ background: `linear-gradient(135deg, rgb(34, 197, 94), rgb(16, 185, 129))` }}>
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
        <Link to="/services/embroidery" className={styles.serviceLink}>
          Learn More
          <span className="material-symbols-outlined text-lg">
            arrow_forward
          </span>
        </Link>
      </div>
    </div>
  );
}
