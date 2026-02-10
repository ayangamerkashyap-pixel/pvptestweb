import { Link } from 'react-router-dom'
import styles from './Services.module.css'

export default function Services() {
  const services = [
    {
      icon: 'favorite',
      title: 'Health & Wellness',
      description: 'Regular health camps, medical check-ups, awareness programs, and health insurance assistance for vulnerable communities.',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: 'school',
      title: 'Education Programs',
      description: 'Scholarship programs, skill training workshops, digital literacy initiatives, and educational support for underprivileged children.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: 'business_center',
      title: 'Livelihood Support',
      description: 'Vocational training, microfinance assistance, self-employment programs, and market linkage support for sustainable income.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: 'agriculture',
      title: 'Agricultural Support',
      description: 'Organic farming training, modern agricultural techniques, soil testing, and assistance with quality seeds and tools.',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: 'home',
      title: 'Housing & Infrastructure',
      description: 'Support for construction of houses, sanitation facilities, water supply systems, and community infrastructure development.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: 'group',
      title: 'Women & Child Welfare',
      description: 'Women empowerment programs, child protection initiatives, nutrition support, and maternal health awareness campaigns.',
      color: 'from-indigo-500 to-purple-500',
    },
  ]

  return (
    <div className={styles.servicesContainer}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <div className={styles.headerSection}>
          <h1 className={styles.headerTitle}>Our Services</h1>
          <div className={styles.headerUnderline}></div>
          <p className={styles.headerDescription}>
            Purbottar Vikash Parishad provides comprehensive services focused on health, education, livelihood, and community development. Our programs are designed to bring sustainable change in the lives of vulnerable communities.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={index}
              className={styles.serviceCard}
            >
              {/* Color Bar */}
              <div style={{ background: `linear-gradient(to right, ${service.color})` }} className={styles.serviceColorBar}></div>
              
              {/* Content */}
              <div className={styles.serviceContent}>
                {/* Icon */}
                <div className={styles.serviceIcon} style={{ background: `linear-gradient(135deg, ${service.color})` }}>
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
                <a className={styles.serviceLink}>
                  Learn More
                  <span className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaBackground}></div>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Need Our Help?</h2>
            <p className="text-white/90 mb-8 leading-relaxed">
              If you or your community needs support with any of our services, we are here to help. Get in touch with us to learn more about how we can assist you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all hover:shadow-xl"
            >
              <span className="material-symbols-outlined">mail</span>
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black mb-4">Service Highlights</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-100 dark:border-slate-800 text-center hover:shadow-lg transition-all">
            <div className="text-4xl font-black text-primary mb-2">50+</div>
            <p className="text-gray-600 dark:text-gray-400 font-semibold">Communities Reached</p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Active programs</p>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-100 dark:border-slate-800 text-center hover:shadow-lg transition-all">
            <div className="text-4xl font-black text-primary mb-2">10K+</div>
            <p className="text-gray-600 dark:text-gray-400 font-semibold">Direct Beneficiaries</p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Individuals served</p>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-100 dark:border-slate-800 text-center hover:shadow-lg transition-all">
            <div className="text-4xl font-black text-primary mb-2">25+</div>
            <p className="text-gray-600 dark:text-gray-400 font-semibold">Programs Active</p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Ongoing initiatives</p>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-100 dark:border-slate-800 text-center hover:shadow-lg transition-all">
            <div className="text-4xl font-black text-primary mb-2">15+</div>
            <p className="text-gray-600 dark:text-gray-400 font-semibold">Years Experience</p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Since inception</p>
          </div>
        </div>
      </section>
    </div>
  )
}