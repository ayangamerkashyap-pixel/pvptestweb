import { Link } from 'react-router-dom';

export default function EducationalDetail() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Back Link */}
      <Link to="/services" className="text-primary hover:underline mb-6 inline-flex items-center gap-2">
        <span className="material-symbols-outlined">arrow_back</span>
        Back to Services
      </Link>

      {/* Header */}
      <div className="mb-12">
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mb-4"></div>
        <h1 className="text-4xl md:text-5xl font-black mb-4">EDUCATIONAL PROGRAMME</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Empowering underprivileged children through quality education</p>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Our Educational Programme aims to break the cycle of poverty by providing quality education and skill training to underprivileged children. 
          We believe education is the key to empowerment and work to ensure every child has access to learning opportunities regardless of their economic background.
        </p>
      </section>

      {/* Key Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Key Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span className="text-blue-500">✓</span> Scholarship Programs
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Financial aid for meritorious and needy students to continue their education.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span className="text-blue-500">✓</span> Skill Training Workshops
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Vocational training to build practical skills for employment.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span className="text-blue-500">✓</span> Digital Literacy Initiatives
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Computer and internet training to connect students with digital opportunities.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span className="text-blue-500">✓</span> Educational Support
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Tutoring and mentoring to improve academic performance.</p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-black text-blue-500 mb-2">3000+</div>
            <p className="text-gray-600 dark:text-gray-400">Students Supported</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-blue-500 mb-2">500+</div>
            <p className="text-gray-600 dark:text-gray-400">Scholarships Awarded</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-blue-500 mb-2">95%</div>
            <p className="text-gray-600 dark:text-gray-400">Success Rate</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Help Educate a Child Today</h2>
        <p className="mb-6">Your support can provide quality education to a child in need.</p>
        <Link to="/donate" className="inline-block bg-white text-blue-500 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
          Donate Now
        </Link>
      </section>
    </div>
  );
}
