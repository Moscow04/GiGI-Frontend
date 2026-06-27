const allCourses = [
  { title: 'AWS Cloud Practitioner', category: 'AWS', level: 'Beginner', duration: '4 Weeks', desc: 'Master foundational cloud concepts, AWS services, pricing, and compliance models.' },
  { title: 'AWS Solutions Architect', category: 'AWS', level: 'Advanced', duration: '8 Weeks', desc: 'Design distributed systems, high-availability architectures, and migration strategies.' },
  { title: 'Azure Administrator', category: 'Azure', level: 'Intermediate', duration: '6 Weeks', desc: 'Manage Azure identities, storage, virtual networking, and monitor resources.' },
  { title: 'Azure DevOps Engineer', category: 'Azure', level: 'Advanced', duration: '8 Weeks', desc: 'Implement CI/CD, infrastructure as code, and Azure Pipelines.' },
  { title: 'Google Cloud Engineer', category: 'GCP', level: 'Intermediate', duration: '6 Weeks', desc: 'Deploy applications, configure networking, and manage GCP resources.' },
  { title: 'Docker & Kubernetes', category: 'DevOps', level: 'Advanced', duration: '6 Weeks', desc: 'Containerize apps, orchestrate with K8s, and build CI/CD pipelines.' },
  { title: 'Terraform & IaC', category: 'DevOps', level: 'Intermediate', duration: '4 Weeks', desc: 'Write infrastructure as code, manage state, and automate provisioning.' },
  { title: 'Cloud Security', category: 'Security', level: 'Advanced', duration: '6 Weeks', desc: 'Identity management, encryption, compliance, and threat detection in the cloud.' },
]

export default function Courses() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Courses</h1>
      <p className="text-gray-600 text-lg mb-10 max-w-2xl">Comprehensive cloud and DevOps training programs designed by industry experts to get you certified and job-ready.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allCourses.map((c) => (
          <div key={c.title} className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 border border-gray-100 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">{c.category}</span>
              <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">{c.level}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{c.title}</h3>
            <p className="text-gray-600 text-sm flex-1 mb-4">{c.desc}</p>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
              <span className="text-sm text-gray-500">{c.duration}</span>
              <button className="text-indigo-700 font-medium text-sm hover:text-indigo-500 transition cursor-pointer">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
