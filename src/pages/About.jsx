export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">About GIGI Cloud Academy</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            GIGI Cloud Academy was founded with a single mission: to bridge the cloud skills gap by providing
            accessible, high-quality training that prepares students for real-world cloud roles.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Our curriculum is developed and delivered by certified cloud architects and DevOps engineers
            who bring years of hands-on experience from leading tech companies.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            We combine live instruction, self-paced labs, mock exams, and career mentoring to ensure
            every student not only passes their certification but thrives in their cloud career.
          </p>
        </div>
        <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">☁️</div>
            <h3 className="text-2xl font-bold text-indigo-700">Since 2020</h3>
            <p className="text-gray-600">5+ years of cloud training excellence</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 text-center">
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
          <p className="text-gray-600">Empower professionals worldwide with the cloud skills needed to build the future of technology.</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 text-center">
          <div className="text-4xl mb-4">👁️</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
          <p className="text-gray-600">A world where quality cloud education is accessible to everyone, everywhere.</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 text-center">
          <div className="text-4xl mb-4">🤝</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Values</h3>
          <p className="text-gray-600">Excellence, inclusivity, practical learning, and continuous innovation.</p>
        </div>
      </div>
    </div>
  )
}
