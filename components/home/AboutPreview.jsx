import Image from 'next/image'
import Link from 'next/link'

export default function AboutPreview() {
  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6">About FarmDB</h2>
            <p className="mb-6 text-lg">
              We're revolutionizing farming with modern technology and data-driven insights.
              Our platform helps farmers make better decisions and improve crop yields.
            </p>
            <Link href="/about" className="btn btn-primary">
              Learn More About Us
            </Link>
          </div>
          <div className="flex-1">
            <Image
              src="/home/about-preview.jpg"
              alt="Modern Farming"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
