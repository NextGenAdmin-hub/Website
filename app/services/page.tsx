'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites built with React, Next.js, and modern frameworks. Responsive, fast, and SEO-friendly.',
      features: [
        'Custom Website Design',
        'Responsive Development',
        'E-commerce Solutions',
        'CMS Integration',
        'Performance Optimization',
      ],
      icon: '💻',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence and drive growth.',
      features: [
        'Social Media Marketing',
        'Content Marketing',
        'Email Campaigns',
        'Brand Strategy',
        'Analytics & Reporting',
      ],
      icon: '📈',
      color: 'from-amber-500 to-amber-600',
    },
    {
      title: 'SEO Services',
      description: 'Improve your search engine rankings and drive organic traffic to your website.',
      features: [
        'Keyword Research',
        'On-Page SEO',
        'Link Building',
        'Technical SEO',
        'Local SEO',
      ],
      icon: '🔍',
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that provide exceptional user experiences.',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Visual Design',
        'Usability Testing',
      ],
      icon: '🎨',
      color: 'from-pink-500 to-pink-600',
    },
    {
      title: 'Branding',
      description: 'Create a strong brand identity that resonates with your target audience.',
      features: [
        'Logo Design',
        'Brand Guidelines',
        'Visual Identity',
        'Brand Strategy',
        'Marketing Materials',
      ],
      icon: '✨',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing support and maintenance to keep your website running smoothly.',
      features: [
        'Regular Updates',
        'Security Monitoring',
        'Backup Services',
        'Performance Tuning',
        '24/7 Support',
      ],
      icon: '🛠️',
      color: 'from-green-500 to-green-600',
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Comprehensive solutions to help your business succeed online
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="glass-strong rounded-xl overflow-hidden hover:scale-105 transition-transform"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <div className="relative w-full h-48">
                  <Image
                    src={index === 0 ? 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop' : index === 1 ? 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop' : index === 2 ? 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop' : index === 3 ? 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop' : index === 4 ? 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop' : 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop'}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent`} />
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl`}>
                    {service.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-white/70 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-white/80 text-sm">
                      <span className="text-amber-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contactus"
                  className={`inline-block px-6 py-3 bg-gradient-to-r ${service.color} rounded-lg font-semibold text-white hover:opacity-90 transition-opacity text-sm`}
                >
                  Learn More
                </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
              Our Service Details
            </span>
          </motion.h2>

          {/* Web Development Details */}
          <motion.div
            className="glass-strong rounded-2xl p-8 md:p-12 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-start gap-6 mb-6">
              <div className="text-6xl">💻</div>
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Web Development</h3>
                <p className="text-lg text-white/80 leading-relaxed mb-6">
                  In today's digital landscape, a well-designed website is the foundation of your online presence. Our web development services combine cutting-edge technology with user-centered design to create websites that not only look stunning but also perform exceptionally.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">What We Build</h4>
                    <ul className="space-y-2 text-white/70">
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-2">✓</span>
                        <span>Responsive business websites that work on all devices</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-2">✓</span>
                        <span>E-commerce platforms with secure payment gateways</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-2">✓</span>
                        <span>Custom web applications tailored to your needs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-2">✓</span>
                        <span>Content management systems for easy updates</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Technologies We Use</h4>
                    <ul className="space-y-2 text-white/70">
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-2">✓</span>
                        <span>Next.js, React, and modern JavaScript frameworks</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-2">✓</span>
                        <span>Node.js for backend development</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-2">✓</span>
                        <span>WordPress, Shopify, and other CMS platforms</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-2">✓</span>
                        <span>Cloud hosting and deployment solutions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Digital Marketing Details */}
          <motion.div
            className="glass-strong rounded-2xl p-8 md:p-12 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="flex items-start gap-6 mb-6">
              <div className="text-6xl">📈</div>
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Digital Marketing</h3>
                <p className="text-lg text-white/80 leading-relaxed mb-6">
                  Digital marketing is essential for reaching your target audience and growing your business online. Our comprehensive digital marketing strategies help you connect with customers, build brand awareness, and drive measurable results.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Our Strategies</h4>
                    <ul className="space-y-2 text-white/70">
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-2">✓</span>
                        <span>Social media campaigns across all major platforms</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-2">✓</span>
                        <span>Content creation and marketing to engage audiences</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-2">✓</span>
                        <span>Pay-per-click advertising for immediate visibility</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-2">✓</span>
                        <span>Email marketing to nurture leads and retain customers</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Results You Can Expect</h4>
                    <ul className="space-y-2 text-white/70">
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-2">✓</span>
                        <span>Increased website traffic and brand visibility</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-2">✓</span>
                        <span>Higher conversion rates and lead generation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-2">✓</span>
                        <span>Improved customer engagement and retention</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-2">✓</span>
                        <span>Measurable ROI with detailed analytics and reporting</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* SEO Optimization Details */}
          <motion.div
            className="glass-strong rounded-2xl p-8 md:p-12 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="flex items-start gap-6 mb-6">
              <div className="text-6xl">🔍</div>
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">SEO Optimization</h3>
                <p className="text-lg text-white/80 leading-relaxed mb-6">
                  Search Engine Optimization is crucial for making your website discoverable by potential customers. Our SEO services help your business appear at the top of search results, driving organic traffic and increasing your online visibility without paid advertising.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Our SEO Process</h4>
                    <ul className="space-y-2 text-white/70">
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-2">✓</span>
                        <span>Comprehensive keyword research and analysis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-2">✓</span>
                        <span>On-page optimization of content and structure</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-2">✓</span>
                        <span>Technical SEO to improve site performance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-2">✓</span>
                        <span>Link building to increase domain authority</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Benefits of SEO</h4>
                    <ul className="space-y-2 text-white/70">
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-2">✓</span>
                        <span>Higher search engine rankings for relevant keywords</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-2">✓</span>
                        <span>Increased organic traffic and qualified leads</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-2">✓</span>
                        <span>Better user experience and site performance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-2">✓</span>
                        <span>Long-term sustainable growth without ad costs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Why Choose Our Services */}
          <motion.div
            className="glass-strong rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">
              Why Choose Our Services?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  title: 'Expert Team',
                  description: 'Our experienced professionals stay updated with the latest trends and technologies to deliver cutting-edge solutions.',
                },
                {
                  title: 'Custom Solutions',
                  description: 'We understand that every business is unique. Our services are tailored to meet your specific needs and goals.',
                },
                {
                  title: 'Proven Results',
                  description: 'We have a track record of helping businesses achieve their online goals and grow their digital presence.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-xl bg-white/5"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                >
                  <h4 className="text-xl font-semibold mb-3 text-white">{item.title}</h4>
                  <p className="text-white/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="glass-strong rounded-2xl p-12 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your online presence
            </p>
            <Link
              href="/contactus"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-amber-500 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-amber-600 transition-all transform hover:scale-105 shadow-lg"
            >
              Contact Us Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
