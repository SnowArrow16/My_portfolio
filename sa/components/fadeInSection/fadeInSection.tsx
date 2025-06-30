// components/FadeInSection.tsx
'use client'
import { motion } from 'framer-motion'


export default function FadeInSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
