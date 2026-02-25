'use client'

import { motion } from 'framer-motion'

export default function Testimonial() {
  const testimonials = [
    {
      name: 'Saurav Singh',
      role: 'Digital Marketing',
      content: 'NextGen Website helped us with excellent digital marketing services. Our online presence has grown significantly and we are getting more customers than ever before!',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      name: 'Nikhil Jena',
      role: 'Local Business Owner',
      content: 'As a local business owner, I needed a professional website. NextGen Website created an amazing website that has helped my business reach more customers in the area.',
      rating: 5,
      avatar: '👨‍💻',
    },
    {
      name: 'Pramod Meghwal',
      role: 'Medical Representative',
      content: 'The team at NextGen Website is very professional and understanding. They created a perfect website for my medical business that showcases all our services effectively.',
      rating: 5,
      avatar: '👨‍⚕️',
    },
    {
      name: 'Vibhour Kaushik',
      role: 'Local Businessman',
      content: 'I am very satisfied with the services provided by NextGen Website. They built a beautiful website for my business and helped me establish a strong online presence.',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      name: 'Subodh Patidar',
      role: 'Local Businessman',
      content: 'NextGen Website transformed my business online. The website they created is modern, fast, and has helped me attract many new customers. Highly recommended!',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      content: 'Excellent service and support from NextGen Website. They understood my business needs and delivered a website that perfectly represents my brand. Thank you!',
      rating: 5,
      avatar: '👨‍💼',
    },
  ]

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
          <motion.div
            className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
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
                What Our Clients Say
              </span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="glass-strong rounded-xl p-8 hover:scale-105 transition-transform"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-white/90 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {[
              { number: '10+', label: 'Projects Completed' },
              { number: '5+', label: 'Happy Clients' },
              { number: '2', label: 'Years Experience' },
              { number: '100%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="glass-strong rounded-xl p-8 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-white/70 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
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
              Join Our Happy Clients
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's work together to achieve amazing results for your business
            </p>
            <motion.a
              href="/contactus"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-amber-500 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-amber-600 transition-all transform hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
