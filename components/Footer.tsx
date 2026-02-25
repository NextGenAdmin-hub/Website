'use client'

import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="relative z-10 glass-strong border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Logo size="sm" />
            <p className="mt-4 text-white/70 text-sm max-w-md">
              NextGen Website creates stunning websites and delivers powerful digital marketing solutions to help your business grow online.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/testimonial" className="text-white/70 hover:text-white transition-colors text-sm">
                  Testimonial
                </Link>
              </li>
              <li>
                <Link href="/contactus" className="text-white/70 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Email: nextgena844@gmail.com</li>
              <li>Phone: 9327444345</li>
              <li className="mt-4">
                <a 
                  href="https://www.facebook.com/NextGenWebIndia" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} NextGen Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
