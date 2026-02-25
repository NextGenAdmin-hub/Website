'use client'

import { motion } from 'framer-motion'

export default function Logo({ size = 'lg' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl',
  }

  return (
    <motion.div
      className={`flex flex-col items-center ${sizeClasses[size]}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* NGW Logo */}
      <div className="relative flex items-center justify-center mb-2">
        <motion.div
          className="relative"
          animate={{
            rotateY: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* N - Blue */}
          <span
            className="inline-block text-[1.2em] font-bold"
            style={{
              background: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
              filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.8))',
            }}
          >
            N
          </span>
          
          {/* G - Gold */}
          <span
            className="inline-block text-[1.2em] font-bold -ml-2"
            style={{
              background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(245, 158, 11, 0.5)',
              filter: 'drop-shadow(0 0 10px rgba(245, 158, 11, 0.8))',
            }}
          >
            G
          </span>
          
          {/* W - Gold with sparkle effect */}
          <motion.span
            className="inline-block text-[1.2em] font-bold -ml-2 relative"
            style={{
              background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(245, 158, 11, 0.5)',
              filter: 'drop-shadow(0 0 10px rgba(245, 158, 11, 0.8))',
            }}
            animate={{
              filter: [
                'drop-shadow(0 0 10px rgba(245, 158, 11, 0.8))',
                'drop-shadow(0 0 20px rgba(245, 158, 11, 1))',
                'drop-shadow(0 0 10px rgba(245, 158, 11, 0.8))',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            W
            {/* Sparkle effect */}
            <motion.span
              className="absolute -top-1 -right-1 text-white"
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ✨
            </motion.span>
          </motion.span>
        </motion.div>
      </div>

      {/* NextGen Text */}
      <motion.div
        className="flex items-center gap-1 text-[0.4em] font-semibold"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <span
          className="inline-block"
          style={{
            color: '#3B82F6',
            textShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
          }}
        >
          Next
        </span>
        <span
          className="inline-block"
          style={{
            background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 10px rgba(245, 158, 11, 0.5)',
          }}
        >
          Gen
        </span>
      </motion.div>

      {/* WEBSITE Text */}
      <motion.div
        className="text-[0.2em] text-white/80 font-light tracking-wider mt-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        WEBSITE
      </motion.div>
    </motion.div>
  )
}
