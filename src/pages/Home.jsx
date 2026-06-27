import { Link } from 'react-router-dom'

const courses = [
  { title: 'AWS Cloud Practitioner', desc: 'Foundational cloud concepts, services, and terminology on AWS.', level: 'Beginner' },
  { title: 'Azure Administrator', desc: 'Manage Azure subscriptions, secure identities, and configure storage.', level: 'Intermediate' },
  { title: 'Google Cloud Engineer', desc: 'Deploy applications, monitor operations, and manage GCP solutions.', level: 'Intermediate' },
  { title: 'DevOps with Docker & Kubernetes', desc: 'Containerization, orchestration, CI/CD pipelines, and monitoring.', level: 'Advanced' },
]

const stats = [
  { label: 'Students Trained', value: '5,000+' },
  { label: 'Certification Rate', value: '94%' },
  { label: 'Expert Instructors', value: '40+' },
  { label: 'Hands-on Labs', value: '200+' },
]

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Master Cloud Technology at GIGI Cloud Academy</h1>
          <p className="text-xl md:text-2xl text-indigo-200 mb-10 max-w-3xl mx-auto">Industry-led training, hands-on labs, and certification prep to launch or advance your cloud career.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/courses" className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold text-lg hover:bg-indigo-100 transition">Explore Courses</Link>
            <Link to="/register" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-indigo-700 transition">Get Started Free</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-indigo-700">{s.value}</div>
                <div className="text-gray-600 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Popular Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((c) => (
              <div key={c.title} className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 border border-gray-100 flex flex-col">
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full self-start mb-3">{c.level}</span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-gray-600 text-sm flex-1">{c.desc}</p>
                <Link to="/courses" className="mt-4 text-indigo-700 font-medium text-sm hover:text-indigo-500 transition">Learn more &rarr;</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Career?</h2>
          <p className="text-indigo-200 text-lg mb-8">Join thousands of successful graduates working at top tech companies.</p>
          <Link to="/register" className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold text-lg hover:bg-indigo-100 transition inline-block">Enroll Now</Link>
        </div>
      </section>
    </>
  )
}
