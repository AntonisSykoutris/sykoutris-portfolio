'use client'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

function Section({ children, className }: Props) {
  const SectionVariants = {
    initial: {
      opacity: 0,
      y: 50
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.6
      }
    }
  }

  return (
    <motion.section
      className={cn(
        `
      mx-auto flex h-screen w-screen
      flex-col items-start justify-center p-8
      `,
        className
      )}
      variants={SectionVariants}
      initial={'initial'}
      whileInView={'animate'}
    >
      {children}
    </motion.section>
  )
}

export default Section
