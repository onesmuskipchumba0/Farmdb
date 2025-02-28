import Link from 'next/link'

export default function QuickLinks() {
  const links = [
    {
      title: "Crop Database",
      description: "Access comprehensive information about various crops",
      href: "/cropdb",
      color: "bg-base-100 border-2 border-primary hover:bg-primary",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: "Disease Analysis",
      description: "AI-powered plant disease detection and analysis",
      href: "/ai",
      color: "bg-base-100 border-2 border-secondary hover:bg-secondary",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Farm Management",
      description: "Track and optimize your farm operations",
      href: "/account",
      color: "bg-base-100 border-2 border-accent hover:bg-accent",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Quick Access</h2>
          <p className="text-lg text-base-content/70">Everything you need to manage your farm, in one place</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {links.map((link, index) => (
            <Link 
              key={index} 
              href={link.href}
              className={`card ${link.color} hover:scale-105 transition-all duration-300 group`}
            >
              <div className="card-body items-center text-center">
                <div className="text-primary group-hover:text-white transition-colors duration-300">
                  {link.icon}
                </div>
                <h3 className="card-title mt-4 group-hover:text-white">{link.title}</h3>
                <p className="text-base-content/70 group-hover:text-white/90">{link.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Updated Registration CTA */}
        <div className="flex flex-col items-center mt-16 p-12 rounded-2xl relative overflow-hidden bg-gradient-to-r from-emerald-600 to-green-500 dark:from-primary dark:to-primary-focus shadow-xl">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] [background-size:40px_40px]"></div>
          
          <h3 className="text-3xl font-bold mb-4 text-white relative">Ready to get started?</h3>
          <p className="text-lg mb-8 text-white/90 text-center max-w-2xl relative">
            Join thousands of farmers already using FarmDB to improve their crop yields
          </p>
          <div className="flex gap-4 relative">
            <Link 
              href="/register" 
              className="btn bg-white hover:bg-gray-100 text-emerald-700 dark:text-primary border-none"
            >
              Register Now
            </Link>
            <Link 
              href="/about" 
              className="btn btn-outline border-white text-white hover:bg-white/20 hover:border-white"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
