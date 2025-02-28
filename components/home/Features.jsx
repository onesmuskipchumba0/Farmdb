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
        <h2 className="text-4xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <figure className="px-4 pt-4">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={400}
                  height={300}
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
