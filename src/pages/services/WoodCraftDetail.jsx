import { Link } from 'react-router-dom';

export default function WoodCraftDetail() {
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
        <h1 className="text-4xl md:text-5xl font-black mb-4">WOOD CRAFT WORK</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Traditional craftsmanship and sustainable micro-enterprise development</p>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Our Wood Craft Work programme preserves traditional craftsmanship while creating livelihood opportunities. 
          We train artisans in wood craft skills, provide materials and tools, and facilitate market connections to ensure sustainable income generation.
        </p>
      </section>

      {/* Key Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Key Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span className="text-indigo-500">✓</span> Skill Training
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Traditional and contemporary wood craft training.</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span className="text-indigo-500">✓</span> Materials & Tools
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Provision of quality materials and equipment.</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span className="text-indigo-500">✓</span> Market Access
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Connecting with buyers and sales platforms.</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span className="text-indigo-500">✓</span> Business Support
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Guidance on running successful craft enterprises.</p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-black text-indigo-500 mb-2">800+</div>
            <p className="text-gray-600 dark:text-gray-400">Artisans Trained</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-indigo-500 mb-2">₹30L+</div>
            <p className="text-gray-600 dark:text-gray-400">Sales Generated</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-indigo-500 mb-2">90%</div>
            <p className="text-gray-600 dark:text-gray-400">Success Rate</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Support Traditional Crafts</h2>
        <p className="mb-6">Help us preserve traditional craftsmanship and create livelihoods.</p>
        <Link to="/donate" className="inline-block bg-white text-indigo-500 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
          Donate Now
        </Link>
      </section>
    </div>
  );
}
