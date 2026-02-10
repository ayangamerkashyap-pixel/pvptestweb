import { Link } from 'react-router-dom';

export default function HealthCampDetail() {
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
        <h1 className="text-4xl md:text-5xl font-black mb-4">HEALTH CAMP PROGRAM</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Women empowerment and community health initiatives</p>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Our Health Camp Program is a comprehensive initiative focused on women health, child protection, and community nutrition. 
          We organize free health camps, provide maternal health awareness, and work on child protection initiatives to ensure healthy communities.
        </p>
      </section>

      {/* Key Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Key Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span className="text-indigo-500">✓</span> Women Empowerment Programs
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Initiatives to improve women's health, literacy, and social status.</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span className="text-indigo-500">✓</span> Child Protection Initiatives
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Programs ensuring safety and well-being of children.</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span className="text-indigo-500">✓</span> Nutrition Support
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Nutritional counseling and food support for vulnerable groups.</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span className="text-indigo-500">✓</span> Maternal Health Awareness
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Education on prenatal, natal, and postnatal care.</p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-black text-indigo-500 mb-2">100+</div>
            <p className="text-gray-600 dark:text-gray-400">Health Camps</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-indigo-500 mb-2">10000+</div>
            <p className="text-gray-600 dark:text-gray-400">Women Benefited</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-indigo-500 mb-2">5000+</div>
            <p className="text-gray-600 dark:text-gray-400">Children Supported</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Support Women and Child Health</h2>
        <p className="mb-6">Help us expand health camps and support programs in more communities.</p>
        <Link to="/donate" className="inline-block bg-white text-indigo-500 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
          Donate Now
        </Link>
      </section>
    </div>
  );
}
