// components/FadeInSection.tsx
'use client'
import { motion } from 'framer-motion'

type FadeInSectionprops ={
    children: React.ReactNode
    duration?: number
    delay?: number
}


export default function FadeInSection({ 
    children,
    duration=1.0,
    delay=0
 }:FadeInSectionprops) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, ease: 'easeOut', delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
