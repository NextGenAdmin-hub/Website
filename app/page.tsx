'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/components/Logo'

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Logo size="lg" />
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-8 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-amber-400 bg-clip-text text-transparent">
                  Create Stunning Websites
                </span>
                <br />
                <span className="text-white">And Grow Your Business</span>
              </motion.h1>

              <motion.p
                className="text-xl sm:text-2xl text-white/80 max-w-3xl mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Professional web development and digital marketing services to elevate your online presence
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Link
                  href="/contactus"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/50"
                >
                  Get Started
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 glass rounded-lg font-semibold text-white hover:bg-white/10 transition-all transform hover:scale-105"
                >
                  Our Services
                </Link>
              </motion.div>
            </div>
            
            {/* Hero Image */}
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="relative w-full h-[600px] rounded-2xl overflow-hidden glass-strong">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                  alt="Web Development"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Why Website is Important Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
                Why a Website is Important to Your Business
              </span>
            </h2>
            <div className="glass-strong rounded-2xl p-8 md:p-12">
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
                In today's digital age, having a professional website is not just an option—it's a necessity for business growth. Your website serves as your digital storefront, open 24/7, reaching customers worldwide and establishing your brand's credibility.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {[
                  {
                    title: '24/7 Availability',
                    description: 'Your website works around the clock, allowing customers to learn about your business, view products, and contact you at any time, even outside business hours.',
                  },
                  {
                    title: 'Credibility & Trust',
                    description: 'A professional website builds trust with potential customers. It shows that your business is established, legitimate, and committed to serving your customers.',
                  },
                  {
                    title: 'Global Reach',
                    description: 'Break geographical barriers and reach customers worldwide. Your website can attract customers from anywhere, expanding your market beyond local boundaries.',
                  },
                  {
                    title: 'Cost-Effective Marketing',
                    description: 'Compared to traditional advertising, a website provides a cost-effective way to market your business, showcase your products, and generate leads.',
                  },
                  {
                    title: 'Customer Engagement',
                    description: 'Interact with your customers through contact forms, live chat, blogs, and social media integration, building stronger relationships and loyalty.',
                  },
                  {
                    title: 'Competitive Advantage',
                    description: 'Stay ahead of competitors who may not have an online presence. A well-designed website gives you a significant edge in the marketplace.',
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="p-6 rounded-xl bg-white/5 border border-white/10"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                    <p className="text-white/70">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
              What We Offer
            </span>
          </motion.h2>

          <div className="space-y-12">
            {/* Web Development */}
            <motion.div
              className="glass-strong rounded-2xl p-8 md:p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative w-full h-64 lg:h-80 rounded-xl overflow-hidden order-2 lg:order-1">
                  <Image
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
                    alt="Web Development"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 order-1 lg:order-2">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Web Development</h3>
                  <p className="text-lg text-white/80 mb-6 leading-relaxed">
                    We create stunning, high-performance websites that not only look amazing but also drive real business results. Our web development services combine cutting-edge technology with user-centered design to deliver exceptional digital experiences.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-3">
                      <span className="text-amber-400 mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Custom Website Design</h4>
                        <p className="text-white/70 text-sm">Unique designs tailored to your brand identity and business goals</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-amber-400 mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Responsive Development</h4>
                        <p className="text-white/70 text-sm">Mobile-first approach ensuring perfect display on all devices</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-amber-400 mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold text-white mb-1">E-commerce Solutions</h4>
                        <p className="text-white/70 text-sm">Full-featured online stores with secure payment integration</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-amber-400 mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold text-white mb-1">CMS Integration</h4>
                        <p className="text-white/70 text-sm">Easy-to-use content management systems for seamless updates</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-amber-400 mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Performance Optimization</h4>
                        <p className="text-white/70 text-sm">Lightning-fast load times and optimized user experience</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-amber-400 mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold text-white mb-1">SEO-Friendly Structure</h4>
                        <p className="text-white/70 text-sm">Built with search engine optimization in mind from the start</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    Whether you need a simple business website, a complex web application, or an e-commerce platform, we have the expertise to bring your vision to life. Our development process ensures your website is scalable, secure, and ready to grow with your business.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Digital Marketing */}
            <motion.div
              className="glass-strong rounded-2xl p-8 md:p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="flex-1 order-2 lg:order-1">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Digital Marketing</h3>
                  <p className="text-lg text-white/80 mb-6 leading-relaxed">
                    Transform your online presence with strategic digital marketing campaigns that drive traffic, generate leads, and increase conversions. We help businesses of all sizes establish a strong digital footprint and connect with their target audience effectively.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-3">
                      <span className="text-amber-400 mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Social Media Marketing</h4>
                        <p className="text-white/70 text-sm">Engage with your audience across all major social platforms</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-amber-400 mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Content Marketing</h4>
                        <p className="text-white/70 text-sm">Create valuable, shareable content that attracts and retains customers</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-amber-400 mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Pay-Per-Click (PPC) Advertising</h4>
                        <p className="text-white/70 text-sm">Targeted ads on Google, Facebook, and other platforms for immediate results</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-amber-400 mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Email Marketing Campaigns</h4>
                        <p className="text-white/70 text-sm">Nurture leads and maintain customer relationships through email</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-amber-400 mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Brand Strategy & Positioning</h4>
                        <p className="text-white/70 text-sm">Develop a strong brand identity that resonates with your audience</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-amber-400 mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Analytics & Reporting</h4>
                        <p className="text-white/70 text-sm">Track performance with detailed analytics and actionable insights</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    Our data-driven approach ensures every marketing dollar is spent wisely. We analyze your target market, create compelling campaigns, and continuously optimize for better results. From increasing brand awareness to driving sales, we help you achieve your marketing objectives.
                  </p>
                </div>
                <div className="relative w-full h-64 lg:h-80 rounded-xl overflow-hidden order-1 lg:order-2">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                    alt="Digital Marketing"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* SEO Optimization */}
            <motion.div
              className="glass-strong rounded-2xl p-8 md:p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative w-full h-64 lg:h-80 rounded-xl overflow-hidden order-2 lg:order-1">
                  <Image
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop"
                    alt="SEO Optimization"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 order-1 lg:order-2">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">SEO Optimization</h3>
                  <p className="text-lg text-white/80 mb-6 leading-relaxed">
                    Improve your search engine rankings and drive organic traffic to your website. Our comprehensive SEO services help your business appear at the top of search results, attracting qualified leads who are actively looking for your products or services.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-3">
                      <span className="text-amber-400 mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Keyword Research & Analysis</h4>
                        <p className="text-white/70 text-sm">Identify high-value keywords your customers are searching for</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-amber-400 mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold text-white mb-1">On-Page SEO Optimization</h4>
                        <p className="text-white/70 text-sm">Optimize titles, meta descriptions, headers, and content structure</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-amber-400 mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Technical SEO</h4>
                        <p className="text-white/70 text-sm">Improve site speed, mobile-friendliness, and crawlability</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-amber-400 mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Link Building</h4>
                        <p className="text-white/70 text-sm">Build high-quality backlinks to improve domain authority</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-amber-400 mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Local SEO</h4>
                        <p className="text-white/70 text-sm">Dominate local search results and attract nearby customers</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-amber-400 mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold text-white mb-1">SEO Audits & Monitoring</h4>
                        <p className="text-white/70 text-sm">Regular audits and performance tracking to ensure continuous improvement</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    SEO is a long-term investment that pays dividends. By appearing on the first page of search results, you can attract thousands of potential customers every month without paying for ads. Our proven SEO strategies have helped businesses increase their organic traffic by 200-500% within the first year.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="glass-strong rounded-2xl p-12 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
                Ready to Transform Your Online Presence?
              </span>
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's work together to create something amazing for your business
            </p>
            <Link
              href="/contactus"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-amber-500 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-amber-600 transition-all transform hover:scale-105 shadow-lg"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
