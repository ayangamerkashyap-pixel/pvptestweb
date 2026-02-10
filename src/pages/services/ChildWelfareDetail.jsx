import { Link } from 'react-router-dom';

export default function ChildWelfareDetail() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Back Link */}
      <Link to="/services" className="text-primary hover:underline mb-6 inline-flex items-center gap-2">
        <span className="material-symbols-outlined">arrow_back</span>
        Back to Services
      </Link>

      {/* Header */}
      <div className="mb-12">
        <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-pink-500 mb-4"></div>
        <h1 className="text-4xl md:text-5xl font-black mb-4">CHILD WELFARE PROGRAMME</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Comprehensive health and safety initiatives for vulnerable children</p>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Our Child Welfare Programme is dedicated to ensuring the health, safety, and well-being of children in vulnerable communities. 
          Through a combination of regular health camps, medical check-ups, and awareness programs, we work to provide comprehensive care 
          and support to the most marginalized children in our service areas.
        </p>
      </section>

      {/* Key Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Key Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span className="text-red-500">✓</span> Regular Health Camps
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Free medical check-ups and health screening camps organized in villages and communities.</p>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span className="text-red-500">✓</span> Medical Check-ups
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Comprehensive health assessments to identify and address health issues early.</p>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span className="text-red-500">✓</span> Awareness Programs
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Educational sessions on hygiene, nutrition, and preventive health practices.</p>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span className="text-red-500">✓</span> Health Insurance Assistance
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Support in obtaining health insurance and coverage for critical treatments.</p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-black text-red-500 mb-2">5000+</div>
            <p className="text-gray-600 dark:text-gray-400">Children Benefited</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-red-500 mb-2">50+</div>
            <p className="text-gray-600 dark:text-gray-400">Health Camps Organized</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-red-500 mb-2">100%</div>
            <p className="text-gray-600 dark:text-gray-400">Free Services</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Want to Support This Program?</h2>
        <p className="mb-6">Your contribution can help us expand our child welfare initiatives to more communities.</p>
        <Link to="/donate" className="inline-block bg-white text-red-500 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
          Donate Now
        </Link>
      </section>
    </div>
  );
}
