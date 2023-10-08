'use client'

import { AnimatePresence, motion } from 'framer-motion'

//This component wraps every page so it has a smooth transition
const pageVariant = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.3,
    },
  },
  exit: {
    opacity: 0,
    y: 15,
  },
}

export const PageWrapper = ({ children }) => {
  return (
    <>
      <AnimatePresence mode='wait'>
        <motion.div
          variants={pageVariant}
          initial='hidden'
          animate='visible'
          exit='exit'>
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  )
}
