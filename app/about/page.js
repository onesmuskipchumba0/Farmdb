import React from 'react'
import Image from 'next/image'
import QuickLinks from '@/components/home/QuickLinks'

export default function AboutPage() {
  const features = [
    {
      title: "AI Plant Analysis",
      description: "Upload images of your plants for instant disease detection and treatment recommendations powered by advanced AI.",
      icon: "🔍"
    },
    {
      title: "Crop Management",
      description: "Track and manage your crops with detailed insights on growth stages, optimal conditions, and yield predictions.",
      icon: "🌱"
    },
    {
      title: "Treatment Database",
      description: "Access our comprehensive database of plant diseases and recommended treatments specific to your crops.",
      icon: "💊"
    }
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-transparent py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-base-content sm:text-5xl">About FarmDB</h1>
            <p className="mt-4 text-xl text-base-content/70">
              An AI-powered platform revolutionizing crop management and plant health diagnosis
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-base-100 border border-base-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-base-content">{feature.title}</h3>
                <p className="text-base-content/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <QuickLinks />

      {/* How It Works Section */}
      <section className="py-16 bg-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-base-content">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-base-content">Plant Disease Detection</h3>
              <ul className="space-y-2 list-disc list-inside text-base-content/70">
                <li>Upload clear images of affected plant parts</li>
                <li>AI analyzes the images for disease patterns</li>
                <li>Receive instant diagnosis and treatment recommendations</li>
                <li>Access detailed treatment guides and preventive measures</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-base-content">Crop Management System</h3>
              <ul className="space-y-2 list-disc list-inside text-base-content/70">
                <li>Track multiple crops and their growth stages</li>
                <li>Get personalized cultivation recommendations</li>
                <li>Monitor environmental conditions</li>
                <li>Receive alerts for optimal harvesting times</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-16 bg-base-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8 text-base-content">Meet the Developer</h2>
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-base-content">Onesmus Bett</h3>
              <p className="mt-4 text-base-content/70">
                Full-stack developer passionate about bringing AI solutions to agriculture.
                Specialized in creating intuitive and powerful tools for farmers and agricultural professionals.
              </p>
              <div className="mt-6 space-x-4">
                <a 
                  href="https://github.com/onesmuskipchumba0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-slate-700 text-white rounded-md hover:bg-base-content/90"
                >
                  GitHub Profile
                </a>
                <a 
                  href="mailto:onesmuskipchumba5@gmail.com"
                  className="inline-block px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
