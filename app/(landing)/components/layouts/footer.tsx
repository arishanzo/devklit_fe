import Link from 'next/link';

const Footer = () => {
    return (
        <>
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

    {/* Main Footer */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">

      {/* Company */}
      <div className="lg:col-span-2 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start space-x-2 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">T</span>
          </div>
          <span className="text-xl font-bold">TechCo</span>
        </div>

        <p className="text-gray-300 mb-5 max-w-sm mx-auto sm:mx-0">
          Empowering businesses with innovative technology solutions and
          digital transformation services.
        </p>

        {/* Social */}
        <div className="flex justify-center sm:justify-start space-x-4">
          <Link href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition hover:scale-110">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* Solutions */}
      <div className="text-center sm:text-left">
        <h3 className="font-semibold text-lg mb-4">Solutions</h3>
        <ul className="space-y-2">
          <li><Link href="#" className="text-gray-300 hover:text-white">Cloud Services</Link></li>
          <li><Link href="#" className="text-gray-300 hover:text-white">AI & Machine Learning</Link></li>
          <li><Link href="#" className="text-gray-300 hover:text-white">Cybersecurity</Link></li>
          <li><Link href="#" className="text-gray-300 hover:text-white">Data Analytics</Link></li>
        </ul>
      </div>

      {/* Company */}
      <div className="text-center sm:text-left">
        <h3 className="font-semibold text-lg mb-4">Company</h3>
        <ul className="space-y-2">
          <li><Link href="#" className="text-gray-300 hover:text-white">About Us</Link></li>
          <li><Link href="#" className="text-gray-300 hover:text-white">Careers</Link></li>
          <li><Link href="#" className="text-gray-300 hover:text-white">Blog</Link></li>
          <li><Link href="#" className="text-gray-300 hover:text-white">Press</Link></li>
        </ul>
      </div>

      {/* Support */}
      <div className="text-center sm:text-left">
        <h3 className="font-semibold text-lg mb-4">Support</h3>
        <ul className="space-y-2">
          <li><Link href="#" className="text-gray-300 hover:text-white">Help Center</Link></li>
          <li><Link href="#" className="text-gray-300 hover:text-white">Contact Us</Link></li>
          <li><Link href="#" className="text-gray-300 hover:text-white">Documentation</Link></li>
          <li><Link href="#" className="text-gray-300 hover:text-white">API Status</Link></li>
        </ul>
      </div>

    </div>

    {/* Newsletter */}
    <div className="border-t border-white/10 pt-8 mb-10 text-center sm:text-left">
      <div className="max-w-md mx-auto sm:mx-0">
        <h3 className="font-semibold text-lg mb-2">Subscribe Newsletter</h3>
        <p className="text-gray-300 text-sm mb-4">
          Get the latest updates and insights.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
          />

          <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium hover:shadow-lg transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>

    {/* Bottom */}
    <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
      <p className="text-gray-400 text-sm">
        © 2024 TechCo. All rights reserved.
      </p>

      <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-sm">
        <Link href="#" className="text-gray-400 hover:text-white">Privacy Policy</Link>
        <Link href="#" className="text-gray-400 hover:text-white">Terms</Link>
        <Link href="#" className="text-gray-400 hover:text-white">Cookies</Link>
      </div>
    </div>

  </div>
</footer>
</>
    );
};

export default Footer;