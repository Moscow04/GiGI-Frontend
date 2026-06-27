export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">GIGI Cloud Academy</h3>
            <p className="text-sm">Empowering the next generation of cloud and tech professionals with industry-focused training.</p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/courses" className="hover:text-white transition">Courses</a></li>
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>info@gigicloud.academy</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Tech Street, Silicon Valley, CA</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          &copy; {new Date().getFullYear()} GIGI Cloud Academy. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
