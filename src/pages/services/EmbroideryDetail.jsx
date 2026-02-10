import { Link } from 'react-router-dom';

export default function EmbroideryDetail() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Back Link */}
      <Link to="/services" className="text-primary hover:underline mb-6 inline-flex items-center gap-2">
        <span className="material-symbols-outlined">arrow_back</span>
        Back to Services
      </Link>

      {/* Header */}
      <div className="mb-12">
        <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mb-4"></div>
        <h1 className="text-4xl md:text-5xl font-black mb-4">EMBROIDERY TRAINING</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Empowering artisans with vocational skills and market access</p>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Our Embroidery Training Programme provides comprehensive vocational training to women and youth, focusing on traditional and modern embroidery techniques. 
          We combine skill development with microfinance assistance and market linkage to ensure sustainable income generation and economic empowerment.
        </p>
      </section>

      {/* Key Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Key Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span className="text-green-500">✓</span> Vocational Training
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Professional embroidery training covering traditional and contemporary techniques.</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span className="text-green-500">✓</span> Microfinance Assistance
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Access to small loans for purchasing materials and setting up businesses.</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span className="text-green-500">✓</span> Self-Employment Programs
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Support for starting independent embroidery businesses.</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span className="text-green-500">✓</span> Market Linkage Support
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Connecting artisans with buyers and market opportunities.</p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-black text-green-500 mb-2">1500+</div>
            <p className="text-gray-600 dark:text-gray-400">Artisans Trained</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-green-500 mb-2">₹50L+</div>
            <p className="text-gray-600 dark:text-gray-400">Income Generated</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-green-500 mb-2">80%</div>
            <p className="text-gray-600 dark:text-gray-400">Self-Employed</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Support Artisans and Create Jobs</h2>
        <p className="mb-6">Help us train and empower more artisans to achieve economic independence.</p>
        <Link to="/donate" className="inline-block bg-white text-green-500 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
          Donate Now
        </Link>
      </section>
    </div>
  );
}
