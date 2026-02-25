'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 8,
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
                About NextGen Website
              </span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              We are a passionate team of web developers and digital marketing experts dedicated to helping businesses thrive in the digital world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative w-full h-96 rounded-xl overflow-hidden order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                Our Mission
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                At NextGen Website, we believe that every business deserves a powerful online presence. Our mission is to create stunning, high-performance websites that not only look amazing but also drive real results.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                We combine cutting-edge web technologies with strategic digital marketing to help our clients achieve their business goals and stand out in the competitive digital landscape.
              </p>
            </motion.div>

            <motion.div
              className="glass-strong p-8 rounded-xl relative overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -mr-16 -mt-16" />
              <h3 className="text-2xl font-semibold mb-4 text-white">Why Choose Us?</h3>
              <ul className="space-y-4">
                {[
                  'Expert team with years of experience',
                  'Modern technologies and best practices',
                  'Custom solutions tailored to your needs',
                  'Ongoing support and maintenance',
                  'Proven track record of success',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start text-white/80"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <span className="text-amber-400 mr-3">✓</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
              Our Core Values
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'We stay ahead of the curve with the latest technologies and trends',
                icon: '🚀',
              },
              {
                title: 'Quality',
                description: 'We never compromise on quality and always deliver excellence',
                icon: '⭐',
              },
              {
                title: 'Client Focus',
                description: 'Your success is our success. We prioritize your goals and needs',
                icon: '💼',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="glass-strong p-8 rounded-xl text-center hover:scale-105 transition-transform"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              Meet Our Team
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Our diverse team of experts brings together years of experience in web development, design, and digital marketing to deliver exceptional results for our clients.
            </p>
            <p className="text-lg text-white/70 mt-4">
              We're passionate about what we do and committed to helping you succeed.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
