import Link from 'next/link'
import Image from 'next/image'
import farmLogo from './assets/farm-logo.svg'

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Crop Database', href: '/cropdb' },
    { name: 'AI Analysis', href: '/ai' },
    { name: 'Account', href: '/account' },
  ]

  const resourceLinks = [
    { name: 'Documentation', href: '/docs' },
    { name: 'API', href: '/api' },
    { name: 'Support', href: '/support' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ]

  return (
    <footer className="bg-base-100 border-t border-base-200">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src={farmLogo} alt="FarmDB Logo" width={32} height={32} />
              <span className="text-xl font-bold text-primary">FarmDB</span>
            </Link>
            <p className="text-sm text-base-content/70">
              Modern farming solutions for better crop management and yield optimization.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-base-content">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-base-content/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4 text-base-content">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-base-content/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Developer Info */}
          <div>
            <h3 className="font-bold mb-4 text-base-content">Developer</h3>
            <ul className="space-y-2 text-base-content/70">
              <li>Onesmus Bett</li>
              <li>
                <a 
                  href="https://github.com/onesmuskipchumba0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="mailto:onesmuskipchumba5@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-base-200 mt-8 pt-8 text-sm text-center text-base-content/70">
          <p>© {new Date().getFullYear()} FarmDB. Developed by Onesmus Bett. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
