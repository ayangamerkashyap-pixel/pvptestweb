import { Link } from 'react-router-dom';
import styles from '../../pages/Services.module.css';

export default function HealthCampService() {
  const service = {
    icon: 'group',
    title: 'HEALTH CAMP PROGRAM',
    description: 'Women empowerment programs, child protection initiatives, nutrition support, and maternal health awareness campaigns.',
    color: 'from-indigo-500 to-purple-500',
  };

  return (
    <div className={styles.serviceCard}>
      {/* Color Bar */}
      <div style={{ background: `linear-gradient(to right, rgb(79, 70, 229), rgb(147, 51, 234))` }} className={styles.serviceColorBar}></div>
      
      {/* Content */}
      <div className={styles.serviceContent}>
        {/* Icon */}
        <div className={styles.serviceIcon} style={{ background: `linear-gradient(135deg, rgb(79, 70, 229), rgb(147, 51, 234))` }}>
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
        <Link to="/services/health-camp" className={styles.serviceLink}>
          Learn More
          <span className="material-symbols-outlined text-lg">
            arrow_forward
          </span>
        </Link>
      </div>
    </div>
  );
}
