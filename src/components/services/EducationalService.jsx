import { Link } from 'react-router-dom';
import styles from '../../pages/Services.module.css';

export default function EducationalService() {
  const service = {
    icon: 'school',
    title: 'EDUCATIONAL PROGRAMME',
    description: 'Scholarship programs, skill training workshops, digital literacy initiatives, and educational support for underprivileged children.',
    color: 'from-blue-500 to-cyan-500',
  };

  return (
    <div className={styles.serviceCard}>
      {/* Color Bar */}
      <div style={{ background: `linear-gradient(to right, rgb(59, 130, 246), rgb(34, 211, 238))` }} className={styles.serviceColorBar}></div>
      
      {/* Content */}
      <div className={styles.serviceContent}>
        {/* Icon */}
        <div className={styles.serviceIcon} style={{ background: `linear-gradient(135deg, rgb(59, 130, 246), rgb(34, 211, 238))` }}>
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
        <Link to="/services/educational" className={styles.serviceLink}>
          Learn More
          <span className="material-symbols-outlined text-lg">
            arrow_forward
          </span>
        </Link>
      </div>
    </div>
  );
}
