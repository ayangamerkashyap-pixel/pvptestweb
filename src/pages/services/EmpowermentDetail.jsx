import { Link } from 'react-router-dom';

export default function EmpowermentDetail() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Back Link */}
      <Link to="/services" className="text-primary hover:underline mb-6 inline-flex items-center gap-2">
        <span className="material-symbols-outlined">arrow_back</span>
        Back to Services
      </Link>

      {/* Header */}
      <div className="mb-12">
        <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mb-4"></div>
        <h1 className="text-4xl md:text-5xl font-black mb-4">EMPOWER DEVELOPMENT PROGRAM</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Comprehensive community empowerment and sustainable development</p>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Our Empower Development Program is a holistic initiative combining women empowerment, child protection, nutrition, and health awareness. 
          It addresses multiple aspects of community development to create lasting positive impact in rural and disadvantaged areas.
        </p>
      </section>

      {/* Key Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Key Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span className="text-indigo-500">✓</span> Women Empowerment
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Skills training, financial literacy, and leadership development for women.</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span className="text-indigo-500">✓</span> Child Protection
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Safety programs, education, and welfare support for children.</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span className="text-indigo-500">✓</span> Nutrition Support
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Nutritional programs and awareness for healthy communities.</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span className="text-indigo-500">✓</span> Health Awareness
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Campaigns on preventive health and wellness.</p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-black text-indigo-500 mb-2">15000+</div>
            <p className="text-gray-600 dark:text-gray-400">People Empowered</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-indigo-500 mb-2">50+</div>
            <p className="text-gray-600 dark:text-gray-400">Communities Served</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-indigo-500 mb-2">10+</div>
            <p className="text-gray-600 dark:text-gray-400">Years Active</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
        <p className="mb-6">Support comprehensive community development and sustainable empowerment.</p>
        <Link to="/donate" className="inline-block bg-white text-indigo-500 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
          Donate Now
        </Link>
      </section>
    </div>
  );
}
