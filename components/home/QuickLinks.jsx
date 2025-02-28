import Link from 'next/link'

export default function QuickLinks() {
  const links = [
    {
      title: "Crop Database",
      description: "Browse our comprehensive crop database",
      href: "/cropdb",
      color: "bg-primary text-secondary-content", // Updated color classes
    },
    {
      title: "Disease Analysis",
      description: "Analyze plant diseases using AI",
      href: "/ai",
      color: "bg-secondary text-secondary-content", // Updated color classes
    },
    {
      title: "Account",
      description: "Manage your farm profile",
      href: "/account",
      color: "bg-accent text-secondary-content", // Updated color classes
    },
  ]

  return (
    <section className="py-12 bg-base-100">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <Link 
              key={index} 
              href={link.href}
              className={`card ${link.color} hover:scale-105 transition-transform shadow-lg`}
            >
              <div className="card-body">
                <h3 className="card-title">{link.title}</h3>
                <p>{link.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-ghost text-current">Learn More →</button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
