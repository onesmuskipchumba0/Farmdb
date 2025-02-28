import Image from 'next/image'

export default function Features() {
  const features = [
    {
      title: "Crop Management",
      description: "Track and manage your crops with detailed insights and schedules",
      image: "/home/crop-management.jpg",
    },
    {
      title: "AI Disease Analysis",
      description: "Detect plant diseases early using our advanced AI technology",
      image: "/home/ai-analysis.jpg",
    },
    {
      title: "Comprehensive Database",
      description: "Access extensive information about crops, diseases, and treatments",
      image: "/home/database.jpg",
    },
  ]

  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Our Features</h2>
        <p className="text-lg text-center text-base-content/70 mb-12">Empower your farming with modern tools</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card bg-base-100 shadow-xl group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <figure className="relative h-48 w-full overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              </figure>
              <div className="card-body relative">
                <div className="absolute -top-8 right-4 w-16 h-16 bg-primary text-white rounded-xl flex items-center justify-center transform -rotate-12 group-hover:rotate-0 transition-all duration-300 shadow-lg group-hover:scale-110">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="card-title text-xl mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-base-content/70">
                  {feature.description}
                </p>
                <div className="card-actions justify-end mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="btn btn-primary btn-sm text-white">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
