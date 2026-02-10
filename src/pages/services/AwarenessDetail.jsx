import { Link } from 'react-router-dom';

export default function AwarenessDetail() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Back Link */}
      <Link to="/services" className="text-primary hover:underline mb-6 inline-flex items-center gap-2">
        <span className="material-symbols-outlined">arrow_back</span>
        Back to Services
      </Link>

      {/* Header */}
      <div className="mb-12">
        <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mb-4"></div>
        <h1 className="text-4xl md:text-5xl font-black mb-4">AWARENESS MEETINGS</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Promoting sustainable agricultural practices and rural development</p>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Our Awareness Meetings programme focuses on educating farming communities about modern agricultural techniques, organic farming practices, and sustainable development. 
          We work to increase agricultural productivity while promoting environmental sustainability and farmer welfare.
        </p>
      </section>

      {/* Key Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Key Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-lg border border-amber-200 dark:border-amber-800">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span className="text-amber-500">✓</span> Organic Farming Training
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Education on organic and sustainable farming methods.</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-lg border border-amber-200 dark:border-amber-800">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span className="text-amber-500">✓</span> Modern Agricultural Techniques
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Training on advanced farming methods and technology.</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-lg border border-amber-200 dark:border-amber-800">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span className="text-amber-500">✓</span> Soil Testing Services
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Free soil analysis to recommend appropriate farming practices.</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-lg border border-amber-200 dark:border-amber-800">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span className="text-amber-500">✓</span> Quality Seeds & Tools
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Assistance with quality seeds, fertilizers, and farming tools.</p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-black text-amber-500 mb-2">2000+</div>
            <p className="text-gray-600 dark:text-gray-400">Farmers Trained</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-amber-500 mb-2">200+</div>
            <p className="text-gray-600 dark:text-gray-400">Meetings Conducted</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-amber-500 mb-2">40%</div>
            <p className="text-gray-600 dark:text-gray-400">Yield Increase</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Support Farming Communities</h2>
        <p className="mb-6">Help us spread knowledge and support sustainable agriculture.</p>
        <Link to="/donate" className="inline-block bg-white text-amber-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
          Donate Now
        </Link>
      </section>
    </div>
  );
}
