'use client'

import React, { useState } from 'react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      {/* Logo */}
      <div className="flex-shrink-0 flex items-center">
        <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl">C</span>
        </div>
        <span className="ml-3 text-xl font-bold text-gray-900">
          Catalyst Creative Studio
        </span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-8">
          <a href="#home" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">
            Home
          </a>
          <a href="#services" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">
            Services
          </a>
          <a href="#portfolio" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">
            Portfolio
          </a>
          <a href="#about" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">
            About
          </a>
          <a href="#blog" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">
            Blog
          </a>
          <a href="#contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all">
            Contact Us
          </a>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button className="text-gray-700 hover:text-purple-600 focus:outline-none focus:text-purple-600 p-2">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    {/* Mobile Navigation Menu */}
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
        <a href="#home" className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium transition-colors">
          Home
        </a>
        <a href="#services" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium transition-colors">
          Services
        </a>
        <a href="#portfolio" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium transition-colors">
          Portfolio
        </a>
        <a href="#about" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium transition-colors">
          About
        </a>
        <a href="#blog" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium transition-colors">
          Blog
        </a>
        <a href="#contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white block px-3 py-2 rounded-lg text-base font-medium hover:from-purple-700 hover:to-pink-700 transition-all mt-4">
          Contact Us
        </a>
      </div>
    </div>
  </div>
</nav>
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-indigo-800 to-cyan-900 overflow-hidden">
  {/* Animated Background Elements */}
  <div className="absolute inset-0">
    <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-32 right-16 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
  </div>

  {/* Grid Pattern Overlay */}
  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

  <div className="relative z-10 container mx-auto px-6 py-20 flex items-center min-h-screen">
    <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
      
      {/* Content Side */}
      <div className="space-y-8">
        {/* Brand Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
          <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
          <span className="text-white/90 text-sm font-medium">Creative Catalyst in Action</span>
        </div>

        {/* Main Headline */}
        <div className="space-y-4">
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
            Ignite Your
            <span className="block bg-gradient-to-r from-amber-400 via-orange-500 to-cyan-400 bg-clip-text text-transparent">
              Brand's Potential
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-indigo-100/80 leading-relaxed max-w-2xl">
            We transform bold ideas into breakthrough campaigns that captivate audiences and accelerate growth. Your brand's creative catalyst awaits.
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex gap-8 py-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400">250+</div>
            <div className="text-sm text-indigo-200">Campaigns Launched</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400">89%</div>
            <div className="text-sm text-indigo-200">ROI Increase</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400">24hr</div>
            <div className="text-sm text-indigo-200">Concept Delivery</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Start Your Campaign
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </button>
          <button className="group bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
            View Our Portfolio
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">↗</span>
          </button>
        </div>

        {/* Client Logos */}
        <div className="pt-8">
          <p className="text-indigo-200/60 text-sm mb-4">Trusted by innovative brands</p>
          <div className="flex items-center gap-8 opacity-60">
            <div className="w-20 h-8 bg-white/20 rounded"></div>
            <div className="w-24 h-8 bg-white/20 rounded"></div>
            <div className="w-16 h-8 bg-white/20 rounded"></div>
            <div className="w-22 h-8 bg-white/20 rounded"></div>
          </div>
        </div>
      </div>

      {/* Visual Side */}
      <div className="relative">
        {/* Main Visual Container */}
        <div className="relative">
          {/* Floating Creative Elements */}
          <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl rotate-12 animate-bounce delay-300 shadow-2xl"></div>
          <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-cyan-400 to-indigo-500 rounded-full animate-bounce delay-700 shadow-2xl"></div>
          <div className="absolute top-1/2 -left-12 w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-xl rotate-45 animate-pulse shadow-2xl"></div>

          {/* Central Creative Hub */}
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
            {/* Mock Creative Dashboard */}
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                </div>
                <div className="text-white/60 text-sm">Creative Lab</div>
              </div>

              {/* Creative Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-amber-400 text-sm mb-1">Engagement</div>
                  <div className="text-white text-2xl font-bold">+347%</div>
                  <div className="w-full bg-white/10 rounded-full h-2 mt-2">
                    <div className="bg-gradient-to-r from-amber-400 to-orange-500 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-cyan-400 text-sm mb-1">Reach</div>
                  <div className="text-white text-2xl font-bold">2.4M</div>
                  <div className="w-full bg-white/10 rounded-full h-2 mt-2">
                    <div className="bg-gradient-to-r from-cyan-400 to-indigo-500 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>

              {/* Creative Process Visualization */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div className="flex-1 bg-white/10 rounded-lg h-3">
                    <div className="bg-gradient-to-r from-amber-400 to-orange-500 h-3 rounded-lg w-full"></div>
                  </div>
                  <span className="text-white/80 text-sm">Strategy</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div className="flex-1 bg-white/10 rounded-lg h-3">
                    <div className="bg-gradient-to-r from-cyan-400 to-indigo-500 h-3 rounded-lg w-4/5"></div>
                  </div>
                  <span className="text-white/80 text-sm">Create</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div className="flex-1 bg-white/10 rounded-lg h-3">
                    <div className="bg-gradient-to-r from-emerald-400 to-cyan-500 h-3 rounded-lg w-3/5"></div>
                  </div>
                  <span className="text-white/80 text-sm">Launch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
    <div className="flex flex-col items-center gap-2 text-white/60">
      <span className="text-sm">Discover More</span>
      <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
      </div>
    </div>
  </div>
</section>
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        Catalyst Creative Studio Services
      </h2>
      <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
        Award-winning creative solutions with proven ROI. Our experienced team of specialists delivers cutting-edge marketing campaigns through a collaborative process that drives results.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Brand Strategy & Identity */}
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Brand Strategy & Identity</h3>
        <p className="text-gray-600 mb-4">Catalyst Creative Studio crafts compelling brand identities that resonate with your target audience and differentiate you in the marketplace.</p>
        <ul className="text-sm text-gray-500 space-y-1">
          <li>• Logo & Visual Identity Design</li>
          <li>• Brand Guidelines & Standards</li>
          <li>• Market Positioning Strategy</li>
        </ul>
      </div>

      {/* Digital Marketing Campaigns */}
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Marketing Campaigns</h3>
        <p className="text-gray-600 mb-4">Data-driven digital campaigns that deliver measurable ROI through strategic targeting and creative excellence across all channels.</p>
        <ul className="text-sm text-gray-500 space-y-1">
          <li>• Social Media Marketing</li>
          <li>• PPC & Display Advertising</li>
          <li>• Email Marketing Automation</li>
        </ul>
      </div>

      {/* Creative Content Production */}
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Creative Content Production</h3>
        <p className="text-gray-600 mb-4">Full-service creative capabilities from concept to execution. Catalyst Creative Studio produces award-winning content that engages and converts.</p>
        <ul className="text-sm text-gray-500 space-y-1">
          <li>• Video Production & Animation</li>
          <li>• Photography & Visual Assets</li>
          <li>• Copywriting & Content Strategy</li>
        </ul>
      </div>

      {/* Marketing Analytics & Optimization */}
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4">
          <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Analytics & Optimization</h3>
        <p className="text-gray-600 mb-4">Our specialists leverage cutting-edge analytics tools to continuously optimize campaigns and maximize your marketing investment ROI.</p>
        <ul className="text-sm text-gray-500 space-y-1">
          <li>• Performance Tracking & Reporting</li>
          <li>• A/B Testing & Optimization</li>
          <li>• Marketing Attribution Analysis</li>
        </ul>
      </div>
    </div>

    <div className="text-center mt-12">
      <p className="text-lg text-gray-600 mb-6">
        Ready to accelerate your marketing success with Catalyst Creative Studio?
      </p>
      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
        Start Your Project
      </button>
    </div>
  </div>
</section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        What Our Clients Say
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Trusted by leading brands to deliver exceptional marketing results
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Testimonial 1 */}
      <div className="bg-white rounded-lg shadow-lg p-8 relative">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80"
            alt="Sarah Chen"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="ml-4">
            <h4 className="text-lg font-semibold text-gray-900">Sarah Chen</h4>
            <p className="text-sm text-gray-600">Marketing Director, TechFlow Inc.</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed">
          "Catalyst Creative Studio transformed our brand presence completely. Their strategic approach to our product launch campaign resulted in a 340% increase in qualified leads. The team's creativity and data-driven insights are unmatched."
        </p>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white rounded-lg shadow-lg p-8 relative">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80"
            alt="Marcus Rodriguez"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="ml-4">
            <h4 className="text-lg font-semibold text-gray-900">Marcus Rodriguez</h4>
            <p className="text-sm text-gray-600">CEO, GreenLeaf Organics</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed">
          "Working with Catalyst Creative Studio was a game-changer for our sustainable food brand. They developed an integrated digital marketing strategy that increased our online sales by 280% in just six months. Their understanding of our target audience was spot-on."
        </p>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white rounded-lg shadow-lg p-8 relative">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80"
            alt="Jennifer Walsh"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="ml-4">
            <h4 className="text-lg font-semibold text-gray-900">Jennifer Walsh</h4>
            <p className="text-sm text-gray-600">VP Marketing, FinanceFirst</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed">
          "Catalyst Creative Studio helped us navigate a complete brand repositioning in the competitive fintech space. Their comprehensive marketing strategy and flawless execution resulted in a 45% increase in brand awareness and 190% growth in customer acquisition."
        </p>
      </div>
    </div>
  </div>
</section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Company Info */}
      <div className="col-span-1 md:col-span-2">
        <h3 className="text-2xl font-bold text-orange-400 mb-4">Catalyst Creative Studio</h3>
        <p className="text-gray-300 mb-4 max-w-md">
          Igniting brands with innovative marketing solutions. We transform ideas into powerful campaigns that drive results and captivate audiences.
        </p>
        <div className="space-y-2 text-gray-300">
          <p className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            123 Creative Boulevard, Marketing District, NY 10001
          </p>
          <p className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            (555) 123-CREATIVE
          </p>
          <p className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            hello@catalystcreative.com
          </p>
        </div>
      </div>

      {/* Services */}
      <div>
        <h4 className="text-lg font-semibold mb-4 text-orange-400">Services</h4>
        <ul className="space-y-2 text-gray-300">
          <li><a href="#" className="hover:text-orange-400 transition-colors">Brand Strategy</a></li>
          <li><a href="#" className="hover:text-orange-400 transition-colors">Digital Marketing</a></li>
          <li><a href="#" className="hover:text-orange-400 transition-colors">Creative Design</a></li>
          <li><a href="#" className="hover:text-orange-400 transition-colors">Content Creation</a></li>
          <li><a href="#" className="hover:text-orange-400 transition-colors">Social Media</a></li>
        </ul>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-lg font-semibold mb-4 text-orange-400">Company</h4>
        <ul className="space-y-2 text-gray-300">
          <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
          <li><a href="#" className="hover:text-orange-400 transition-colors">Our Work</a></li>
          <li><a href="#" className="hover:text-orange-400 transition-colors">Careers</a></li>
          <li><a href="#" className="hover:text-orange-400 transition-colors">Blog</a></li>
          <li><a href="#" className="hover:text-orange-400 transition-colors">Contact</a></li>
        </ul>
      </div>
    </div>

    {/* Social Media & Copyright */}
    <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
      <div className="flex space-x-6 mb-4 md:mb-0">
        <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
      </div>
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Catalyst Creative Studio. All rights reserved.
      </p>
    </div>
  </div>
</footer>
    </main>
  )
}