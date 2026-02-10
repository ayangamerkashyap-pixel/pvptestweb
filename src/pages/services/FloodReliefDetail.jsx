import { Link } from 'react-router-dom';

export default function FloodReliefDetail() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Back Link */}
      <Link to="/services" className="text-primary hover:underline mb-6 inline-flex items-center gap-2">
        <span className="material-symbols-outlined">arrow_back</span>
        Back to Services
      </Link>

      {/* Header */}
      <div className="mb-12">
        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mb-4"></div>
        <h1 className="text-4xl md:text-5xl font-black mb-4">FLOOD RELIEF PROGRAM</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Disaster relief and community infrastructure development</p>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Our Flood Relief Program provides emergency assistance and long-term support to communities affected by natural disasters. 
          We work on reconstruction, infrastructure development, and creating resilience against future calamities through improved sanitation and water supply systems.
        </p>
      </section>

      {/* Key Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Key Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span className="text-purple-500">✓</span> House Construction
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Support for building safe and durable homes for displaced families.</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span className="text-purple-500">✓</span> Sanitation Facilities
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Development of hygienic sanitation infrastructure.</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span className="text-purple-500">✓</span> Water Supply Systems
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Installation of clean water systems for affected communities.</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span className="text-purple-500">✓</span> Community Infrastructure
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Building resilient infrastructure for disaster preparedness.</p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-black text-purple-500 mb-2">500+</div>
            <p className="text-gray-600 dark:text-gray-400">Houses Built</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-purple-500 mb-2">30</div>
            <p className="text-gray-600 dark:text-gray-400">Villages Supported</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-purple-500 mb-2">50000+</div>
            <p className="text-gray-600 dark:text-gray-400">People Benefited</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Help Rebuild Communities</h2>
        <p className="mb-6">Support disaster relief and infrastructure development efforts.</p>
        <Link to="/donate" className="inline-block bg-white text-purple-500 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
          Donate Now
        </Link>
      </section>
    </div>
  );
}
