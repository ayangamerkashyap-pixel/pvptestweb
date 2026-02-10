import { Link } from 'react-router-dom'
import styles from './HomePage.module.css'

export default function HomePage() {
  const news = [
    {
      id: 1,
      title: 'New Policy Implementation for Digital Infrastructure',
      category: 'Policy',
      date: 'Oct 24, 2024',
      description: 'The organization has announced a comprehensive framework designed to modernize our digital backbone through strategic community partnerships.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMdDudF3A9guMN-HxIXyappQUds2ItJit4k1_9br0X3m1EacygqIIw7IC01wCdA5n59Dj2b2J_8amNJ1Pn51nRNdfOWLhlgQXv1bynYJpok5k6SNaWDXAmIrOIjPyIHuUHNsyP-IMWgijfk3bZ4BX0I0MeqDO-QCUKdPYQpePWO4LIQ6FGXiCdLefd9qvH0vXs6Y6g9o4N-mo_PclL-2BCzYWrFP8UgVtu3SKGMoeudz9xVCInumLEDh26ZeKlE-_4E0FnusyjGeyr',
      categoryColor: 'bg-primary/10 text-primary',
    },
    {
      id: 2,
      title: 'Health Camp Initiative Reaches 500+ Beneficiaries',
      category: 'Report',
      date: 'Oct 20, 2024',
      description: 'Our latest health camp across rural communities has successfully provided medical check-ups and health services to over 500 individuals.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfNA-m6Oq02g6mxFUy1Wh28vjhQodfBGkwKWCvXMfj39828fCZHOSXjTBf8FPo8o6dJ_86Ux5l0CmymM0twBM5muFoyroC6fE5njh6BUjcRxZVphd86Ihr_YK_s4Wvqqysh7e1YCQulzt1WRuQ8K8tl3aKuPc4MYRlfoAmp18sr1xs7MFgNByPY5ErH4-xSSlaAn3IXjI6k3Z_5rMY5PKr9gp-BjDtEXdRCMG39T2ENmzTxS0KN3A5b1rLnaUZ9yYRO35Tud0uCaPe',
      categoryColor: 'bg-green-100 text-green-700',
    },
    {
      id: 3,
      title: 'Community Outreach: Skill Training Program Launch',
      category: 'Community',
      date: 'Oct 15, 2024',
      description: 'Launching a new skill training program to empower youth and create sustainable livelihood opportunities in rural areas.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDm5tPmm312anWIrwUeP9SgC_8AEudxffH66TWgd1et9x2GMj6adSZxZlFDYzpUCPnBkZGdYjV8MYCAA3rSPEiHBoVHtKHtbyxKtmkq1odyx86kH_QK4WctZ6z4O3OYll7Shj52yJK2a0nBlRXL4D25sqoxzVP6gGeohVdzN9XvnN0B4acc9TIdhX2DmBnIFDQxSa06EUdSsS1rNISYzt9sCLOFcqqjjZibDypRiGkkOHOqCPF-K0UQb3Cf3dyBwHO13oMSEwqgPz__',
      categoryColor: 'bg-orange-100 text-orange-700',
    },
  ]

  const galleryImages = [
    {
      title: 'International Summit 2024',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfLV0uvJxNkgXhqakte1oJancyLTxvIPdacAAWRL-W4aIDDuPXfux_KYOLPCjuZ9yQ_ukIdjlV6hzdhA9MHZj0A-GKhn9XTR-k1DkyV3HlCtd2JCpDQK0RLhSAQja22qGz3rsALdbgrFMBgKyv0pS5SvKO0DRM3yHKhgzLjtuVibPYIE8QR_87xG6yoxT198dFvdQWKujxc5Bhe3h2IAR3HAPySmvpUgl2JmkrJMJa2ar2yIW4_rp72cZSTJu8Wbv2PqB1NplTsnpd',
      colSpan: 1,
    },
    {
      title: 'Laboratory Inspections',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANoP0SlC_rktN8fdQ39d4T8-ZARTi11DVm92KR0YDBRWZmyM9DNfvib26OABxDE2HA8Z_w9KII9XxNkhUoD60zm4-NSfzYiFz0gA9VXf8L2hYrHd2rC1I6a1-Wxuhs3GRKaIWuqYpyX4V-6q33xeizyhaG0tCMErNziyAe0wYnDpAx5w2makR3qvP6RE9sZk9b81X-YJ21H9xr81_NYwyYNo2Jab-gQ2weJ-NlvmiwSjlKHz58Y8YQmRrG2o6SG6oA9_-M1lNndsqa',
      colSpan: 1,
    },
    {
      title: 'Departmental Workshop & Training',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1DZaLT-E8BXjRPhI75lIJFOXYdefQ8BhWtjPGj3NTTlnGo80VDU6s9mcI-9DLGr8JFNCUk8Ptf-pY8BSXw_Rudg33FrPgBygpGmx097feUthQ3PGBFxl0KvKIx5oQyHD_hyw8F0SrqaA5UJv4_fJ6cLrik2IdX5tZdeowNS5eiQYa1131gixvIuuShG_Z-mccpeHQgf_X6kRKQReoYBpUq311f2x8kYhTU9qmgMzkR-V0QrqgQ38EPgJAFv-pXFq-OGmXa1gVoRLC',
      colSpan: 2,
    },
    {
      title: 'Strategic Planning Session',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClCEitEWDVM1ADsqmBGiWi6YC4ahtDMIx1ty72IfC8ma29aPhilmvPCsPmF4NZcDLWqRoo_eW7AJ9m8SqWJRk-z2XaQ985N53KgqWKjoc-1vz029XkVoXLzwL7zSVfCJ7VhB6IdcZRFoXs4L55uSPkGw5Ulhk62goc6VGsDR6jdmZdGkA2LKbyPPeHO2YW78jViSXGskjvzyTxJl8SSkg8xrcT26Eq_a8-2tWAIIojuYwzouqWW68z6WIzOhtixWDNMhOY7nQghVK_',
      colSpan: 2,
    },
    {
      title: 'Annual Press Briefing',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTVq7mT_ILsLcM0ydCHRbzyHOmY4DOj-amsfUyveAhBDWXnWgQbqtu9V-VgHaS4ie91-fTRItjG7WXKrmgwDn2GfN_lEjYtnUkDhvXNR9zRMfdUxro4Yw0UziszGEsT1u0Rq0AlXqxTzIBaiRFfhWNViYNxSQljQ1CQeVTf_mrAlHDGf1VWacJxSNlgIbFznlsl6WxQbyoYGYFbPq3nZinOeOpAaVd62gjb0eXrNgEBevAJhFgszbPaIB-_KKpRJO8BfcMt9REvyzk',
      colSpan: 1,
    },
    {
      title: 'National Civic Conference',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5DJAgLXd7_i9NckwoSZCU0db-cSYNVNIbzx11FTMbD4Ak_HGDrLqGO4eyg7K_s7yCMcYISjPdxqHZw_FDzE8h9opnFV9GkUogIo4gIRc80njJHClcYg2HGsYT0IpgwhSW7jMM1UOeVRLarYf3CSia3owhnps9_mSAcy-ny_ymoE63H5lbS9LY5qCpfjwML0MrdxOFrJtZPX6Zl-qL5WL1ekSgbDpa39e_7HvloPIUPjvfV3AGJjIcHUwsy3FPFvH-0Pe2ZgehslRm',
      colSpan: 1,
    },
  ]

  return (
    <div className={styles.homePageContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div
            className={styles.heroImage}
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDKr45KWAVmEkkVCG9lym61boHpnpy8-0uOkqUuy8roVYGTpbUyNM2LlFX5O7SxAdnQtMfDyZBtgtPgAdidrDTZ_0CMF36JAzBTOqziYrGpTvFCKlPcFlwoBtNx3P3r__HkCVJwQbS7TM8SBK1CczBLez7goJEtnkqEty8MTBipIP9_SRDDsW2sl6gJzuVRma-V5RWSngdcHlqHBe5ABzxTbvlPnDB_kS1oBelHc1Gz5WzYUXw4zLtHnAwBcRUQ4JHnA1bg4eGIkcgj")',
            }}
          >
            <div className={styles.heroContent}>
              <h2 className={styles.heroTitle}>
                Welcome to Purbottar Vikash Parishad
              </h2>
              <p className={styles.heroDescription}>
                Purbottar Vikash Parishad is a reputed NGO in Assam serving needy, poor and backward communities of the region with health, education, and livelihood programs.
              </p>
              <div className={styles.heroCTA}>
                <Link
                  to="/services"
                  className={`${styles.heroButton} ${styles.heroButtonPrimary}`}
                >
                  Explore Services
                </Link>
                <Link
                  to="/reports"
                  className={`${styles.heroButton} ${styles.heroButtonSecondary}`}
                >
                  Latest Reports
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className={styles.newsSection}>
        <div className={styles.newsSectionHeader}>
          <div className={styles.newsSectionTitleRow}>
            <div>
              <h2 className={styles.newsSectionTitle}>News & Events</h2>
              <p className={styles.newsSectionDescription}>Stay informed with our latest updates and official announcements</p>
            </div>
            <Link className={styles.viewAllLink}>
              View all <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className={styles.titleUnderline}></div>
        </div>
        <div className={styles.newsGrid}>
          {news.map((item) => (
            <article
              key={item.id}
              className={styles.newsCard}
            >
              <div
                className={styles.newsCardImage}
                style={{ backgroundImage: `url("${item.image}")` }}
              />
              <div className={styles.newsCardContent}>
                <div className={styles.newsCardMeta}>
                  <span className={`${styles.newsCardCategory} ${item.categoryColor}`}>
                    {item.category}
                  </span>
                  <span className={styles.newsCardDate}>{item.date}</span>
                </div>
                <h3 className={styles.newsCardTitle}>{item.title}</h3>
                <p className={styles.newsCardDescription}>{item.description}</p>
                <a className={styles.newsCardLink}>
                  Read More <span className="material-symbols-outlined text-xs">east</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className={styles.gallerySection}>
        <h2 className={styles.gallerySectionTitle}>Photo Gallery</h2>
        <div className={styles.galleryGrid}>
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`${styles.galleryItem}`}
            >
              <img
                src={image.src}
                alt={image.title}
                className={styles.galleryImage}
              />
              <div className={styles.galleryItemTitle}>{image.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Stats Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-primary to-blue-700 rounded-3xl p-12 text-white overflow-hidden relative">
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-12 text-center">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
                <div className="text-5xl font-black mb-3">50+</div>
                <p className="text-white/90 font-semibold">Communities Served</p>
                <p className="text-white/70 text-xs mt-1">Across the region</p>
              </div>
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
                <div className="text-5xl font-black mb-3">10K+</div>
                <p className="text-white/90 font-semibold">Lives Impacted</p>
                <p className="text-white/70 text-xs mt-1">Direct beneficiaries</p>
              </div>
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
                <div className="text-5xl font-black mb-3">25+</div>
                <p className="text-white/90 font-semibold">Active Programs</p>
                <p className="text-white/70 text-xs mt-1">Ongoing initiatives</p>
              </div>
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
                <div className="text-5xl font-black mb-3">15+</div>
                <p className="text-white/90 font-semibold">Years Experience</p>
                <p className="text-white/70 text-xs mt-1">Since inception</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}